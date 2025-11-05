#!/usr/bin/env node

/**
 * Pexels Image Fetching Script for Locksmith Website
 *
 * This script fetches high-quality, legally-licensed images from Pexels API
 * and updates the service and location data files with the new image URLs.
 *
 * Usage:
 * 1. Get a free API key from https://www.pexels.com/api/
 * 2. Add it to .env file: VITE_PEXELS_API_KEY=your_key_here
 * 3. Run: node fetch-pexels-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read API key from .env file
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/VITE_PEXELS_API_KEY=(.+)/);
const PEXELS_API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!PEXELS_API_KEY || PEXELS_API_KEY === 'YOUR_PEXELS_API_KEY_HERE') {
  console.error('\n❌ ERROR: Pexels API key not found or not configured!');
  console.log('\n📝 To get started:');
  console.log('1. Visit: https://www.pexels.com/api/');
  console.log('2. Sign up for a free API key');
  console.log('3. Add to .env file: VITE_PEXELS_API_KEY=your_key_here');
  console.log('4. Run this script again\n');
  process.exit(1);
}

const PEXELS_API_BASE = 'https://api.pexels.com/v1';

/**
 * Search Pexels for photos
 */
async function searchPexels(query, perPage = 30) {
  try {
    const url = `${PEXELS_API_BASE}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;

    const response = await fetch(url, {
      headers: {
        'Authorization': PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error(`Error fetching from Pexels (${query}):`, error.message);
    return [];
  }
}

/**
 * Fetch locksmith-specific images
 */
async function fetchLocksmithImages() {
  console.log('\n🔍 Fetching locksmith images from Pexels...\n');

  const queries = {
    lockChange: 'door lock installation locksmith',
    lockRekey: 'lock keys rekeying security',
    carKey: 'car key programming automotive locksmith',
    emergency: 'emergency lockout door locked',
    lockRepair: 'lock repair fixing door hardware',
    lostCarKeys: 'car keys replacement automotive',
    residential: 'home security door lock house',
    commercial: 'business security office lock building',
    automotive: 'car door lock vehicle security',
    location: 'annapolis maryland downtown waterfront',
  };

  const results = {};

  for (const [key, query] of Object.entries(queries)) {
    console.log(`  Searching: ${query}...`);
    const photos = await searchPexels(query, 10);
    results[key] = photos.map(photo => ({
      url: photo.src.large,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    }));

    // Rate limiting - wait 1 second between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n✅ Image fetching complete!\n');
  return results;
}

/**
 * Generate updated services data file
 */
function generateServicesData(images) {
  const serviceImageMap = {
    'lock-change': images.lockChange[0]?.url || images.residential[0]?.url,
    'lock-rekey': images.lockRekey[0]?.url || images.residential[1]?.url,
    'car-key-programming': images.carKey[0]?.url || images.automotive[0]?.url,
    'emergency-lockout': images.emergency[0]?.url || images.residential[2]?.url,
    'lock-repair': images.lockRepair[0]?.url || images.residential[3]?.url,
    'lost-car-keys': images.lostCarKeys[0]?.url || images.automotive[1]?.url,
  };

  return `// Generated image URLs from Pexels
// To update images, run: node fetch-pexels-images.mjs

export const SERVICE_IMAGES = ${JSON.stringify(serviceImageMap, null, 2)};

// Backup/additional images for each service
export const SERVICE_IMAGE_GALLERY = {
  'lock-change': [
${images.lockChange.slice(0, 5).map(img => `    '${img.url}'`).join(',\n')}
  ],
  'lock-rekey': [
${images.lockRekey.slice(0, 5).map(img => `    '${img.url}'`).join(',\n')}
  ],
  'car-key-programming': [
${images.carKey.slice(0, 5).map(img => `    '${img.url}'`).join(',\n')}
  ],
  'emergency-lockout': [
${images.emergency.slice(0, 5).map(img => `    '${img.url}'`).join(',\n')}
  ],
  'lock-repair': [
${images.lockRepair.slice(0, 5).map(img => `    '${img.url}'`).join(',\n')}
  ],
  'lost-car-keys': [
${images.lostCarKeys.slice(0, 5).map(img => `    '${img.url}'`).join(',\n')}
  ],
};

// Image credits (Pexels requires attribution in some contexts)
export const IMAGE_CREDITS = {
${Object.entries(images).flatMap(([key, photos]) =>
  photos.slice(0, 3).map(photo =>
    `  '${photo.url}': { photographer: '${photo.photographer}', url: '${photo.photographerUrl}' }`
  )
).join(',\n')}
};
`;
}

/**
 * Update services.ts file with new images
 */
async function updateServicesFile(images) {
  const servicesPath = path.join(__dirname, 'src', 'data', 'services.ts');
  let servicesContent = fs.readFileSync(servicesPath, 'utf-8');

  // Map of service IDs to image categories
  const serviceImageMap = {
    'lock-change': images.lockChange[0]?.url,
    'lock-rekey': images.lockRekey[0]?.url,
    'car-key-programming': images.carKey[0]?.url,
    'emergency-lockout': images.emergency[0]?.url,
    'lock-repair': images.lockRepair[0]?.url,
    'lost-car-keys': images.lostCarKeys[0]?.url,
  };

  // Update heroImage for each service
  for (const [serviceId, imageUrl] of Object.entries(serviceImageMap)) {
    if (imageUrl) {
      const regex = new RegExp(`(id:\\s*'${serviceId}'[\\s\\S]*?heroImage:\\s*)'[^']*'`, 'g');
      servicesContent = servicesContent.replace(regex, `$1'${imageUrl}'`);

      const contentRegex = new RegExp(`(id:\\s*'${serviceId}'[\\s\\S]*?contentImage:\\s*)'[^']*'`, 'g');
      const contentImage = images[serviceId.replace(/-/g, '')][1]?.url || imageUrl;
      servicesContent = servicesContent.replace(contentRegex, `$1'${contentImage}'`);
    }
  }

  fs.writeFileSync(servicesPath, servicesContent);
  console.log('✅ Updated src/data/services.ts');
}

