# Google Ads Campaign Questionnaire Responses

## 1. Target Keywords & Match Types

### Current Keywords (from your list):

**Emergency Intent (Phrase/Exact):**
- "locksmith emergency" - phrase
- "locksmith baltimore" - exact
- "locksmith near me" - exact
- "locksmith in baltimore city" - exact (close variant)
- "locksmith howard county" - exact
- "locksmith catonsville" - exact
- "locksmith" - exact

**Automotive Intent (Exact/Phrase):**
- "auto locksmith" - exact
- "auto locksmith near me" - exact (close variant)
- "replacement car keys" - phrase (close variant)

### Recommended Additions:

**Annapolis Area Keywords:**
- "locksmith annapolis" - exact
- "locksmith arnold" - exact
- "locksmith edgewater" - exact
- "locksmith severna park" - exact
- "locksmith crownsville" - exact

**Additional Service-Specific:**
- "home locksmith" - phrase
- "residential locksmith" - exact
- "commercial locksmith" - exact
- "business locksmith" - phrase
- "car lockout" - phrase
- "locked out of car" - phrase

### Goal Note:
"The primary goal is phone calls from people locked out, needing emergency or car locksmith services; forms are optional/secondary."

---

## 2. Geographic Targeting

### Currently Handled on the Page:
- Howard County
- Catonsville
- Baltimore / Baltimore City

### Recommended Additions (Yes, add these):
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

### Location Display Logic:
"If the keyword contains these location names, show that city/county; if not, default to 'Your Area'."

---

## 3. Service Type Variations

### Currently Detected:
- Automotive Locksmith (car / keys terms)
- Emergency Locksmith (default for everything else)

### Recommended Additions (Yes, add):
- **Residential Locksmith** (for house, home, apartment keywords)
- **Commercial Locksmith** (for business, office, commercial keywords)

### Service Type Detection Rules:

**Automotive Locksmith:**
Keywords with: car, auto, key, keys, replacement car keys

**Residential Locksmith:**
Keywords with: house, home, apartment, residential

**Commercial Locksmith:**
Keywords with: business, office, commercial

**Emergency Locksmith (Default):**
Everything else (this aligns with "locked out, need help now" intent)

---

## 4. Campaign Structure

### Campaign Names:
- "Baltimore – Shahar" (Search)
- "Howard County – Shahar" (Search)
- "Annapolis – Shahar" (Search) - *Recommended Addition*

### Ad Group Structure:

**Campaign: Baltimore – Shahar**
- Ad Group: Emergency
- Ad Group: Automotive
- Ad Group: Residential
- Ad Group: Commercial
- Ad Group: Locations

**Campaign: Howard County – Shahar**
- Ad Group: Emergency
- Ad Group: Automotive

**Campaign: Annapolis – Shahar** (New)
- Ad Group: Emergency
- Ad Group: Automotive
- Ad Group: Locations

### Landing Page Variations:
"Use the same `/campaign/locksmith` route for all, but content changes based on keyword + location, not separate URLs for each campaign (at least for v1)."

### Tracking by Campaign:
"Yes – we'll use `utm_campaign={campaignid}` and read it on the page/analytics, but we don't need different templates yet."

---

## 5. Conversion Tracking

### Primary Conversions:
**Phone call clicks** on the main CTA (tap-to-call buttons)

### Secondary (Optional):
**Form submissions** (if users prefer to send a message first)

### Optional Tracking:
- Scroll depth or time on page for diagnostics (not as main conversions)

### What to Enable:

**Google Ads:**
- Call click conversion (on the phone link / button) - PRIMARY
- Optional: form-submit conversion if you add a form - SECONDARY

**Analytics:**
- GA4 events for `phone_click` and `form_submit`

**Pixel:**
"Yes, add the Google Ads conversion tag to the page (or globally) and fire events on call/form actions."

---

## 6. Test URLs

### Emergency – Baltimore:

