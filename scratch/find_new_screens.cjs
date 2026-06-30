const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/Pc/.gemini/antigravity-ide/brain/61308cc6-0ae0-488f-afd4-cdd74baa35b0/.system_generated/steps/428/output.txt', 'utf8'));

const targets = data.screens.filter(screen => 
  screen.title === 'ApplyZen Help Center' || 
  screen.title === 'ApplyZen Notifications'
);

console.log(JSON.stringify(targets.map(t => ({ title: t.title, htmlCode: t.htmlCode.downloadUrl })), null, 2));
