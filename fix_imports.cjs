const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'data', 'posts');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.ts')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace import { BlogPost } with import type { BlogPost }
    const newContent = content.replace(/import\s*{\s*BlogPost\s*}\s*from\s*'..\/blogs';/, "import type { BlogPost } from '../blogs';");
    
    if (content !== newContent) {
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`Fixed import in ${file}`);
    }
  }
}
