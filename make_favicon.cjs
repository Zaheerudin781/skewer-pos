const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, 'public', 'logo.png');
const svgPath = path.join(__dirname, 'public', 'favicon.svg');

if (fs.existsSync(logoPath)) {
  const imageBuffer = fs.readFileSync(logoPath);
  const base64Data = imageBuffer.toString('base64');
  
  // Use data URI for the embedded image
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleView">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image href="data:image/png;base64,${base64Data}" width="100" height="100" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

  fs.writeFileSync(svgPath, svgContent);
  console.log('Successfully created circular SVG favicon');
} else {
  console.error('logo.png not found');
}
