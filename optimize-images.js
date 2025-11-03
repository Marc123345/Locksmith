const fs = require('fs');
const path = require('path');

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
  
  // Add compression
  if (!params.has('fm')) {
    params.set('fm', 'webp');
  }
  
  urlObj.search = params.toString();
  return urlObj.toString();
}

// Read and update locations.ts
const locationsPath = path.join(__dirname, 'src/data/locations.ts');
let locationsContent = fs.readFileSync(locationsPath, 'utf8');

// Find all Unsplash URLs and optimize them
const urlRegex = /(https:\/\/images\.unsplash\.com\/[^'"]+)/g;
locationsContent = locationsContent.replace(urlRegex, (match) => {
  return optimizeImageUrl(match);
});

fs.writeFileSync(locationsPath, locationsContent, 'utf8');
console.log('✓ Optimized images in locations.ts');

// Read and update LocationTemplate.tsx
const templatePath = path.join(__dirname, 'src/pages/locations/LocationTemplate.tsx');
let templateContent = fs.readFileSync(templatePath, 'utf8');

templateContent = templateContent.replace(urlRegex, (match) => {
  return optimizeImageUrl(match);
});

fs.writeFileSync(templatePath, templateContent, 'utf8');
console.log('✓ Optimized images in LocationTemplate.tsx');

console.log('\n✅ Image optimization complete!');
console.log('Benefits:');
console.log('  • WebP format for smaller file sizes');
console.log('  • Optimized quality settings');
console.log('  • Faster page load times');
console.log('  • Better SEO performance');
