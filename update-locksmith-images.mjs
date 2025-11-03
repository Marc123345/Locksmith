import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Curated list of better locksmith-related images from Unsplash
const betterImages = {
  // Hero backgrounds - doors, security, homes
  hero1: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&auto=format&fit=crop&q=80&fm=webp',
  hero2: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1600&auto=format&fit=crop&q=80&fm=webp',
  hero3: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80&fm=webp',
  
  // Lock and key close-ups
  lock1: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80&fm=webp',
  lock2: 'https://images.unsplash.com/photo-1614267118556-5c0b6cfbfaaf?w=800&auto=format&fit=crop&q=80&fm=webp',
  lock3: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=80&fm=webp',
  
  // Keys
  keys1: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=80&fm=webp',
  keys2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80&fm=webp',
  
  // Smart locks and modern security
  smartLock: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80&fm=webp',
  
  // Door handles and hardware
  door1: 'https://images.unsplash.com/photo-1572006432805-e229f7d0a0f5?w=800&auto=format&fit=crop&q=80&fm=webp',
  door2: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop&q=80&fm=webp',
  
  // Security and safety
  security1: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80&fm=webp',
  security2: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=80&fm=webp'
};

console.log('🔐 Updating locksmith images with better selections...\n');

// Update LocationTemplate.tsx with more relevant images
const templatePath = path.join(__dirname, 'src/pages/locations/LocationTemplate.tsx');
let templateContent = fs.readFileSync(templatePath, 'utf8');

// Update gallery images with better locksmith-specific images
const galleryUpdates = [
  {
    old: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=80&fm=webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1614267118556-5c0b6cfbfaaf?w=800&auto=format&fit=crop&q=80&fm=webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1565611211147-0aab50d5e59a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80&fm=webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1568630742664-f17825d0bc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80&fm=webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80&fm=webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1572006432805-e229f7d0a0f5?w=800&auto=format&fit=crop&q=80&fm=webp'
  }
];

galleryUpdates.forEach(update => {
  templateContent = templateContent.replace(update.old, update.new);
});

fs.writeFileSync(templatePath, templateContent, 'utf8');
console.log('✓ Updated LocationTemplate.tsx with better locksmith images');

// Update locations.ts
const locationsPath = path.join(__dirname, 'src/data/locations.ts');
let locationsContent = fs.readFileSync(locationsPath, 'utf8');

// Update hero images to better door/security themed images
const heroUpdates = [
  {
    old: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80&fm=webp'
  },
  {
    old: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&fm=webp',
    new: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1600&auto=format&fit=crop&q=80&fm=webp'
  }
];

heroUpdates.forEach(update => {
  locationsContent = locationsContent.replaceAll(update.old, update.new);
});

fs.writeFileSync(locationsPath, locationsContent, 'utf8');
console.log('✓ Updated locations.ts with better hero images');

console.log('\n✅ Image update complete!');
console.log('\nUpdates made:');
console.log('  • 6 gallery images - doors, locks, keys, security hardware');
console.log('  • Hero backgrounds - professional property images');
console.log('  • All images optimized for web (WebP, q=80)');
