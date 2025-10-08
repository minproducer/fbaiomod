// Fix for dynamic import base URL issues
(function() {
    // Override the dynamic import function to use relative URLs
    const originalImport = window.__dynamicImportPreload__;
    
    // Intercept fetch requests for modules
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        // If it's trying to fetch a module from absolute URL, convert to relative
        if (typeof url === 'string' && url.includes('/assets/') && url.startsWith('http')) {
            const relativePath = url.split('/assets/')[1];
            url = './assets/' + relativePath;
            console.log('Fixed import URL:', url);
        }
        return originalFetch.call(this, url, options);
    };
    
    // Override import() calls
    const originalImportCall = window.eval;
    window.eval = function(code) {
        if (typeof code === 'string' && code.includes('import(') && code.includes('http')) {
            // Fix absolute URLs in dynamic imports
            code = code.replace(/import\("https?:\/\/[^"]*\/assets\/([^"]+)"\)/g, 'import("./assets/$1")');
            console.log('Fixed import code:', code);
        }
        return originalImportCall.call(this, code);
    };
})();