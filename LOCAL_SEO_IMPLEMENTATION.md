# Local SEO Implementation Guide

## Overview

This document outlines the complete local SEO implementation for A Secure Annapolis Locksmith website, including structured data, NAP consistency, and Google Business Profile integration.

---

## Components Implemented

### 1. LocalBusinessSchema Component
**Location:** `/src/components/seo/LocalBusinessSchema.tsx`

This component provides comprehensive Schema.org structured data markup for local business SEO.

#### Features:
- Complete LocalBusiness/Locksmith schema
- Geographic coordinates
- Service areas (all Anne Arundel County locations)
- Business hours with emergency service notation
- Service catalog with detailed offerings
- Aggregate ratings and reviews
- Payment methods and price range
- Social media profiles
- Multiple service categories

#### Usage:
```tsx
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

// On home page
<LocalBusinessSchema page="home" />

// On location pages
<LocalBusinessSchema page="location" locationName="Annapolis, MD" />

// On service pages
<LocalBusinessSchema page="service" serviceName="Emergency Lockout" />
```

#### Schema Types Included:
- `@type: "Locksmith"` (primary business type)
- Address with full postal details
- GeoCoordinates for map visibility
- OpeningHoursSpecification
- Service catalog (OfferCatalog)
- AggregateRating (4.9/5 stars)
- Review samples
- Area served (multiple cities)
- Social media links (sameAs)

---

### 2. NAPComponent
**Location:** `/src/components/seo/NAPComponent.tsx`

Ensures consistent business Name, Address, and Phone display across all website pages with proper schema.org microdata.

#### Variants:
1. **Full** - Complete contact card with all details
2. **Compact** - Condensed version for sidebars
3. **Footer** - Formatted for footer sections
4. **Inline** - Single-line format for headers/text

#### Features:
- Schema.org microdata markup (itemProp, itemScope)
- Clickable phone and email links
- Embedded geo-coordinates
- Hours of operation
- Service area mention
- Map link integration

#### Usage Examples:

```tsx
import NAPComponent from '@/components/seo/NAPComponent';

// Full contact card
<NAPComponent variant="full" showHours={true} showEmail={true} />

// Footer version
<NAPComponent variant="footer" className="text-white" />

// Compact sidebar
<NAPComponent variant="compact" />

// Inline header
<NAPComponent variant="inline" className="text-sm" />
```

---

### 3. Local SEO Utilities
**Location:** `/src/utils/localSEO.ts`

Comprehensive utility functions and configuration for local SEO management.

#### Configuration Object:
```typescript
LOCAL_SEO_CONFIG: {
  businessName: 'A Secure Annapolis Locksmith',
  address: {...},
  phone: '(410) 849-6069',
  email: 'contact@asecureannapolis.com',
  coordinates: { lat: 38.978764, lng: -76.492786 },
  hours: {...},
  serviceAreas: [...14 locations],
  socialProfiles: {...}
}
```

#### Available Functions:

##### `formatNAP(inline?: boolean): string`
Returns formatted NAP string for citations.
```typescript
formatNAP(false)
// Returns:
// A Secure Annapolis Locksmith
// 222 Severn Ave Ste 1 Building 7-6A
// Annapolis, MD 21403
// (410) 849-6069
```

##### `generateGoogleMapsURL(): string`
Creates Google Maps search URL for business location.

##### `generateGoogleMapsEmbedURL(): string`
Generates embed URL for Google Maps iframe.

##### `generateLocalBusinessJSON(options?): object`
Returns Schema.org JSON-LD object for local business.

##### `generateCitationText(): string`
Produces standardized citation text for directory submissions:
- Business name
- Full address
- Phone and email
- Website
- Service areas
- Business description
- Categories

##### `validateNAPConsistency(name, address, phone): object`
Validates NAP information consistency:
```typescript
validateNAPConsistency(
  "A Secure Annapolis Locksmith",
  "222 Severn Ave, Annapolis, MD 21403",
  "(410) 849-6069"
);
// Returns: { isConsistent: true, issues: [] }
```

