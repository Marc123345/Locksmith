# Google Ads Landing Page Testing Guide

## Campaign Structure

### Campaign Names
- **Baltimore – Shahar** (Search)
- **Howard County – Shahar** (Search)

### Ad Groups
- Emergency
- Automotive
- Locations

### Landing Page URL
All campaigns use: `/campaign/locksmith`

Content dynamically changes based on URL parameters:
- `keyword` - The search term that triggered the ad
- `utm_campaign` - Campaign identifier for tracking
- `matchtype` - Match type (exact, phrase, broad)

---

## Service Type Detection

The landing page automatically detects and displays the appropriate service type based on keyword:

### Automotive Locksmith
Keywords containing: `car`, `auto`, `key`, `keys`, `replacement car keys`

### Residential Locksmith
Keywords containing: `house`, `home`, `apartment`, `residential`

### Commercial Locksmith
Keywords containing: `business`, `office`, `commercial`

### Emergency Locksmith (Default)
All other keywords default to Emergency Locksmith

---

## Location Detection

The landing page automatically detects and displays the appropriate location based on keyword:

**Supported Locations:**
- Annapolis
- Arnold
- Edgewater
- Severna Park
- Crownsville
- Parole
- Eastport
- Bay Ridge
- Hillsmere Shores
- Cape St. Claire
- Broadneck
- Mayo
- Riva
- Howard County
- Catonsville
- Baltimore

**Default:** "Your Area" (if no location detected)

---

## Testing URLs

### Emergency Keywords - Baltimore

**locksmith emergency**
```
/campaign/locksmith?keyword=locksmith%20emergency&utm_campaign=baltimore_emergency&matchtype=phrase
```
Expected: Emergency Locksmith in Your Area

**locksmith baltimore**
```
/campaign/locksmith?keyword=locksmith%20baltimore&utm_campaign=baltimore_emergency&matchtype=exact
```
Expected: Emergency Locksmith in Baltimore

**locksmith near me**
```
/campaign/locksmith?keyword=locksmith%20near%20me&utm_campaign=baltimore_emergency&matchtype=exact
```
Expected: Emergency Locksmith in Your Area

**locksmith in baltimore city**
```
/campaign/locksmith?keyword=locksmith%20in%20baltimore%20city&utm_campaign=baltimore_emergency&matchtype=exact
```
Expected: Emergency Locksmith in Baltimore

---

### Automotive Keywords - Baltimore

**auto locksmith**
```
/campaign/locksmith?keyword=auto%20locksmith&utm_campaign=baltimore_automotive&matchtype=exact
```
Expected: Automotive Locksmith in Your Area

**auto locksmith near me**
```
/campaign/locksmith?keyword=auto%20locksmith%20near%20me&utm_campaign=baltimore_automotive&matchtype=exact
```
Expected: Automotive Locksmith in Your Area

**replacement car keys**
```
/campaign/locksmith?keyword=replacement%20car%20keys&utm_campaign=baltimore_automotive&matchtype=phrase
```
Expected: Automotive Locksmith in Your Area

**lost car keys baltimore**
```
/campaign/locksmith?keyword=lost%20car%20keys%20baltimore&utm_campaign=baltimore_automotive&matchtype=phrase
```
Expected: Automotive Locksmith in Baltimore

---

### Location-Specific Keywords - Howard County

**locksmith howard county**
```
/campaign/locksmith?keyword=locksmith%20howard%20county&utm_campaign=howard_emergency&matchtype=exact
```
Expected: Emergency Locksmith in Howard County

---

### Location-Specific Keywords - Baltimore Area

**locksmith catonsville**
```
/campaign/locksmith?keyword=locksmith%20catonsville&utm_campaign=baltimore_locations&matchtype=exact
```
Expected: Emergency Locksmith in Catonsville

---

### Location-Specific Keywords - Annapolis Area

**locksmith annapolis**
```
/campaign/locksmith?keyword=locksmith%20annapolis&utm_campaign=annapolis_emergency&matchtype=exact
```
Expected: Emergency Locksmith in Annapolis

**locksmith arnold**
```
/campaign/locksmith?keyword=locksmith%20arnold&utm_campaign=annapolis_locations&matchtype=exact
```
Expected: Emergency Locksmith in Arnold

**locksmith edgewater**
```
/campaign/locksmith?keyword=locksmith%20edgewater&utm_campaign=annapolis_locations&matchtype=exact
```
Expected: Emergency Locksmith in Edgewater

**locksmith severna park**
```
/campaign/locksmith?keyword=locksmith%20severna%20park&utm_campaign=annapolis_locations&matchtype=exact
```
Expected: Emergency Locksmith in Severna Park

---

### Residential Keywords

**home locksmith annapolis**
```
/campaign/locksmith?keyword=home%20locksmith%20annapolis&utm_campaign=annapolis_residential&matchtype=phrase
```
Expected: Residential Locksmith in Annapolis

