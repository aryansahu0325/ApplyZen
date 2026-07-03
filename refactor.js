import fs from 'fs';
import path from 'path';

const enhancedPath = path.join(process.cwd(), 'src/pages/EnhancedLanding.jsx');
const homePath = path.join(process.cwd(), 'src/pages/HomeHero.jsx');
const footerDest = path.join(process.cwd(), 'src/components/landing/LandingFooter.jsx');

let enhancedContent = fs.readFileSync(enhancedPath, 'utf8');
let homeContent = fs.readFileSync(homePath, 'utf8');

// The footer in EnhancedLanding starts at {/* BEGIN: Footer */}
const footerStartStr = '{/* BEGIN: Footer */}';
const footerStartIndex = enhancedContent.indexOf(footerStartStr);
const footerEndIndex = enhancedContent.indexOf('{/* Fixed Chat Widget */}');

if (footerStartIndex !== -1 && footerEndIndex !== -1) {
  const footerContent = enhancedContent.substring(footerStartIndex, footerEndIndex).trim();

  // Create LandingFooter.jsx
  const footerComponent = `import React from 'react';\n\nexport default function LandingFooter() {\n  return (\n    <>\n      ${footerContent}\n    </>\n  );\n}\n`;
  fs.writeFileSync(footerDest, footerComponent);

  // Replace in EnhancedLanding.jsx
  enhancedContent = enhancedContent.substring(0, footerStartIndex) + '<LandingFooter />\n      ' + enhancedContent.substring(footerEndIndex);
  
  // Add import to EnhancedLanding.jsx
  enhancedContent = enhancedContent.replace("import { useAuth } from '../context/AuthContext';", "import { useAuth } from '../context/AuthContext';\nimport LandingFooter from '../components/landing/LandingFooter';");
  fs.writeFileSync(enhancedPath, enhancedContent);
}

// Find footer in HomeHero
const homeFooterStartStr = '{/* Footer */}';
const homeFooterStartIndex = homeContent.indexOf(homeFooterStartStr);
// The footer in HomeHero goes until the end of the file basically (before closing tags)
// Let's just find the last </footer> tag
const homeFooterEndStr = '</footer>';
const homeFooterEndIndex = homeContent.lastIndexOf(homeFooterEndStr);

if (homeFooterStartIndex !== -1 && homeFooterEndIndex !== -1) {
  // Replace in HomeHero.jsx
  homeContent = homeContent.substring(0, homeFooterStartIndex) + '<LandingFooter />\n      ' + homeContent.substring(homeFooterEndIndex + homeFooterEndStr.length);
  
  // Add import to HomeHero.jsx
  homeContent = homeContent.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport LandingFooter from '../components/landing/LandingFooter';");
  fs.writeFileSync(homePath, homeContent);
}

console.log("Refactoring complete");