##### `getLocalKeywords(location?, service?): string[]`
Generates location and service-specific keywords for SEO:
```typescript
getLocalKeywords("Annapolis", "emergency lockout");
// Returns array of 20+ relevant local keywords
```

#### Best Practices Constants:
- `LOCAL_SEO_BEST_PRACTICES.napConsistency`
- `LOCAL_SEO_BEST_PRACTICES.citations`
- `LOCAL_SEO_BEST_PRACTICES.reviews`
- `LOCAL_SEO_BEST_PRACTICES.contentStrategy`

---

## Implementation on Pages

### Homepage
**File:** `/src/pages/HomePage.tsx`

Added:
```tsx
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

<LocalBusinessSchema page="home" />
```

This provides the main business schema for the site.

### Location Pages
**Files:** `/src/pages/locations/*.tsx`

Already includes comprehensive local SEO:
- Location-specific schema markup
- BreadcrumbList schema
- Geographic meta tags
- Open Graph tags
- Service area information
- Local keywords

### Service Pages
**Files:** `/src/pages/services/*.tsx`

Already includes:
- Service schema markup
- BreadcrumbList schema
- FAQPage schema
- Location-specific content
- Internal linking structure

---

## NAP Consistency Standards

### Canonical Business Information

**Use this exact format everywhere:**

```
Business Name: A Secure Annapolis Locksmith
Address: 222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403
Phone: (410) 849-6069
Email: contact@asecureannapolis.com
Website: https://asecureannapolis.com
```

### Places to Update (Checklist)

