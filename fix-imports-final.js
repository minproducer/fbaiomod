const fs = require('fs');
const path = require('path');

// Danh sách các file cần fix  
const filesToFix = [
  'assets/index-DS2lsHyn.js',
  'assets/index-B-Jz8FmV.js',
  'assets/MyApp-DPkhHznZ.js'
];

// Function để fix tất cả các dynamic imports
function fixDynamicImports(content) {
  // Fix pattern 1: import("./Media-wq44KjKK.js").then((e=>e.M))
  content = content.replace(
    /import\("\.\/([^"]+)"\)\.then\(\(([^=]+)=>([^)]+)\)\)/g,
    (match, modulePath, param, returnExpr) => {
      return `(async () => {
        try {
          const ${param} = await import("./${modulePath}");
          return ${returnExpr};
        } catch (err) {
          console.warn("Failed to load module ${modulePath}:", err);
          return () => null;
        }
      })()`;
    }
  );
  
  // Fix pattern 2: Simple dynamic imports
  content = content.replace(
    /import\("\.\/([^"]+)"\)/g,
    (match, modulePath) => {
      return `(async () => {
        try {
          return await import("./${modulePath}");
        } catch (err) {
          console.warn("Failed to load module ${modulePath}:", err);
          return { default: () => null };
        }
      })()`;
    }
  );

  return content;
}

// Main execution
console.log('🔧 Starting FB AIO Dynamic Import Patcher...\n');

function patchFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`📝 Patching ${filePath}...`);
    
    try {
      // Đọc file
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix dynamic imports
      const fixedContent = fixDynamicImports(content);
      
      if (content !== fixedContent) {
        // Tạo backup
        fs.writeFileSync(fullPath + '.backup', content);
        
        // Ghi file đã fix
        fs.writeFileSync(fullPath, fixedContent);
        console.log(`✅ Successfully patched ${filePath}`);
      } else {
        console.log(`ℹ️ No changes needed for ${filePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error patching ${filePath}:`, error.message);
    }
  } else {
    console.log(`⚠️ File not found: ${filePath}`);
  }
}

// Apply patches to all files
filesToFix.forEach(patchFile);

console.log('\n🎉 Patching complete!');
console.log('\n📋 Next steps:');
console.log('1. Clear browser cache and service workers');
console.log('2. Hard refresh the page (Ctrl+Shift+R)');
console.log('3. Test the features that were failing');
console.log('4. Check browser console for any remaining errors');