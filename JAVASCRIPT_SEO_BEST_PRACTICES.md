# JavaScript SEO Best Practices for Single Page Applications

This document outlines proven strategies for optimizing Single Page Applications (SPAs) for search engines. While server-side rendering provides the most robust solution, these techniques significantly improve SEO performance for client-side rendered applications.

---

## Table of Contents

1. [Status Code Management](#status-code-management)
2. [Error Page Handling](#error-page-handling)
3. [Meta Robots Tags](#meta-robots-tags)
4. [URL Structure & Routing](#url-structure--routing)
5. [Content Loading Patterns](#content-loading-patterns)
6. [Testing & Validation](#testing--validation)
7. [Common Pitfalls](#common-pitfalls)

---

## 1. Status Code Management

### The Challenge

SPAs return HTTP 200 for all routes, including non-existent pages. Search engines cannot distinguish between valid content and error pages based on status codes alone.

### Solution: Meta Robots Directives

Since true HTTP status codes require server configuration, use meta robots tags to prevent indexing of error pages.

#### Implementation

```typescript
// For 404 pages
<Helmet>
  <meta name="robots" content="noindex,nofollow" />
  <title>404 - Page Not Found | Your Site</title>
</Helmet>
```

```typescript
// For error states
<Helmet>
  <meta name="robots" content="noindex,nofollow" />
  <title>Error | Your Site</title>
</Helmet>
```

### Best Practices

**DO:**
- ✅ Add noindex to all error pages (404, 500, etc.)
- ✅ Add noindex to pages with missing data
- ✅ Use meaningful page titles that indicate error states
- ✅ Provide user-friendly error messages with navigation options

**DON'T:**
- ❌ Leave error pages without noindex tags
- ❌ Show "Page not found" on pages that should exist
- ❌ Return error pages without proper meta tags
- ❌ Redirect valid requests to error pages

---

## 2. Error Page Handling

### Creating Proper 404 Pages

#### Requirements

1. **Dedicated 404 Component**
   ```typescript
   export default function NotFoundPage() {
     return (
       <>
         <Helmet>
           <meta name="robots" content="noindex,nofollow" />
           <title>404 - Page Not Found</title>
         </Helmet>
         <div>
           <h1>404 - Page Not Found</h1>
           <p>Sorry, the page you're looking for doesn't exist.</p>
           <Link to="/">Return Home</Link>
         </div>
       </>
     );
   }
   ```

2. **Router Configuration**
   ```typescript
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" element={<AboutPage />} />
     {/* Other routes */}
     <Route path="*" element={<NotFoundPage />} />
   </Routes>
   ```

3. **Dynamic Route Handling**
   ```typescript
   export default function ServicePage() {
     const service = getServiceBySlug(slug);

     if (!service) {
       return <NotFoundPage />;
     }

     return <ServiceTemplate service={service} />;
   }
   ```

### Error Boundary Implementation

```typescript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Helmet>
            <meta name="robots" content="noindex,nofollow" />
            <title>Error | Your Site</title>
          </Helmet>
          <ErrorPage />
        </>
      );
    }

    return this.props.children;
  }
}
```

---

## 3. Meta Robots Tags

### When to Use Different Directives

#### Index, Follow (Default for Content Pages)
```typescript
<meta name="robots" content="index,follow" />
```
**Use for:** All normal content pages

#### Noindex, Nofollow (Error States)
```typescript
<meta name="robots" content="noindex,nofollow" />
```
**Use for:**
- 404 pages
- Error pages (500, etc.)
- Pages with missing/invalid data
- Broken or incomplete content

#### Noindex, Follow (Utility Pages)
```typescript
<meta name="robots" content="noindex,follow" />
```
**Use for:**
- Search result pages
- Filter/sort variations
- Duplicate content variations
- Login/signup pages

#### Index, Nofollow (Limited Crawling)
```typescript
<meta name="robots" content="index,nofollow" />
```
**Use for:**
- User-generated content pages
- Pages with untrusted external links

### Dynamic Meta Robots Management

```typescript
// src/utils/seoHelpers.ts
export function useMetaRobots(options: {
  index?: boolean;
  follow?: boolean;
}) {
  useEffect(() => {
    const content = getRobotsContent(options);

    let metaTag = document.querySelector('meta[name="robots"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'robots');
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute('content', content);

    return () => {
      if (metaTag?.parentNode) {
        metaTag.parentNode.removeChild(metaTag);
      }
    };
  }, [options.index, options.follow]);
}

// Usage
function MyPage() {
  useMetaRobots({ index: false, follow: false });
  // Page content
}
```

---

## 4. URL Structure & Routing

### Best Practices

#### Use Clean URLs
```
✅ Good: /services/lock-repair
❌ Bad:  /services?id=lock-repair
❌ Bad:  /#/services/lock-repair
```

#### Implement Proper Navigation
```typescript
// Use React Router Link components
<Link to="/services/lock-repair">Lock Repair</Link>

// NOT onclick handlers
<div onClick={() => navigate('/services')}>Services</div>
```

#### Handle Hash Routing Properly
If using hash routing for sections:
```typescript
// Good: Separate routes with anchor links
<Route path="/services" element={<ServicesPage />} />
<a href="#residential">Residential Services</a>

// Bad: All content in hash routes
<Route path="/#/services" /> // Not indexable
```

### URL Change Detection

Ensure search engines can detect URL changes:

```typescript
// Update document title on route change
function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

---

## 5. Content Loading Patterns

### Loading States

Show meaningful content while loading:

```typescript
function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <ContentSkeleton />
      </div>
    );
  }

  if (!product) {
    return <NotFoundPage />;
  }

  return <ProductDetails product={product} />;
}
```

### Lazy Loading

**For SEO-critical content:**
```typescript
// ✅ Load critical content immediately
useEffect(() => {
  fetchMainContent();
}, []);
```

**For non-critical content:**
```typescript
// ✅ Lazy load non-critical sections
const Reviews = lazy(() => import('./Reviews'));

<Suspense fallback={<ReviewsSkeleton />}>
  <Reviews />
</Suspense>
```

### Infinite Scroll & Pagination

```typescript
// ✅ Provide paginated URLs for SEO
<Link to="/services?page=2">Page 2</Link>

// Add pagination meta tags
<Helmet>
  <link rel="prev" href="/services?page=1" />
  <link rel="next" href="/services?page=3" />
</Helmet>

// ❌ Infinite scroll without URL updates
// Search engines cannot crawl beyond page 1
```

---

## 6. Testing & Validation

### Tools for Testing JavaScript SEO

#### 1. Google Search Console
- URL Inspection Tool
- Check "View Crawled Page" to see rendered HTML
- Monitor indexing status

#### 2. Mobile-Friendly Test
```
https://search.google.com/test/mobile-friendly
```
- Tests JavaScript rendering
- Shows rendered HTML
- Identifies mobile issues

#### 3. Rich Results Test
```
https://search.google.com/test/rich-results
```
- Validates structured data
- Tests JavaScript-rendered markup
- Shows preview of rich snippets

#### 4. Lighthouse
```bash
npm install -g @lh ci/cli
lighthouse https://yoursite.com --view
```

Key metrics to check:
- SEO score (aim for 90+)
- Accessibility score
- Best practices score
- Performance score

#### 5. Browser DevTools

**Check rendered HTML:**
```javascript
// In browser console
document.querySelector('meta[name="robots"]')?.content
document.title
document.querySelector('h1')?.textContent
```

**Simulate Googlebot:**
Use Chrome DevTools > Network > User Agent > Googlebot

### Validation Checklist

- [ ] All pages have unique, descriptive titles
- [ ] Meta descriptions present and unique
- [ ] 404 pages have noindex tag
- [ ] Error pages have noindex tag
- [ ] All navigation uses proper links (not onclick)
- [ ] Content loads without JavaScript errors
- [ ] Structured data validates
- [ ] Mobile-friendly
- [ ] Fast loading (< 3s)
- [ ] No console errors
- [ ] URLs are clean and semantic
- [ ] Internal links work correctly

---

## 7. Common Pitfalls

### 1. Infinite Redirect Loops

**Problem:**
```typescript
// ❌ Creates redirect loop
useEffect(() => {
  if (!user) {
    navigate('/login');
  }
}, [user, navigate]); // Runs every render
```

**Solution:**
```typescript
// ✅ Redirect once
useEffect(() => {
  if (!user) {
    navigate('/login');
  }
}, []); // Only on mount
```

### 2. Content Not Accessible to Crawlers

**Problem:**
```typescript
// ❌ Content hidden from crawlers
{isAuthenticated && <ImportantContent />}
```

**Solution:**
```typescript
// ✅ Show content with paywall/login prompt
<ImportantContent />
{!isAuthenticated && <LoginPrompt overlay />}
```

### 3. Client-Only Rendering Critical Content

**Problem:**
```typescript
// ❌ Title set only in component
function Page() {
  document.title = "My Page"; // Too late for initial render
}
```

**Solution:**
```typescript
// ✅ Use Helmet for meta tags
function Page() {
  return (
    <>
      <Helmet>
        <title>My Page</title>
      </Helmet>
      {/* Content */}
    </>
  );
}
```

### 4. Not Handling Missing Data

**Problem:**
```typescript
// ❌ Shows error without noindex
function ServicePage() {
  const service = getService(id);
  return service ? <Details /> : <div>Not found</div>;
}
```

**Solution:**
```typescript
// ✅ Use proper 404 page
function ServicePage() {
  const service = getService(id);
  return service ? <ServiceTemplate /> : <NotFoundPage />;
}
```

### 5. Broken Internal Links

**Problem:**
```typescript
// ❌ Breaks crawling
<div onClick={() => navigate('/page')}>Link</div>
```

**Solution:**
```typescript
// ✅ Use proper links
<Link to="/page">Link</Link>
```

### 6. No Fallback for JavaScript Disabled

**Problem:**
No `<noscript>` tag in `index.html`

**Solution:**
```html
<noscript>
  <div>
    <h1>JavaScript Required</h1>
    <p>This site requires JavaScript. Please enable it to continue.</p>
    <p>Contact us at: <a href="tel:555-1234">555-1234</a></p>
  </div>
</noscript>
```

### 7. Slow JavaScript Execution

**Problem:**
Large JavaScript bundles delay rendering

**Solutions:**
- Code splitting: `const Component = lazy(() => import('./Component'))`
- Tree shaking: Remove unused code
- Minimize dependencies: Review package.json regularly
- Use production builds: Uglify and compress
- CDN for static assets

---

## Implementation Checklist

### Phase 1: Critical Fixes
- [ ] Create dedicated 404 page with noindex
- [ ] Add noindex to error boundary
- [ ] Update all dynamic routes to handle missing data
- [ ] Add noscript tag to index.html
- [ ] Verify all navigation uses Link components

### Phase 2: Meta Tags & SEO
- [ ] Create SEO utility functions
- [ ] Implement dynamic meta robots management
- [ ] Add unique titles to all pages
- [ ] Add unique descriptions to all pages
- [ ] Validate structured data

### Phase 3: Performance
- [ ] Implement code splitting
- [ ] Lazy load non-critical components
- [ ] Optimize images
- [ ] Minimize bundle size
- [ ] Add loading states

### Phase 4: Testing
- [ ] Test with Lighthouse
- [ ] Validate in Search Console
- [ ] Check mobile-friendliness
- [ ] Verify rendered HTML
- [ ] Test error scenarios

### Phase 5: Monitoring
- [ ] Set up Search Console monitoring
- [ ] Track Core Web Vitals
- [ ] Monitor indexing status
- [ ] Review crawl errors regularly

---

## Resources

### Official Documentation
- [Google JavaScript SEO Guidelines](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google's JavaScript SEO Video Series](https://www.youtube.com/playlist?list=PLKoqnv2vTMUPOalM1zuWDP9OQl851WMM9)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a)

### Testing Tools
- [Google Search Console](https://search.google.com/search-console)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Further Reading
- [Rendering on the Web](https://web.dev/rendering-on-the-web/)
- [Fix Search-related JavaScript problems](https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript)
- [Core Web Vitals](https://web.dev/vitals/)

---

## Conclusion

While these techniques improve SEO for SPAs, server-side rendering or static site generation provides the most robust solution. Consider the trade-offs between implementation complexity and SEO performance when choosing an approach for your application.

For a comprehensive analysis of SSR options, see [SSR_MIGRATION_PLAN.md](./SSR_MIGRATION_PLAN.md).