**locksmith emergency**
```
/campaign/locksmith?keyword=locksmith%20emergency&utm_campaign=baltimore_emergency&matchtype=phrase
```

**locksmith baltimore**
```
/campaign/locksmith?keyword=locksmith%20baltimore&utm_campaign=baltimore_emergency&matchtype=exact
```

### Automotive – Baltimore:

**auto locksmith**
```
/campaign/locksmith?keyword=auto%20locksmith&utm_campaign=baltimore_automotive&matchtype=exact
```

**auto locksmith near me**
```
/campaign/locksmith?keyword=auto%20locksmith%20near%20me&utm_campaign=baltimore_automotive&matchtype=exact
```

**replacement car keys**
```
/campaign/locksmith?keyword=replacement%20car%20keys&utm_campaign=baltimore_automotive&matchtype=phrase
```

### Location-Specific:

**locksmith howard county**
```
/campaign/locksmith?keyword=locksmith%20howard%20county&utm_campaign=howard_emergency&matchtype=exact
```

**locksmith catonsville**
```
/campaign/locksmith?keyword=locksmith%20catonsville&utm_campaign=baltimore_locations&matchtype=exact
```

**locksmith annapolis**
```
/campaign/locksmith?keyword=locksmith%20annapolis&utm_campaign=annapolis_emergency&matchtype=exact
```

**locksmith arnold**
```
/campaign/locksmith?keyword=locksmith%20arnold&utm_campaign=annapolis_locations&matchtype=exact
```

**locksmith edgewater**
```
/campaign/locksmith?keyword=locksmith%20edgewater&utm_campaign=annapolis_locations&matchtype=exact
```

### Residential:

**home locksmith annapolis**
```
/campaign/locksmith?keyword=home%20locksmith%20annapolis&utm_campaign=annapolis_residential&matchtype=phrase
```

### Commercial:

**commercial locksmith baltimore**
```
/campaign/locksmith?keyword=commercial%20locksmith%20baltimore&utm_campaign=baltimore_commercial&matchtype=exact
```

---

## What I Need to Test Right Now

**Priority #1:** Getting phone call clicks from emergency and automotive searches around Baltimore/Howard County/Annapolis.

**Priority #2:** Making sure location and service type change correctly per keyword.

**Priority #3:** A list of test URLs using my actual keywords (provided above).

**Priority #4:** Call tracking wired to the CTA button.

**Later:** Forms and deeper testing can come after calls are working properly; calls are the main priority.

---

## Conversion Events Implemented

### Phone Click Event

**Event Name:** `phone_click`

**Fires when:** User clicks any "Call Now" button

**Data Captured:**
- keyword
- campaign (utm_campaign)
- service_type (detected)
- location (detected)
- event_category: "engagement"
- event_label: "Call Button Click"

**Tracking:** Sent to both Google Analytics 4 (gtag) and Plausible Analytics

---

### Form Submit Event

**Event Name:** `form_submit`

**Fires when:** User submits the optional contact form

**Data Captured:**
- keyword
- campaign (utm_campaign)
- service_type (selected from form)
- location (detected)
- event_category: "engagement"
- event_label: "Contact Form Submission"

**Tracking:** Sent to both Google Analytics 4 (gtag) and Plausible Analytics

---

## Next Steps for Full Implementation

1. **Install Google Ads Conversion Tag** on the website (if not already installed)
2. **Create Phone Click Conversion Action** in Google Ads and map to the `phone_click` event
3. **Create Form Submit Conversion Action** (optional, secondary) in Google Ads
4. **Test all URLs** to verify keyword detection and conversion tracking
5. **Launch campaigns** with proper UTM parameters
6. **Monitor conversions** in Google Ads and GA4 to ensure tracking is working

---

## Contact Information

**Business:** A Secure Annapolis Locksmith
**Phone:** (410) 849-6069
**Address:** 222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403

---

*Prepared: February 9, 2026*
