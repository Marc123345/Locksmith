import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to optimize image URLs by adding proper parameters
function optimizeImageUrl(url) {
  if (!url || !url.includes('unsplash.com')) return url;
  
  // Parse URL
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  
  // Set optimal parameters for web performance
  params.set('auto', 'format');
  params.set('fit', 'crop');
  params.set('q', '80');
  
  // Add WebP format for better compression
  if (!params.has('fm')) {
    params.set('fm', 'webp');
  }
  
  urlObj.search = params.toString();
  return urlObj.toString();
}

console.log('🚀 Starting image optimization...\n');

// Read and update locations.ts
const locationsPath = path.join(__dirname, 'src/data/locations.ts');
let locationsContent = fs.readFileSync(locationsPath, 'utf8');

// Find all Unsplash URLs and optimize them
const urlRegex = /(https:\/\/images\.unsplash\.com\/[^'"]+)/g;
const originalUrls = new Set();
locationsContent = locationsContent.replace(urlRegex, (match) => {
  originalUrls.add(match);
  return optimizeImageUrl(match);
});

fs.writeFileSync(locationsPath, locationsContent, 'utf8');
console.log('✓ Optimized images in locations.ts');

// Read and update LocationTemplate.tsx
const templatePath = path.join(__dirname, 'src/pages/locations/LocationTemplate.tsx');
let templateContent = fs.readFileSync(templatePath, 'utf8');

templateContent = templateContent.replace(urlRegex, (match) => {
  originalUrls.add(match);
  return optimizeImageUrl(match);
});

fs.writeFileSync(templatePath, templateContent, 'utf8');
console.log('✓ Optimized images in LocationTemplate.tsx');

console.log('\n✅ Image optimization complete!');
console.log(`📊 Optimized ${originalUrls.size} unique image URLs`);
console.log('\nBenefits:');
console.log('  • WebP format for smaller file sizes (up to 30% reduction)');
console.log('  • Optimized quality settings (q=80)');
console.log('  • Faster page load times');
console.log('  • Better SEO performance');
console.log('  • Improved Core Web Vitals scores');
