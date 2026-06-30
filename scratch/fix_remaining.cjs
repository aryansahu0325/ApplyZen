const fs = require('fs');
let content = fs.readFileSync('e:/ApplyZen/src/pages/ApplicationStatus.jsx', 'utf8');

content = content.replace(/text-on-primary\b/g, 'text-white');
content = content.replace(/text-on-error\b/g, 'text-white');

fs.writeFileSync('e:/ApplyZen/src/pages/ApplicationStatus.jsx', content);
console.log('Fixed remaining tokens');