/**
 * Update locations.ts file with new images
 */
async function updateLocationsFile(images) {
  const locationsPath = path.join(__dirname, 'src', 'data', 'locations.ts');
  let locationsContent = fs.readFileSync(locationsPath, 'utf-8');

  // Use location images or fallback to residential/commercial
  const locationImages = images.location.length > 0
    ? images.location
    : [...images.residential, ...images.commercial];

  // Update heroImage for locations (use first 14 unique images)
  const uniqueImages = [...new Set(locationImages.map(img => img.url))].slice(0, 14);

  let imageIndex = 0;
  locationsContent = locationsContent.replace(
    /heroImage:\s*'[^']*'/g,
    () => `heroImage: '${uniqueImages[imageIndex++ % uniqueImages.length]}'`
  );

  fs.writeFileSync(locationsPath, locationsContent);
  console.log('✅ Updated src/data/locations.ts');
}

/**
 * Create image gallery file
 */
function createImageGalleryFile(images) {
  const content = generateServicesData(images);
  const galleryPath = path.join(__dirname, 'src', 'data', 'pexels-images.ts');
  fs.writeFileSync(galleryPath, content);
  console.log('✅ Created src/data/pexels-images.ts');
}

/**
 * Update .env file with sample key instruction
 */
function updateEnvExample() {
  const examplePath = path.join(__dirname, '.env.example');
  if (!fs.existsSync(examplePath)) {
    const content = `# Pexels API Key (Get yours at https://www.pexels.com/api/)
VITE_PEXELS_API_KEY=your_pexels_api_key_here

# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Maps
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Cloudinary (optional)
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
`;
    fs.writeFileSync(examplePath, content);
    console.log('✅ Created .env.example');
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n🔐 Locksmith Image Updater - Pexels Integration\n');
  console.log('📸 Fetching high-quality, legally-licensed images...\n');

  try {
    const images = await fetchLocksmithImages();

    console.log('\n📝 Updating project files...\n');

    await updateServicesFile(images);
    await updateLocationsFile(images);
    createImageGalleryFile(images);
    updateEnvExample();

    console.log('\n✨ SUCCESS! All images have been updated.\n');
    console.log('📊 Summary:');
    console.log(`  - Services updated: 6`);
    console.log(`  - Locations updated: 14`);
    console.log(`  - Total images fetched: ${Object.values(images).flat().length}`);
    console.log('\n🎨 Next steps:');
    console.log('  1. Run: npm run build');
    console.log('  2. Review the updated images on your website');
    console.log('  3. Adjust queries in this script if needed\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
