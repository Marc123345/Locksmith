# Local SEO Quick Start Guide

## 5-Minute Implementation Checklist

### ✅ What's Already Done
- [x] LocalBusinessSchema component created
- [x] NAPComponent for consistent business info
- [x] Local SEO utilities and functions
- [x] Schema markup on all location pages
- [x] Schema markup on all service pages
- [x] HomePage includes LocalBusinessSchema
- [x] Complete documentation created

---

## Next Steps (Do These Now)

### 1. Google Business Profile (30 minutes)
**Priority: CRITICAL**

1. Go to https://business.google.com
2. Claim "A Secure Annapolis Locksmith"
3. Verify business (postcard or phone)
4. Complete profile with:
   ```
   Name: A Secure Annapolis Locksmith
   Address: 222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403
   Phone: (410) 849-6069
   Category: Locksmith
   Hours: Mon-Sat 8AM-8PM, Sun Emergency Only
   ```
5. Upload 10+ photos
6. Create first 3 posts

**Full guide:** `GOOGLE_BUSINESS_PROFILE_GUIDE.md`

---

### 2. Add Footer NAP (5 minutes)
**Priority: HIGH**

Update your Footer component:

```tsx
import NAPComponent from '@/components/seo/NAPComponent';

// In your footer
<NAPComponent
  variant="footer"
  className="text-white"
  showHours={true}
  showEmail={true}
/>
```

This ensures NAP consistency on every page.

---

### 3. Submit to Top Citations (1 hour)
**Priority: HIGH**

Use the citation text from:
```typescript
import { generateCitationText } from '@/utils/localSEO';
const citationText = generateCitationText();
```

Submit to these 10 sites first:
1. ✅ Google Business Profile (done in step 1)
2. [ ] Bing Places: https://www.bingplaces.com
3. [ ] Apple Maps: https://mapsconnect.apple.com
4. [ ] Yelp: https://biz.yelp.com
5. [ ] Facebook Business: https://www.facebook.com/business
6. [ ] Better Business Bureau: https://www.bbb.org
7. [ ] Angi: https://www.angi.com/business
8. [ ] HomeAdvisor: https://www.homeadvisor.com
9. [ ] Thumbtack: https://www.thumbtack.com/pro
10. [ ] Yellow Pages: https://www.yellowpages.com

**Pro tip:** Copy citation text, paste same info everywhere = perfect NAP consistency

---

### 4. Get Your First Reviews (2 hours)
**Priority: MEDIUM**

1. Find your Google review link in GBP dashboard
2. Send to 10 recent happy customers:
   ```
   Hi [Name],

   Thank you for choosing A Secure Annapolis Locksmith!

   Would you mind sharing your experience?
   [Google Review Link]

   Thanks!
   ```
3. Respond to every review within 24 hours

**Goal:** 5 reviews in first week

---

### 5. Weekly Posts Schedule (10 minutes/week)
**Priority: MEDIUM**

Create 2-3 posts per week on Google Business Profile:

**Monday:** Service highlight
```
🔒 Lock Rekeying Special - $25 OFF this week!
Call (410) 849-6069
```

**Wednesday:** Customer testimonial or tip
```
💡 TIP: Change your locks when moving into a new home.
We can help! Fast, affordable lock rekeying.
```

**Friday:** Emergency service reminder
```
🚨 LOCKED OUT? We're available 24/7!
Average response: 20-30 minutes
Call now: (410) 849-6069
```

---

## Usage Examples

### Using LocalBusinessSchema

```tsx
// Already added to HomePage - no action needed
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

<LocalBusinessSchema page="home" />
```

### Using NAPComponent

```tsx
import NAPComponent from '@/components/seo/NAPComponent';

// Full contact card
<NAPComponent variant="full" />

// Footer (recommended)
<NAPComponent variant="footer" className="text-white" />

// Compact sidebar
<NAPComponent variant="compact" />

// Inline (one line)
<NAPComponent variant="inline" />
```

### Using Local SEO Utils

```typescript
import {
  formatNAP,
  generateGoogleMapsURL,
  generateCitationText,
  getLocalKeywords
} from '@/utils/localSEO';

// Get formatted NAP for citations
const nap = formatNAP();

// Get Google Maps link
const mapsUrl = generateGoogleMapsURL();

// Get citation text for directories
const citation = generateCitationText();

// Get local keywords
const keywords = getLocalKeywords('Annapolis', 'emergency lockout');
```

---

## Testing Your Implementation

### 1. Test Schema Markup (5 minutes)
1. Go to https://search.google.com/test/rich-results
2. Enter your homepage URL
3. Verify: No errors
4. Check for: LocalBusiness, AggregateRating

