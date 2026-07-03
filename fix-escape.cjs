const fs = require('fs');
['src/pages/Applications.jsx', 'src/pages/Dashboard.jsx', 'src/pages/Resumes.jsx', 'src/pages/Analytics.jsx', 'src/pages/UserProfile.jsx'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\\glass-card/g, 'glass-card');
    fs.writeFileSync(file, content);
  }
});
