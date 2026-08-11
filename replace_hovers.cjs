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
      
      // Replace WhatsApp buttons (green)
      content = content.replace(/hover:bg-\[#25D366\] hover:text-white.*?transition-[a-z]+/g, 'btn-hollow btn-hollow-green');
      
      // Replace Blue buttons
      content = content.replace(/hover:bg-blue-600 hover:text-white.*?transition-[a-z]+/g, 'btn-hollow btn-hollow-blue');
      content = content.replace(/hover:bg-blue-500 hover:text-white.*?transition-[a-z]+/g, 'btn-hollow btn-hollow-light');
      
      // Replace Slate buttons
      content = content.replace(/hover:bg-slate-700 hover:text-white.*?transition-[a-z]+/g, 'btn-hollow btn-hollow-slate');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated hover classes in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'pages'));
