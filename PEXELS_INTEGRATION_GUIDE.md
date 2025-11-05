# Pexels API Integration Guide

## Overview
This guide explains how to integrate Pexels API to fetch high-quality, legally-licensed locksmith images for your website.

## Why Pexels?

### Legal & Free
- ✅ **100% Free** for commercial use
- ✅ **No attribution required** (though appreciated)
- ✅ **Legally licensed** - no copyright issues
- ✅ **High quality** professional photography
- ✅ **Unlimited downloads** with free API

### Better Than Google Images
- ❌ Google Images are **copyrighted** and require permission
- ✅ Pexels provides **legal, commercial licenses**
- ✅ **No takedown notices** or legal issues
- ✅ **Optimized for web** use

## Quick Start (5 Minutes)

### Step 1: Get Your Free API Key

1. Visit [Pexels API](https://www.pexels.com/api/)
2. Click **"Get Started"** or **"Sign Up"**
3. Create a free account (email + password)
4. Go to your account dashboard
5. Generate your **API Key** (it's instant and free!)

### Step 2: Add API Key to Your Project

Edit your `.env` file:

```bash
# Replace YOUR_PEXELS_API_KEY_HERE with your actual key
VITE_PEXELS_API_KEY=your_actual_pexels_api_key_here
```

**Example:**
```bash
VITE_PEXELS_API_KEY=563492ad6f91700001000001a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### Step 3: Run the Image Fetching Script

```bash
node fetch-pexels-images.mjs
```

This will:
- Fetch 100+ locksmith-related images from Pexels
- Update all service pages with new images
- Update all location pages with new images
- Create an image gallery file for future use
- Save photographer credits

### Step 4: Build and Preview

```bash
npm run build
npm run preview
```

## What Gets Updated?

### Services (6 pages)
- ✅ Lock Change - Professional installation images
- ✅ Lock Rekey - Key and lock mechanism images
- ✅ Car Key Programming - Automotive locksmith images
- ✅ Emergency Lockout - Door lockout scenarios
- ✅ Lock Repair - Lock repair and maintenance
- ✅ Lost Car Keys - Car key replacement images

### Locations (14 pages)
- ✅ All location pages get relevant local imagery
- ✅ Mix of residential, commercial, and area-specific images
- ✅ High-quality hero images for each location

### Additional Files Created
- `src/data/pexels-images.ts` - Gallery of all fetched images
- `.env.example` - Template for environment variables

## Image Search Queries Used

The script searches Pexels for:

| Service | Search Query |
|---------|--------------|
| Lock Change | "door lock installation locksmith" |
| Lock Rekey | "lock keys rekeying security" |
| Car Key Programming | "car key programming automotive locksmith" |
| Emergency Lockout | "emergency lockout door locked" |
| Lock Repair | "lock repair fixing door hardware" |
| Lost Car Keys | "car keys replacement automotive" |
| Residential | "home security door lock house" |
| Commercial | "business security office lock building" |
| Automotive | "car door lock vehicle security" |
| Locations | "annapolis maryland downtown waterfront" |

## Customizing Image Selection

### Option 1: Modify Search Queries

Edit `fetch-pexels-images.mjs`:

```javascript
const queries = {
  lockChange: 'your custom search query here',
  lockRekey: 'another custom query',
  // ... modify as needed
};
```

### Option 2: Manually Select Images

1. Visit [Pexels.com](https://www.pexels.com)
2. Search for specific images you want
3. Copy the image URL
4. Manually update `src/data/services.ts` or `src/data/locations.ts`

### Option 3: Use the Image Gallery

After running the script, check `src/data/pexels-images.ts` for all fetched images. Each service has 5+ images to choose from.

## API Rate Limits

### Free Tier (More than Enough!)
- **200 requests per hour**
- **20,000 requests per month**
- Our script makes ~10 requests = well within limits

### Best Practices
- Script includes 1-second delay between requests
- Images are cached in your data files
- No need to re-fetch unless you want new images

## Image Attribution (Optional)

While **not required**, you can give credit to photographers:

```tsx
// The script automatically generates credits in pexels-images.ts
import { IMAGE_CREDITS } from '@/data/pexels-images';

// Use in your component if desired
<span className="text-xs text-muted-foreground">
  Photo by {IMAGE_CREDITS[imageUrl].photographer}
</span>
```

## Troubleshooting

### Problem: "API key not found"
**Solution:** Make sure your `.env` file contains:
```bash
VITE_PEXELS_API_KEY=your_actual_key_here
```
No spaces, no quotes around the key.

### Problem: "401 Unauthorized"
**Solution:** Your API key may be invalid. Get a new one from [Pexels API](https://www.pexels.com/api/).

### Problem: "No images fetched"
**Solution:**
1. Check your internet connection
2. Verify API key is correct
3. Check Pexels API status at [status.pexels.com](https://status.pexels.com)

### Problem: "Images not updating on website"
**Solution:**
1. Run `npm run build` to rebuild the project
2. Clear your browser cache (Ctrl+Shift+R / Cmd+Shift+R)
3. Verify the image URLs in `src/data/services.ts`

## Manual Image Updates

If you prefer to manually select images:

### For Services:

Edit `src/data/services.ts`:

```typescript
{
  id: 'lock-change',
  heroImage: 'https://images.pexels.com/photos/your-image-id/...',
  contentImage: 'https://images.pexels.com/photos/another-image-id/...',
  // ...
}
```

### For Locations:

Edit `src/data/locations.ts`:

```typescript
{
  id: 'annapolis',
  heroImage: 'https://images.pexels.com/photos/your-image-id/...',
  // ...
}
```

## Image Optimization

### Automatic Optimization
Pexels provides multiple sizes:
- `large2x` - 1880px (Retina displays)
- `large` - 940px (Default, used by script)
- `medium` - 350px (Thumbnails)
- `small` - 130px (Icons)

### URL Parameters
Add parameters to optimize further:

```javascript
// Original
const url = 'https://images.pexels.com/photos/123/photo.jpg';

// Optimized
const optimized = `${url}?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`;
```

## Image Examples

### Before (Generic Unsplash)
```typescript
heroImage: 'https://images.unsplash.com/photo-generic-lock'
```

### After (Specific Pexels Locksmith Images)
```typescript
heroImage: 'https://images.pexels.com/photos/416322/locksmith-working-on-door-lock.jpg'
```

## Advanced: Dynamic Image Loading

Create a component to load Pexels images dynamically:

```tsx
import { useState, useEffect } from 'react';
import { searchPexelsPhotos } from '@/utils/pexels';

export function DynamicPexelsImage({ query, alt }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    searchPexelsPhotos(query, 1).then(photos => {
      if (photos.length > 0) {
        setImageUrl(photos[0].src.large);
      }
    });
  }, [query]);

  if (!imageUrl) return <div>Loading...</div>;

  return <img src={imageUrl} alt={alt} />;
}
```

## Updating Images in the Future

### Monthly Refresh (Optional)
Get fresh images each month:

```bash
# Run the script again
node fetch-pexels-images.mjs

