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
      
      // Kill the boldness (toy-like)
      content = content.replace(/font-extrabold/g, 'font-semibold');
      content = content.replace(/font-black/g, 'font-semibold');
      // Replace some font-bold with font-medium, except for buttons where we want font-medium anyway
      content = content.replace(/font-bold/g, 'font-medium');
      
      // Add subtle tracking to headings
      content = content.replace(/text-5xl md:text-7xl/g, 'text-5xl md:text-7xl tracking-wide');
      content = content.replace(/text-4xl/g, 'text-4xl tracking-wide');
      content = content.replace(/text-3xl/g, 'text-3xl tracking-wide');
      
      // Fix button padding (px-4 py-2.5 was too small/weird) -> px-6 py-2.5
      content = content.replace(/px-4 py-2\.5/g, 'px-6 py-2.5');
      // For mobile WhatsApp if it was px-4 py-3
      content = content.replace(/px-4 py-3/g, 'px-6 py-3');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Refined typography in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'pages'));
