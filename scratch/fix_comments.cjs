const fs = require('fs');
const filePath = 'e:/ApplyZen/src/pages/Opportunities.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace HTML comments <!-- ... --> with JSX comments {/* ... */}
content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

fs.writeFileSync(filePath, content);
console.log('Fixed HTML comments in Opportunities.jsx');