#### Critical Platforms:
- [x] Website (all pages)
- [ ] Google Business Profile
- [ ] Bing Places for Business
- [ ] Apple Maps
- [ ] Facebook Business Page
- [ ] Yelp
- [ ] Better Business Bureau
- [ ] Angi (Angie's List)
- [ ] HomeAdvisor
- [ ] Thumbtack

#### Secondary Platforms:
- [ ] Yellow Pages
- [ ] Superpages
- [ ] Local.com
- [ ] MapQuest
- [ ] Foursquare
- [ ] Local Chamber of Commerce
- [ ] Industry Associations

#### Branded Materials:
- [ ] Email signatures
- [ ] Business cards
- [ ] Invoices
- [ ] Receipts
- [ ] Service vehicles
- [ ] Marketing materials

---

## Google Business Profile Setup

**Complete guide available in:** `GOOGLE_BUSINESS_PROFILE_GUIDE.md`

### Quick Setup Checklist:

1. **Claim/Verify Business**
   - URL: https://business.google.com
   - Verify address via postcard or phone

2. **Complete Profile Information**
   - Business name (exact match)
   - Primary category: Locksmith
   - Additional categories: Emergency locksmith, Key duplication, Security system supplier
   - Service areas: 14 cities in Anne Arundel County
   - Hours: Mon-Sat 8AM-8PM, Sun Emergency Only

3. **Add Rich Content**
   - Upload 30+ photos (logo, exterior, services, team)
   - Create 8-12 posts per month
   - Add all services with descriptions
   - Pre-populate Q&A section (10+ questions)

4. **Enable Features**
   - Booking button → Contact form
   - Messaging (respond within 24 hours)
   - Reviews (respond to all)

5. **Attributes**
   - Emergency services
   - Onsite services
   - Licensed & Insured
   - Same-day service
   - Free consultations

---

## Schema Markup Summary

### Schemas Currently Implemented:

1. **LocalBusiness/Locksmith Schema**
   - Location: All pages via LocalBusinessSchema component
   - Provides: Business details, hours, services, ratings

2. **Service Schema**
   - Location: Service pages
   - Provides: Service type, provider, areas served, pricing

3. **BreadcrumbList Schema**
   - Location: All service and location pages
   - Provides: Navigation structure for search engines

4. **FAQPage Schema**
   - Location: Service and location pages
   - Provides: Q&A content for rich snippets

5. **Review/AggregateRating Schema**
   - Location: Homepage, included in LocalBusiness schema
   - Provides: Star ratings in search results

---

## Local Content Strategy

### Location-Specific Pages
Created for 14 service areas:
- Annapolis
- Arnold
- Severna Park
- Edgewater
- Crownsville
- Parole
- Bay Ridge
- Hillsmere Shores
- Eastport
- Riva
- Cape St. Claire
- Broadneck
- Edgewater Beach
- Mayo

Each page includes:
- Location-specific H1, title, meta description
- Service area neighborhoods
- Local directions
- Response times
- Location-specific FAQs
- Internal links to related locations
- Map integration opportunities

### Service-Specific Pages
Created for 6 core services:
- Emergency Lockout
- Lock Rekey
- Lock Change
- Lock Repair
- Car Key Programming
- Lost Car Keys

Each includes:
- Service schema markup
- Areas served
- Local keywords
- Related service links
- Related location links

---

## Review Generation Strategy

### Tools Implemented:

1. **Direct Review Link**
   Format: `https://g.page/r/[YOUR_BUSINESS_ID]/review`

2. **Review Request Templates**
   - Email template (included in guide)
   - SMS template (short URL)
   - In-app prompt (post-service)

3. **Review Response Templates**
   - Positive review response
   - Negative review response
   - Neutral review response

### Best Practices:
- Ask within 24-48 hours of service
- Make it easy (direct link, QR code)
- Respond to ALL reviews within 24 hours
- Thank customers for positive reviews
- Address negative reviews professionally
- Never offer incentives for reviews (against Google policy)

---

## Citation Building

### Citation Text Generator
Use `generateCitationText()` function to get standardized business information for directory submissions.

### Priority Citation Sites:
1. Google Business Profile ⭐ Critical
2. Bing Places ⭐ Critical
3. Apple Maps ⭐ Critical
4. Yelp ⭐ Critical
5. Facebook ⭐ Critical
6. Better Business Bureau
7. Angi
8. HomeAdvisor
9. Thumbtack
10. Local Chamber of Commerce

### Industry-Specific Directories:
- Associated Locksmiths of America
- Safe & Vault Technicians Association
- Local locksmith associations

---

## Local Link Building

### Strategies:

1. **Local Business Partnerships**
   - Real estate agencies (locksmith referrals)
   - Property management companies
   - Home improvement stores
   - Security companies

2. **Community Involvement**
   - Local events sponsorship
   - Chamber of Commerce membership
   - Charity work
   - Educational workshops

3. **Local Media**
   - Press releases for new services
   - Local blog features
   - Podcast appearances
   - Community news mentions

4. **Content Partnerships**
   - Guest posts on local blogs
   - Real estate blog contributions
   - Home improvement guides
   - Security tips for local news sites

---

## Analytics & Monitoring

### Key Metrics to Track:

1. **Google Business Profile Insights**
   - Monthly direct searches (people searching for your business name)
   - Monthly discovery searches (people finding you via category)
   - Website clicks from GBP
   - Direction requests
   - Phone calls

2. **Local Search Rankings**
   - Track rankings for "locksmith [city]" keywords
   - Use tools: BrightLocal, Whitespark, SEMrush
   - Monitor Google Maps pack positions

3. **Review Metrics**
   - New reviews per month (goal: 10+)
   - Average rating (maintain 4.5+)
   - Review response rate (goal: 100%)
   - Review response time (goal: <24 hours)

4. **Citation Metrics**
   - Number of citations (goal: 50+)
   - NAP consistency score (goal: 100%)
   - Citation quality (high DA sites)

5. **Website Analytics**
   - Organic local traffic
   - "Near me" search traffic
   - Location page performance
   - Service page performance
   - Conversion rate by source

---

## Monthly Maintenance Checklist

### Week 1:
- [ ] Upload 8-10 new photos to GBP
- [ ] Create 3-4 Google Posts
- [ ] Respond to all reviews
- [ ] Check NAP consistency across top 10 citations

### Week 2:
- [ ] Update any seasonal hours/special hours
- [ ] Add 2-3 new Q&A entries to GBP
- [ ] Send review requests to recent customers
- [ ] Analyze GBP insights

### Week 3:
- [ ] Create 3-4 Google Posts
- [ ] Submit to 2-3 new citation sites
- [ ] Update service descriptions on GBP
- [ ] Check and respond to GBP messages

### Week 4:
- [ ] Month-end analytics review
- [ ] Update any pricing or services
- [ ] Plan next month's content
- [ ] Test all website schema markup
- [ ] Verify NAP on all citations

---

## Testing & Validation

### Schema Markup Testing:
1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test each page type (home, location, service)
   - Verify: No errors or warnings

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Paste your page's source code
   - Verify: All schemas valid

3. **Google Search Console**
   - Monitor "Enhancements" section
   - Check for structured data errors
   - Monitor rich result performance

### NAP Consistency Check:
1. **Manual Audit**
   - Use `validateNAPConsistency()` function
   - Check top 20 citations quarterly
   - Document any inconsistencies

2. **Automated Tools**
   - Moz Local
   - Whitespark Citation Finder
   - BrightLocal Citation Tracker

### Local SEO Performance:
1. **Google Business Profile Dashboard**
   - Check insights weekly
   - Monitor trends monthly
   - Set goals and track progress

2. **Ranking Tracker**
   - Track 20-30 local keywords
   - Monitor monthly changes
   - Focus on Google Maps pack

---

## Troubleshooting

### Common Issues:

**Issue: Schema markup errors**
- Solution: Use Google Rich Results Test
- Verify JSON-LD syntax
- Check for missing required fields

**Issue: NAP inconsistencies**
- Solution: Use `validateNAPConsistency()` function
- Update all citations to match canonical version
- Allow 4-6 weeks for Google to re-crawl

**Issue: Low GBP visibility**
- Solution: Increase activity (posts, photos, reviews)
- Ensure complete profile information
- Add more service categories if relevant

**Issue: Negative reviews**
- Solution: Respond professionally within 24 hours
- Offer to resolve offline
- Focus on generating more positive reviews

---

## Resources

### Documentation:
- `GOOGLE_BUSINESS_PROFILE_GUIDE.md` - Complete GBP setup guide
- `LOCAL_SEO_IMPLEMENTATION.md` - This file
- `/src/utils/localSEO.ts` - Utility functions and config

### Components:
- `/src/components/seo/LocalBusinessSchema.tsx`
- `/src/components/seo/NAPComponent.tsx`

### Tools & Services:
- Google Business Profile: https://business.google.com
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Documentation: https://schema.org/
- Local SEO Checklist: https://moz.com/learn/seo/local
- Citation Building: Moz Local, Whitespark, BrightLocal

---

## Next Steps

1. **Immediate Actions (Week 1)**
   - [ ] Complete Google Business Profile setup
   - [ ] Add NAPComponent to footer (all pages)
   - [ ] Test all schema markup
   - [ ] Submit to top 10 citation sites

2. **Short-term (Month 1)**
   - [ ] Establish posting schedule for GBP
   - [ ] Implement review request system
   - [ ] Complete top 25 citations
   - [ ] Set up analytics tracking

3. **Ongoing**
   - [ ] Follow monthly maintenance checklist
   - [ ] Monitor and respond to reviews
   - [ ] Update content regularly
   - [ ] Track and improve rankings
   - [ ] Generate consistent reviews (2-3/week goal)

---

**Last Updated:** November 2025
**Version:** 1.0
