const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replace slate borders with light blue borders
      content = content.replace(/border-slate-100/g, 'border-blue-200');
      content = content.replace(/border-slate-200/g, 'border-blue-200');
      content = content.replace(/border-slate-300/g, 'border-blue-200');
      
      // Also ensure that if they just have "glass" or a generic box without a border color, we might need to add it, but normally they all have border-slate-200
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated borders in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'pages'));
