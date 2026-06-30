const fs = require('fs');

let content = fs.readFileSync('e:/ApplyZen/src/pages/Applications.jsx', 'utf8');

// The JSX uses template literals for glassClass: className={\`\${glassClass} p-4 rounded-2xl ...\`}
content = content.replace(/className=\{\`\$\{glassClass\} p-4 rounded-2xl (.*?)\`\}/g, 'className={`\\${glassClass} p-4 rounded-2xl $1`} onClick={() => navigate(\'/status\')} cursor-pointer');

// Fix cursor-grab to cursor-pointer on these cards
content = content.replace(/cursor-grab active:cursor-grabbing/g, 'cursor-pointer');
content = content.replace(/cursor-default/g, 'cursor-pointer');

// For the linear card, it uses a standard string: className="bg-gradient-to-br from-white/90 to-orange-50/80 ... "
content = content.replace(/className="bg-gradient-to-br from-white\/90 to-orange-50\/80 (.*?)"/g, 'className="bg-gradient-to-br from-white/90 to-orange-50/80 $1" onClick={() => navigate(\'/status\')}');

// For the airbnb card: className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 ... "
content = content.replace(/className="bg-gradient-to-br from-emerald-50 to-emerald-100\/50 (.*?)"/g, 'className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 $1" onClick={() => navigate(\'/status\')} cursor-pointer');

fs.writeFileSync('e:/ApplyZen/src/pages/Applications.jsx', content);
console.log('Fixed onClick handlers');
