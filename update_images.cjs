const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\09d4b706-1be0-4156-80f3-a3d8f2501cd8';
const publicImgDir = path.join(__dirname, 'public', 'blog-images');
const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const blogsTsPath = path.join(__dirname, 'src', 'data', 'blogs.ts');

if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true });
}

// 1. Copy images
const artifacts = fs.readdirSync(brainDir).filter(f => f.startsWith('blog_') && f.endsWith('.jpg'));

const mappings = {
  'ultimate-restaurant-profit-margins-2026': 'blog_profit_margins',
  'break-free-from-third-party-delivery-fees': 'blog_delivery_trap',
  'automating-the-kitchen-kds-systems': 'blog_kds_automation',
  'restaurant-success-blueprint': 'blog_success_blueprint',
  'money-the-heart-of-every-restaurant': 'blog_money_finance',
  'restaurant-operations-masterclass': 'blog_operations_masterclass',
  'building-high-performance-restaurant-team': 'blog_high_performance_team',
  'marketing-that-actually-brings-customers': 'blog_marketing_customers',
  'increasing-sales-without-more-customers': 'blog_increasing_sales',
  'solving-biggest-restaurant-problems': 'blog_solving_problems',
  'restaurant-growth-and-expansion': 'blog_growth_expansion',
  'technology-and-future-of-restaurants': 'blog_tech_future',
  'restaurant-owners-ultimate-playbook': 'blog_ultimate_playbook'
};

const finalImages = {};

artifacts.forEach(file => {
  const dest = path.join(publicImgDir, file);
  fs.copyFileSync(path.join(brainDir, file), dest);
  console.log(`Copied ${file} to public/blog-images/`);
  
  // Find mapping
  for (const [slug, prefix] of Object.entries(mappings)) {
    if (file.startsWith(prefix)) {
      finalImages[slug] = `/blog-images/${file}`;
    }
  }
});

// 2. Update files
function replaceImage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const [slug, imgPath] of Object.entries(finalImages)) {
    // We look for the block containing the slug and replace its imageUrl
    // A simple way is to use regex if the file has it.
    // For post files, they only contain one slug.
    if (content.includes(slug)) {
      const newContent = content.replace(/imageUrl:\s*".*?"/, `imageUrl: "${imgPath}"`);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in ${path.basename(filePath)}`);
  }
}

// Update post1.ts to post10.ts
const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));
postFiles.forEach(file => replaceImage(path.join(postsDir, file)));

// Update blogs.ts
replaceImage(blogsTsPath);
