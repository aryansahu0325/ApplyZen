import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/pages/UserProfile.jsx',
  'src/pages/Resumes.jsx',
  'src/pages/Dashboard.jsx',
  'src/pages/Applications.jsx',
  'src/pages/Analytics.jsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the const declaration
    content = content.replace(/const glassClass = "bg-white\/70 backdrop-blur-xl border border-white\/50 shadow-sm";\r?\n?/g, '');
    
    // Replace the usage
    content = content.replace(/\$\{glassClass\}/g, 'glass-card');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
