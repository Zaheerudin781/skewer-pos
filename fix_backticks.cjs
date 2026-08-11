const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'data', 'posts');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.ts')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace \` with `
    const newContent = content.replace(/\\`/g, '`');
    
    if (content !== newContent) {
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`Fixed backticks in ${file}`);
    }
  }
}
