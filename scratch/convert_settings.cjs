const fs = require('fs');

let html = fs.readFileSync('e:/ApplyZen/scratch/settings.html', 'utf8');

// Extract the content inside <main ...> and </main>
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error("Could not find <main> tag");
  process.exit(1);
}

let content = mainMatch[1];

// Convert class to className
content = content.replace(/class=/g, 'className=');

// Fix self closing tags
content = content.replace(/<img([^>]+)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1} />`;
});
content = content.replace(/<input([^>]+)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1} />`;
});
content = content.replace(/<hr([^>]+)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<hr${p1} />`;
});
content = content.replace(/<br([^>]+)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<br${p1} />`;
});
// Also handle empty <hr> and <br>
content = content.replace(/<hr>/g, '<hr />');
content = content.replace(/<br>/g, '<br />');


// Convert HTML comments <!-- ... --> to JSX comments {/* ... */}
content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// Convert SVG attributes
content = content.replace(/stroke-width=/g, 'strokeWidth=');
content = content.replace(/stroke-dasharray=/g, 'strokeDasharray=');
content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
content = content.replace(/font-variation-settings=/g, 'fontVariationSettings=');

// Map custom spacing and colors to standard tailwind
const mappings = {
    'p-lg': 'p-6',
    'p-xl': 'p-8',
    'p-md': 'p-4',
    'px-lg': 'px-6',
    'py-lg': 'py-6',
    'px-md': 'px-4',
    'py-md': 'py-4',
    'px-sm': 'px-2',
    'py-sm': 'py-2',
    'gap-lg': 'gap-6',
    'gap-md': 'gap-4',
    'gap-sm': 'gap-2',
    'mb-lg': 'mb-6',
    'mb-xl': 'mb-8',
    'mb-md': 'mb-4',
    'mb-sm': 'mb-2',
    'mt-xxl': 'mt-12',
    'mt-xl': 'mt-8',
    'mt-lg': 'mt-6',
    'mt-md': 'mt-4',
    'mt-sm': 'mt-2',
    'space-y-lg': 'space-y-6',
    'space-y-md': 'space-y-4',
    'space-y-sm': 'space-y-2',
    'pt-lg': 'pt-6',
    'pb-lg': 'pb-6',
    'bg-surface-container': 'bg-slate-50',
    'bg-surface': 'bg-white',
    'text-on-surface-variant': 'text-slate-500',
    'text-on-surface': 'text-slate-900',
    'bg-on-surface': 'bg-slate-900',
    'border-outline': 'border-slate-200',
    'bg-outline': 'bg-slate-200',
    'hover:bg-outline': 'hover:bg-slate-200',
    'text-primary': 'text-emerald-600',
    'bg-primary-container': 'bg-emerald-50',
    'bg-primary': 'bg-emerald-600',
    'hover:bg-primary-hover': 'hover:bg-emerald-700',
    'hover:bg-surface-container': 'hover:bg-slate-50',
    'hover:border-primary/40': 'hover:border-emerald-400',
    'text-error': 'text-red-500',
    'shadow-primary/20': 'shadow-emerald-500/20'
};

for (const [key, value] of Object.entries(mappings)) {
    content = content.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
}

// Convert inline styles to objects
content = content.replace(/style="([^"]+)"/g, (match, p1) => {
    const parts = p1.split(';').filter(p => p.trim() !== '');
    const styleObj = {};
    parts.forEach(part => {
        const [k, v] = part.split(':').map(p => p.trim());
        if (k && v) {
            const camelK = k.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelK] = v;
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Construct the React component
const reactComponent = `
import React from 'react';

export default function Settings() {
  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      ${content}
    </div>
  );
}
`;

fs.writeFileSync('e:/ApplyZen/src/pages/Settings.jsx', reactComponent);
console.log("Successfully generated Settings.jsx");
