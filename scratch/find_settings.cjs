const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/Pc/.gemini/antigravity-ide/brain/61308cc6-0ae0-488f-afd4-cdd74baa35b0/.system_generated/steps/273/output.txt', 'utf8'));

const settingsScreens = data.screens.filter(screen => screen.title.toLowerCase().includes('setting'));
console.log(JSON.stringify(settingsScreens, null, 2));
