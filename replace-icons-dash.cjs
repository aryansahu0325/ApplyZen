const fs = require('fs');

const iconMap = {
  'mail': 'Mail',
  'calendar_today': 'Calendar',
  'cancel': 'XCircle',
  'trending_up': 'TrendingUp',
  'open_in_new': 'ExternalLink',
  'description': 'FileText',
  'send': 'Send',
  'check_circle': 'CheckCircle',
  'smart_toy': 'Bot',
  'chevron_right': 'ChevronRight',
  'auto_awesome': 'Sparkles',
  'edit_note': 'Edit3',
  'add': 'Plus',
  'psychology': 'Brain',
  'contact_mail': 'Contact',
  'military_tech': 'Award',
  'event': 'Calendar',
  'work': 'Briefcase'
};

let content = fs.readFileSync('src/pages/Dashboard.jsx', 'utf8');
let usedIcons = new Set();

content = content.replace(/<span[^>]*material-symbols-outlined[^>]*>([^<]+)<\/span>/g, (match, iconName) => {
  const lucideIcon = iconMap[iconName];
  if (lucideIcon) {
    usedIcons.add(lucideIcon);
    // Try to extract extra classes
    let extraClasses = '';
    const classMatch = match.match(/className="([^"]+)"/);
    if (classMatch) {
      extraClasses = classMatch[1].replace('material-symbols-outlined', '').trim();
      // Remove font variation styles if they exist
      extraClasses = extraClasses.replace(/text-\[\d+px\]/g, '').trim();
    }
    
    // We will just use a default sizing of w-5 h-5 and keep the text colors
    let finalClass = `w-5 h-5 ${extraClasses}`.trim();
    return `<${lucideIcon} className="${finalClass}" />`;
  }
  return match;
});

if (usedIcons.size > 0) {
  const imports = `import { ${Array.from(usedIcons).join(', ')} } from 'lucide-react';\n`;
  content = content.replace("import { useAuth } from '../context/AuthContext';", "import { useAuth } from '../context/AuthContext';\n" + imports);
  fs.writeFileSync('src/pages/Dashboard.jsx', content);
  console.log('Replaced Dashboard.jsx successfully.');
}