**house lockout baltimore**
```
/campaign/locksmith?keyword=house%20lockout%20baltimore&utm_campaign=baltimore_residential&matchtype=phrase
```
Expected: Residential Locksmith in Baltimore

**apartment locksmith near me**
```
/campaign/locksmith?keyword=apartment%20locksmith%20near%20me&utm_campaign=residential&matchtype=phrase
```
Expected: Residential Locksmith in Your Area

---

### Commercial Keywords

**commercial locksmith baltimore**
```
/campaign/locksmith?keyword=commercial%20locksmith%20baltimore&utm_campaign=baltimore_commercial&matchtype=exact
```
Expected: Commercial Locksmith in Baltimore

**business locksmith annapolis**
```
/campaign/locksmith?keyword=business%20locksmith%20annapolis&utm_campaign=annapolis_commercial&matchtype=phrase
```
Expected: Commercial Locksmith in Annapolis

**office lockout**
```
/campaign/locksmith?keyword=office%20lockout&utm_campaign=commercial&matchtype=phrase
```
Expected: Commercial Locksmith in Your Area

---

## Conversion Tracking

### Primary Conversion: Phone Clicks

**Event Name:** `phone_click`

**Triggers when:**
- User clicks primary CTA button (top of page)
- User clicks secondary CTA button (bottom of page)

**Tracked Data:**
- `keyword` - Search term
- `campaign` - UTM campaign value
- `service_type` - Detected service type
- `location` - Detected location
- `event_category` - "engagement"
- `event_label` - "Call Button Click"

### Secondary Conversion: Form Submissions

**Event Name:** `form_submit`

**Triggers when:**
- User submits the optional contact form

**Tracked Data:**
- `keyword` - Search term
- `campaign` - UTM campaign value
- `service_type` - Selected service type
- `location` - Detected location
- `event_category` - "engagement"
- `event_label` - "Contact Form Submission"

---

## Analytics Integration

### Google Analytics 4

Events are automatically sent to GA4 if the `gtag` function is available:

```javascript
gtag('event', 'phone_click', {
  keyword: keyword,
  campaign: campaign,
  service_type: serviceType,
  location: location,
  event_category: 'engagement',
  event_label: 'Call Button Click'
});
```

### Plausible Analytics

Events are also sent to Plausible if configured:

```javascript
plausible('Phone Click', {
  props: {
    keyword: keyword,
    campaign: campaign,
    service_type: serviceType,
    location: location
  }
});
```

---

## Google Ads Conversion Setup

### Step 1: Create Conversion Action

1. Go to Google Ads → Tools & Settings → Conversions
2. Click "New Conversion Action"
3. Select "Website"
4. Enter conversion name: "Phone Click - Locksmith"
5. Category: "Lead"
6. Value: Use same value for each conversion
7. Count: One (recommended for phone clicks)
8. Click-through conversion window: 30 days
9. View-through conversion window: 1 day
10. Save

### Step 2: Install Global Site Tag

Add the Google Ads global site tag to your website's `<head>` section (if not already installed).

### Step 3: Set Up Event Snippet

The landing page already fires the `phone_click` and `form_submit` events. You need to configure Google Ads to recognize these events:

1. In your conversion action, get the conversion ID and label
2. Update your gtag configuration to send conversions:

```html
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
    'event_callback': function() {
      // Optional callback
    }
  });
</script>
```

---

## Campaign Goals

**Primary Goal:** Phone calls from people locked out or needing emergency/automotive locksmith services

**Secondary Goal:** Form submissions for users who prefer to provide information first

---

## Best Practices

1. **Test all URLs** before launching campaigns to ensure proper detection
2. **Monitor conversion tracking** in Google Ads and GA4 to verify data is flowing correctly
3. **Use UTM parameters consistently** across all ads for proper attribution
4. **Review the debug box** on the landing page (bottom of page) to verify keyword, campaign, and detection accuracy
5. **A/B test different ad copy** to see which drives more phone calls vs form submissions
6. **Adjust bids** based on which keywords drive the most phone call conversions

---

## Debug Information

At the bottom of every landing page, there's a debug box showing:
- Keyword (detected)
- UTM Campaign
- Match Type
- Service Type (detected)
- Location (detected)

Use this to verify proper keyword detection and troubleshoot any issues.

---

## Questions or Issues?

If you encounter any issues with the landing page or conversion tracking, check:

1. URL parameters are properly encoded
2. Google Ads conversion tag is installed correctly
3. GA4 is receiving events (check in GA4 Real-Time reports)
4. Plausible is receiving events (check in Plausible dashboard)
5. Debug box shows expected service type and location

---

## Contact Information

**Phone:** (410) 849-6069
**Business:** A Secure Annapolis Locksmith
**Address:** 222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403

---

*Last Updated: February 9, 2026*
