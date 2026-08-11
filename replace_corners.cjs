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
      
      // Step down corner radii to be "less round"
      // Using unique temporary placeholders to avoid double-replacement
      content = content.replace(/rounded-\[3rem\]/g, '@@R2XL@@');
      content = content.replace(/rounded-\[32px\]/g, '@@RXL@@');
      content = content.replace(/rounded-\[24px\]/g, '@@RLG@@');
      content = content.replace(/rounded-3xl/g, '@@RXL@@');
      content = content.replace(/rounded-2xl/g, '@@RLG@@');
      content = content.replace(/rounded-xl/g, '@@RMD@@');
      content = content.replace(/rounded-lg/g, '@@RMD@@');
      // Replace placeholders
      content = content.replace(/@@R2XL@@/g, 'rounded-2xl');
      content = content.replace(/@@RXL@@/g, 'rounded-xl');
      content = content.replace(/@@RLG@@/g, 'rounded-lg');
      content = content.replace(/@@RMD@@/g, 'rounded-md');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'pages'));
