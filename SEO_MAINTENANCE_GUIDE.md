# SEO & Performance Maintenance Guide

This guide helps maintain the SEO and performance optimizations implemented for the A Secure Annapolis Locksmith website.

---

## 1. When Adding New Pages

### Update Sitemaps

**Location:** `/public/sitemap-pages.xml` or `/public/sitemap-blog.xml`

When adding a new page:

```xml
<url>
  <loc>https://www.asecureannapolislocksmith.com/NEW-PAGE-PATH</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

**Priority Guidelines:**
- Homepage: 1.0
- Main services/locations: 0.9
- Secondary pages: 0.7-0.8
- Legal/utility pages: 0.3-0.4

**After updating:**
1. Update `lastmod` date in `sitemap-index.xml`
2. Submit to Google Search Console

### Add Canonical Tag

In your new page component:

```tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <link rel="canonical" href="https://www.asecureannapolislocksmith.com/YOUR-PATH" />
</Helmet>
```

**Important:** Always use the full canonical URL with https://www prefix.

---

## 2. When Adding Images

### Critical Images (Above the Fold)

For hero images or other LCP candidates:

```tsx
<img
  src="YOUR-IMAGE-URL"
  alt="Descriptive alt text with keywords"
  loading="eager"
  fetchPriority="high"
  width="1920"
  height="1080"
/>
```

### Below-the-Fold Images

For all other images:

```tsx
<img
  src="YOUR-IMAGE-URL"
  alt="Descriptive alt text"
  loading="lazy"
  width="800"
  height="600"
/>
```

### Responsive Images (Optional)

For large images that need different sizes:

```tsx
<img
  src="medium-image.jpg"
  srcSet="small.jpg 800w, medium.jpg 1200w, large.jpg 1600w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
  width="1200"
  height="800"
  loading="lazy"
/>
```

### ImageKit Optimization

Always use ImageKit transformations:

```
https://ik.imagekit.io/YOUR-ID/image.jpg?tr=f-auto,q-auto
```

- `f-auto` = Automatic format (WebP/AVIF)
- `q-auto` = Automatic quality optimization

---

## 3. When Adding Third-Party Scripts

### Non-Critical Scripts (Analytics, Chat, etc.)

Always use `defer`:

```html
<script defer src="https://example.com/script.js"></script>
```

**Never use `async` for analytics** - it can block rendering.

### Before Adding

1. Check if the script is necessary
2. Consider impact on Core Web Vitals
3. Add DNS prefetch if external:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

---

## 4. When Updating Content

### Blog Posts

1. Add to `/public/sitemap-blog.xml`
2. Update lastmod date
3. Ensure canonical tag in BlogPostPage component

### Service/Location Pages

1. Add to `/public/sitemap-pages.xml`
2. Use appropriate template (ServiceTemplate or LocationTemplate)
3. Verify canonical tag is auto-generated

---

## 5. Monitoring & Testing

### After Major Changes

**Run these checks:**

```bash
# Build the project
npm run build

# Check bundle sizes
# Look for unexpected increases
```

**Tools to use:**

1. **Google Search Console**
   - Submit updated sitemaps
   - Monitor Core Web Vitals
   - Check for indexing issues

2. **PageSpeed Insights**
   - Test on mobile and desktop
   - Verify LCP < 2.5s
   - Check CLS < 0.1

3. **Lighthouse (Chrome DevTools)**
   - Run performance audit
   - Check SEO score
   - Verify best practices

### Monthly Tasks

- [ ] Check Core Web Vitals in Search Console
- [ ] Review sitemap coverage in Search Console
- [ ] Run PageSpeed Insights on key pages
- [ ] Check for 404 errors in Search Console
- [ ] Verify canonical tags are correct

---

## 6. robots.txt Guidelines

**File:** `/public/robots.txt`

### When to Update

**Add Disallow rules for:**
- Admin areas: `/admin/`
- Test environments: `/test/`, `/staging/`
- Duplicate content: `/print/`, `/pdf/`
- Private areas
- URL parameters that create duplicates

**Never block:**
- `/assets/`
- JavaScript files (`*.js`)
- CSS files (`*.css`)
- Images (`*.jpg`, `*.png`, `*.webp`)

### Example

```
# Don't block this
Allow: /assets/

# Block this
Disallow: /admin/
Disallow: /*?sessionid*
```

---

## 7. Common Issues & Solutions

### Issue: Images Cause Layout Shift

**Solution:** Always add width/height attributes

```tsx
// ❌ Wrong
<img src="image.jpg" alt="..." />

// ✅ Correct
<img src="image.jpg" alt="..." width="800" height="600" />
```

### Issue: Slow LCP

**Solutions:**
1. Check hero image has `loading="eager"` and `fetchPriority="high"`
2. Verify preconnect to image CDN
3. Ensure image is optimized (WebP, compressed)

### Issue: Page Not Indexed

**Check:**
1. Is it in the sitemap?
2. Does it have a canonical tag?
3. Is it blocked in robots.txt?
4. Has it been submitted to Search Console?

### Issue: High CLS Score

**Solutions:**
1. Add dimensions to all images
2. Reserve space for ads/embeds
3. Use `font-display: swap` for fonts
4. Avoid inserting content above existing content

---

## 8. Code Splitting Best Practices

### Current Configuration

`vite.config.ts` splits code into:
- `react-vendor`: React core libraries
- `ui-vendor`: UI libraries (Framer Motion, Lucide)
- `form-vendor`: Form libraries

### When to Update

**Add a new chunk if:**
- A heavy library is used across multiple pages
- A library is only needed on specific pages

**Example:**

```typescript
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'ui-vendor': ['framer-motion', 'lucide-react'],
  'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
  'maps-vendor': ['@react-google-maps/api'], // New chunk
}
```

---

## 9. Checklist for New Features

Before deploying new features:

- [ ] All images have width/height attributes
- [ ] Critical images use `loading="eager"` and `fetchPriority="high"`
- [ ] Non-critical images use `loading="lazy"`
- [ ] New pages added to appropriate sitemap
- [ ] Canonical tags implemented
- [ ] Third-party scripts use `defer`
- [ ] Build succeeds without warnings
- [ ] Bundle size hasn't increased significantly
- [ ] Lighthouse performance score > 90
- [ ] No new a11y issues introduced

---

## 10. Resources

### Documentation
- [SEO_PERFORMANCE_IMPLEMENTATION.md](./SEO_PERFORMANCE_IMPLEMENTATION.md) - Complete implementation details
- [TECHNICAL_SEO_AUDIT_REPORT.md](./TECHNICAL_SEO_AUDIT_REPORT.md) - Original audit report

### External Resources
- [Web.dev Core Web Vitals](https://web.dev/vitals/)
- [Google Search Central](https://developers.google.com/search)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)

### Tools
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Chrome DevTools Lighthouse
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

---

## Questions?

For issues or questions about SEO/performance optimizations, refer to:
1. This maintenance guide
2. SEO_PERFORMANCE_IMPLEMENTATION.md
3. Project documentation

Remember: **Performance is a feature**. Keep it optimized!
