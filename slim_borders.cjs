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
      
      // Make all borders slim
      content = content.replace(/border-2/g, 'border');
      
      // Fix WhatsApp button padding in Header if missing
      // It looks like: className="... border-[#25D366] btn-hollow btn-hollow-green"
      // Let's just ensure it has px-6 py-2.5 before btn-hollow
      if (file === 'Header.tsx') {
        content = content.replace(/border-\[#25D366\] btn-hollow btn-hollow-green/g, 'border-[#25D366] px-6 py-2.5 btn-hollow btn-hollow-green');
      }
      
      // Make borders similar colors (slate-300 instead of bright colors)
      // Since it's a hollow button, maybe border-slate-300 is more premium until hover?
      // "make all over boarders more slim and similer colors"
      // I'll replace border-blue-600, border-blue-500, border-blue-400 with border-slate-300
      // wait, the text is blue. If border is slate-300 and text is blue-600, that looks disjointed.
      // Maybe the user means all cards/sections should have similar border colors? 
      // All cards currently use `border-slate-100` or `border-slate-200`. Let's just do `border-slate-200` everywhere for cards.
      content = content.replace(/border-slate-100/g, 'border-slate-200');
      
      // If they meant buttons: 
      // content = content.replace(/border-blue-600|border-blue-500|border-blue-400|border-\[\#25D366\]/g, 'border-slate-300');
      // No, let's just make them slim first. 
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated borders in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'components'));
processDir(path.join(__dirname, 'src', 'pages'));