### 2. Test NAP Consistency (2 minutes)
```typescript
import { validateNAPConsistency } from '@/utils/localSEO';

const result = validateNAPConsistency(
  "A Secure Annapolis Locksmith",
  "222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403",
  "(410) 849-6069"
);

console.log(result); // Should be: { isConsistent: true, issues: [] }
```

### 3. Visual Check
- [ ] Footer shows business info on all pages
- [ ] Phone number is clickable
- [ ] Address links to Google Maps
- [ ] Hours are displayed correctly

---

## Monthly Maintenance (30 min/month)

### Week 1:
- Upload 8-10 photos to Google Business Profile
- Create 2-3 Google Posts
- Respond to all reviews

### Week 2:
- Send review requests to recent customers
- Check GBP insights
- Update hours if needed

### Week 3:
- Create 2-3 Google Posts
- Submit to 2-3 new citation sites
- Answer new Q&A questions on GBP

### Week 4:
- Analytics review
- Plan next month content
- Test schema markup

---

## Key Metrics to Track

### Google Business Profile:
- Direct searches: Goal 100+/month
- Discovery searches: Goal 200+/month
- Phone calls: Goal 100+/month
- Website clicks: Goal 200+/month
- Direction requests: Goal 50+/month

### Reviews:
- New reviews: Goal 10+/month
- Average rating: Goal 4.5+
- Response rate: Goal 100%
- Response time: Goal <24 hours

### Local Rankings:
- "locksmith annapolis" - Goal: Top 3 in Maps
- "emergency locksmith annapolis" - Goal: Top 3 in Maps
- "locksmith near me" (local) - Goal: Top 5 in Maps

---

## Quick Reference

### Your Business Info (Copy-Paste Ready)
```
A Secure Annapolis Locksmith
222 Severn Ave Ste 1 Building 7-6A
Annapolis, MD 21403
(410) 849-6069
contact@asecureannapolis.com
https://asecureannapolis.com

Hours:
Monday-Saturday: 8:00 AM - 8:00 PM
Sunday: Emergency Services Only

Categories: Locksmith, Emergency Locksmith Service, Key Duplication Service, Security System Supplier, Lock Repair Service
```

### Service Areas (14 locations)
Annapolis, Arnold, Severna Park, Edgewater, Crownsville, Parole, Bay Ridge, Hillsmere Shores, Eastport, Riva, Cape St. Claire, Broadneck, Edgewater Beach, Mayo

### Direct Review Link Template
```
https://g.page/r/[YOUR_GBP_ID]/review
```
(Find this in your Google Business Profile dashboard)

---

## Common Questions

**Q: Do I need to add NAPComponent to every page?**
A: No. Add it to your Footer component once, and it appears on all pages automatically.

**Q: How often should I update Google Business Profile?**
A: Post 2-3 times per week, upload photos weekly, respond to reviews immediately.

**Q: What if my business info changes?**
A: Update `LOCAL_SEO_CONFIG` in `/src/utils/localSEO.ts`, then update all citations.

**Q: How long until I see results?**
A: Google Business Profile: 1-2 weeks. Organic rankings: 2-3 months. Citations: 4-6 weeks.

**Q: Do I need all the citation sites?**
A: Start with top 10, add more monthly. More citations = better local rankings.

---

## Support & Documentation

📄 **Full Guides:**
- `LOCAL_SEO_IMPLEMENTATION.md` - Complete technical guide
- `GOOGLE_BUSINESS_PROFILE_GUIDE.md` - Detailed GBP setup
- `LOCAL_SEO_QUICK_START.md` - This file

💻 **Code:**
- `/src/components/seo/LocalBusinessSchema.tsx`
- `/src/components/seo/NAPComponent.tsx`
- `/src/utils/localSEO.ts`

🔗 **External Resources:**
- Google Business Profile: https://business.google.com
- Schema Validator: https://search.google.com/test/rich-results
- Moz Local SEO Guide: https://moz.com/learn/seo/local

---

## Action Plan Summary

**Today (2 hours):**
1. ✅ Set up Google Business Profile
2. ✅ Add footer NAP
3. ✅ Submit to top 3 citations
4. ✅ Get 3 reviews

**This Week (4 hours):**
1. Submit to remaining top 10 citations
2. Upload 20+ photos to GBP
3. Create 3 Google Posts
4. Get 5 more reviews

**This Month (8 hours):**
1. Submit to 20+ citation sites
2. Maintain weekly posting schedule
3. Generate 10+ reviews
4. Monitor and improve rankings

**Success!** 🎉

Your local SEO foundation is now solid. Consistent monthly maintenance will drive:
- More phone calls
- More website traffic
- Higher Google Maps rankings
- More customer trust and conversions

---

**Last Updated:** November 2025
