const fs = require('fs');

function convertHtmlToJsx(htmlFile, outputFile, componentName) {
    let html = fs.readFileSync(htmlFile, 'utf8');

    // Extract the content inside <main ...> and </main>
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (!mainMatch) {
      console.error("Could not find <main> tag in " + htmlFile);
      // fallback to whole body
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
      if (bodyMatch) {
          html = bodyMatch[1];
      }
    } else {
        html = mainMatch[1];
    }

    let content = html;

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
        'p-sm': 'p-2',
        'p-xs': 'p-1',
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
        'mt-xs': 'mt-1',
        'space-y-xl': 'space-y-8',
        'space-y-lg': 'space-y-6',
        'space-y-md': 'space-y-4',
        'space-y-sm': 'space-y-2',
        'pt-lg': 'pt-6',
        'pb-lg': 'pb-6',
        
        // Custom colors mapping
        'bg-surface-container-high': 'bg-slate-100',
        'bg-surface-container-low': 'bg-slate-50',
        'bg-surface-container': 'bg-slate-50',
        'bg-surface': 'bg-white',
        'bg-slate-50-highest': 'bg-slate-200',
        'bg-slate-50-lowest': 'bg-white',
        
        'text-on-surface-variant': 'text-slate-500',
        'text-on-surface': 'text-slate-900',
        'bg-on-surface': 'bg-slate-900',
        'text-outline': 'text-slate-400',
        'text-on-primary-fixed-variant': 'text-emerald-700',
        'text-on-primary-container': 'text-emerald-700',
        'text-on-primary': 'text-white',
        'text-on-error-container': 'text-red-700',
        'text-on-error': 'text-white',
        
        'border-outline-variant': 'border-slate-300',
        'border-outline-variant/30': 'border-slate-300/30',
        'border-outline-variant/60': 'border-slate-300/60',
        'border-outline': 'border-slate-200',
        'bg-outline': 'bg-slate-200',
        'bg-outline/60': 'bg-slate-200/60',
        'hover:text-on-surface': 'hover:text-slate-900',
        
        'text-primary': 'text-emerald-600',
        'bg-primary-container': 'bg-emerald-50',
        'bg-primary': 'bg-emerald-600',
        'hover:bg-primary-hover': 'hover:bg-emerald-700',
        'hover:bg-primary': 'hover:bg-emerald-600',
        'group-hover:text-primary': 'group-hover:text-emerald-600',
        'group-hover:bg-primary': 'group-hover:bg-emerald-600',
        'border-primary': 'border-emerald-600',
        'border-primary/20': 'border-emerald-600/20',
        'border-primary/40': 'border-emerald-600/40',
        'border-primary/60': 'border-emerald-600/60',
        'hover:border-primary/40': 'hover:border-emerald-400/40',
        'hover:border-primary/60': 'hover:border-emerald-400/60',
        'ring-primary/20': 'ring-emerald-600/20',
        
        'text-secondary': 'text-blue-600',
        'bg-secondary-container': 'bg-blue-50',
        'bg-secondary-container/10': 'bg-blue-50/10',
        'text-on-secondary-container': 'text-blue-700',
        
        'text-error': 'text-red-500',
        'bg-error': 'bg-red-500',
        'bg-error/10': 'bg-red-500/10',
        'bg-error/15': 'bg-red-500/15',
        'bg-error/20': 'bg-red-500/20',
        'bg-error-container': 'bg-red-50',
        'bg-red-500-container': 'bg-red-50',
        'hover:border-error/40': 'hover:border-red-400/40',
        'group-hover:text-error': 'group-hover:text-red-500',
        'group-hover:bg-error': 'group-hover:bg-red-500',
        
        'shadow-primary/20': 'shadow-emerald-500/20'
    };

    for (const [key, value] of Object.entries(mappings)) {
        content = content.replace(new RegExp(`\\b${key.replace(/\//g, '\\\\/')}\\b`, 'g'), value);
    }

    // Convert inline styles to objects
    content = content.replace(/style="([^"]+)"/g, (match, p1) => {
        const parts = p1.split(';').filter(p => p.trim() !== '');
        const styleObj = {};
        parts.forEach(part => {
            const [k, v] = part.split(':').map(p => p.trim());
            if (k && v) {
                const camelK = k.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[camelK] = v.replace(/'/g, '"'); 
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Fix stringified style object for React
    content = content.replace(/"'FILL' 1"/g, `"'FILL' 1"`); 

    // Construct the React component
    const reactComponent = `
import React from 'react';

export default function ${componentName}() {
  return (
    <div className="animate-fadeIn w-full">
      ${content}
    </div>
  );
}
`;

    fs.writeFileSync(outputFile, reactComponent);
    console.log("Successfully generated " + outputFile);
}

convertHtmlToJsx('e:/ApplyZen/scratch/notifications.html', 'e:/ApplyZen/src/pages/Notifications.jsx', 'Notifications');
convertHtmlToJsx('e:/ApplyZen/scratch/help_center.html', 'e:/ApplyZen/src/pages/HelpCenter.jsx', 'HelpCenter');
