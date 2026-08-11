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
      
      // Step down corners heavily
      // using placeholders to avoid multi-replacement
      content = content.replace(/rounded-2xl/g, '@@RMD@@');
      content = content.replace(/rounded-xl/g, '@@RMD@@');
      content = content.replace(/rounded-lg/g, '@@RSM@@');
      content = content.replace(/rounded-md/g, '@@RSM@@');
      
      content = content.replace(/@@RMD@@/g, 'rounded-md');
      content = content.replace(/@@RSM@@/g, 'rounded-sm');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated corners in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'pages'));