# Rebuild
npm run build
```

### A/B Testing Images
1. Keep current images in `services.ts.backup`
2. Fetch new images with script
3. Compare performance/aesthetics
4. Keep the better set

## Legal & Licensing

### Pexels License Summary
✅ **Free to use** for personal and commercial projects
✅ **No attribution required** (but appreciated)
✅ **Modify** images as needed
✅ **Use in websites**, apps, print, and more
❌ **Don't sell** unmodified photos on other stock sites
❌ **Don't create competing** stock photo site

Full license: [Pexels License](https://www.pexels.com/license/)

### Why This is Better Than Google Images
| Aspect | Google Images | Pexels API |
|--------|---------------|------------|
| Legal | ❌ Requires permission | ✅ Pre-licensed |
| Cost | ⚠️ Can be expensive | ✅ Free forever |
| Quality | ⚠️ Varies | ✅ Professional |
| Copyright Risk | ❌ High | ✅ None |
| Commercial Use | ❌ Often restricted | ✅ Allowed |

## Support & Resources

### Documentation
- [Pexels API Docs](https://www.pexels.com/api/documentation/)
- [Pexels API FAQ](https://www.pexels.com/api/faq/)

### Community
- [Pexels on GitHub](https://github.com/pexels)
- [Stack Overflow - Pexels Tag](https://stackoverflow.com/questions/tagged/pexels)

### Get Help
- Email: api@pexels.com
- Twitter: [@pexels](https://twitter.com/pexels)

## Summary

This integration provides:
- ✅ **100% legal** image usage
- ✅ **Zero cost** (free forever)
- ✅ **High quality** professional photos
- ✅ **Automated process** (one command)
- ✅ **Future-proof** (monthly updates possible)
- ✅ **Peace of mind** (no copyright issues)

Get started now:
1. Get API key: https://www.pexels.com/api/
2. Add to `.env`: `VITE_PEXELS_API_KEY=your_key`
3. Run: `node fetch-pexels-images.mjs`
4. Done! 🎉
