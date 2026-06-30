const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Pc/.gemini/antigravity-ide/brain/61308cc6-0ae0-488f-afd4-cdd74baa35b0/.system_generated/steps/273/output.txt', 'utf8'));
const titles = data.screens.map(s => s.title);
console.log(JSON.stringify(titles, null, 2));
