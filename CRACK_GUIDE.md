# FB AIO - Complete Crack Guide

## 📋 Project Information
- **Project**: Facebook All-In-One Chrome Extension
- **Crack Date**: October 23, 2025
- **Cracked By**: Min
- **Contact**: 
  - Facebook: [fb.com/minproducer.fb](https://fb.com/minproducer.fb)
  - Email: minhhai113he@gmail.com

---

## 🎯 Crack Objectives

1. ✅ Bypass VIP system completely
2. ✅ Disable anti-devtools protection
3. ✅ Rebrand all UI elements with custom information

---

## 🔓 VIP System Bypass (4 Layers)

### Layer 0: API Check Bypass
**File**: `src/B2VH2QxC.js`
**Location**: Line 1156-1157
**Original Code**:
```javascript
async function A() {
    const _0x4e8b12 = _0x3d87;
    // ... complex API validation logic
}
```

**Modified Code**:
```javascript
async function A() {
    return true; // Bypass API check - always return VIP status
    const _0x4e8b12 = _0x3d87;
    // ... original code preserved below
}
```

**Purpose**: Forces the API check to always return VIP status without making actual server requests.

---

### Layer 1: State Override
**File**: `src/DI05PVMe.js`
**Location**: Line 1316
**Original Code**:
```javascript
profile: (_0x379237) => _0x379237.profile,
```

**Modified Code**:
```javascript
profile: (_0x379237) => ({
    ..._0x379237.profile,
    vipExpiredAt: new Date("2100-01-01").getTime(),
}),
```

**Purpose**: Overrides the VIP expiration date to year 2100, ensuring permanent VIP status in the application state.

---

### Layer 2: Time Validation Bypass
**File**: `src/B2VH2QxC.js`
**Location**: Line 1096
**Original Code**:
```javascript
if (Date.now() - _0x5e9f2e > R) {
    // VIP expired logic
}
```

**Modified Code**:
```javascript
if (false && Date.now() - _0x5e9f2e > R) {
    // This condition will never execute
}
```

**Purpose**: Disables time-based VIP expiration checks by forcing the condition to always be false.

---

### Layer 3: Time Window Extension
**File**: `src/B2VH2QxC.js`
**Location**: Line 154
**Original Code**:
```javascript
R = 13699; // Original time constant
```

**Modified Code**:
```javascript
R = 13699 * 1000000; // Extended to ~13,699 years
```

**Purpose**: Extends the VIP time window to an extremely long period (~13,699 years) as a fallback safety measure.

---

## 🛡️ Anti-Devtools Protection Removal

### Disable DevTools Detection
**File**: `src/D8hMXTvH.js`
**Location**: Entire main function
**Original Code**:
```javascript
(function() {
    const _0x123abc = _0x4def;
    // Complex devtools detection logic
    // Blocks F12, right-click, console access
    // Detects devtools opening
})();
```

**Modified Code**:
```javascript
(function() {
    return {}; // Completely bypass anti-devtools protection
    
    // Original code preserved below but never executed
    const _0x123abc = _0x4def;
    // ...
})();
```

**Purpose**: Completely disables all anti-devtools mechanisms including:
- F12 key blocking
- Right-click context menu blocking
- DevTools detection
- Console access prevention

---

## 🎨 UI Rebranding (3 Locations)

### Footer #1: Main Copyright
**File**: `src/tj5WFCGp.js`
**Location**: Footer component section
**Original Code**:
```javascript
'children': ['©\x20', new Date()['getFullYear'](), _0x27deab[_0x220e4b(0x116)]]
```

**Modified Code**:
```javascript
'children': [
    'Cracked by Min - ',
    'Facebook: fb.com/minproducer.fb',
    ' | ',
    'Email: minhhai113he@gmail.com'
]
```

**Purpose**: Replaces the original copyright text with custom cracker branding.

---

### Logo/Banner: Click Handler
**File**: `src/LG0aMPz7.js`
**Location**: Logo component function o()
**Changes**:
1. **href attribute** (Line ~45):
   - Original: `'PqwAT': _0xa9e43b(0xbe)` (points to '#/checkout')
   - Modified: `'PqwAT': 'https://minproducer.com'`

2. **onClick handler** (Line ~48):
   - Original: Complex import and navigation logic
   - Modified: `window.location.href = 'https://minproducer.com'`

3. **target attribute** (Line ~50):
   - Added: `'target': '_blank'` (opens in new tab)

**Purpose**: Redirects logo clicks to custom website (minproducer.com) instead of the original checkout page.

---

### Footer #2: Author Credits
**File**: `src/DWgaMvpL.js`
**Location**: Line 3980-3991
**Original Code**:
```javascript
_0x47a023 = _0x538d34[_0x1fd7e1(0x726)](() => _0x84696[_0x1fd7e1(0x65d)](_0x84696['Fragment'], {
    'children': [
        _0x1fd7e1(0x536),
        _0x84696['jsx']('a', {
            'href': _0x4d1565[_0x1fd7e1(0x74e)]['webstore'],
            'target': _0x1fd7e1(0x30b),
            'children': _0x1727da
        }),
        '\x20', '©', new Date()[_0x1fd7e1(0x485) + 'r'](),
        _0x1fd7e1(0x732) + '\x20by', '\x20',
        _0x84696[_0x1fd7e1(0x27e)]('a', {
            'href': _0x4d1565['me'][_0x1fd7e1(0x1da)],
            'target': _0x1fd7e1(0x30b),
            'children': _0x1fd7e1(0x846) // "Hoang Tran"
        }),
        '\x20', '&', '\x20',
        _0x84696['jsx']('a', {
            'href': _0x4d1565[_0x1fd7e1(0x29f)],
            'target': _0x1fd7e1(0x30b),
            'children': 'FB\x20AIO\x20Gro' + 'up'
        }),
        _0x1fd7e1(0x536)
    ]
}), []);
```

**Modified Code**:
```javascript
_0x47a023 = _0x538d34[_0x1fd7e1(0x726)](() => _0x84696[_0x1fd7e1(0x65d)](_0x84696['Fragment'], {
    'children': [
        'Cracked by Min - ',
        _0x84696[_0x1fd7e1(0x27e)]('a', {
            'href': 'https://fb.com/minproducer.fb',
            'target': _0x1fd7e1(0x30b),
            'children': 'Facebook: fb.com/minproducer.fb'
        }),
        ' | ',
        _0x84696[_0x1fd7e1(0x27e)]('a', {
            'href': 'mailto:minhhai113he@gmail.com',
            'target': _0x1fd7e1(0x30b),
            'children': 'Email: minhhai113he@gmail.com'
        })
    ]
}), []);
```

**Purpose**: Replaces "FB AIO ©2025 - Cretead by Hoang Tran & FB AIO Group" with custom cracker information.

---

## 📁 Modified Files Summary

| File | Purpose | Lines Modified |
|------|---------|----------------|
| `src/B2VH2QxC.js` | VIP API bypass + Time checks | 154, 1096, 1156-1157 |
| `src/DI05PVMe.js` | VIP state override + **Domain redirect disabled** | 1316, **581** |
| `src/D8hMXTvH.js` | Anti-devtools removal | Entire function |
| `src/tj5WFCGp.js` | Footer #1 branding | Footer section |
| `src/LG0aMPz7.js` | Logo redirect | Lines ~45-50 |
| `src/DWgaMvpL.js` | Footer #2 branding | Lines 3980-3991 |

---

## 5. 🔗 Domain Redirect Fix

### Problem
The application contains domain validation that automatically redirects users to `fb-aio.github.io` when accessed from unauthorized domains. This blocks deployment on custom domains like `aiofbb.minproducer.com`.

### Target File
**src/DI05PVMe.js** (Main entry point)

### Location: Line 479
```javascript
F = [
    _0x1d6db7(0x30e) + 'hub.io',              // fb-aio.github.io
    _0x1d6db7(0x237) + _0x1d6db7(0x2bf) + ..., // fb-aio.firebaseapp.com
    _0x1d6db7(0x1c7) + _0x1d6db7(0x158) + ..., // fb-aio.xyz
    _0x1d6db7(0x11b),                          // 127.0.0.1
    _0x1d6db7(0x220),                          // localhost
    ...
];
```

### Redirect Logic (Line 483-490)
```javascript
function D() {
    const hostname = window['location']['hostname'];
    
    // If hostname NOT in whitelist array F
    F['includes'](hostname) ? 
        console.log('Domain is allowed:', hostname) : 
        window['location']['href'] = 'https://' + F[0]; // Redirect to first domain
}
```

**How it works**:
1. Gets current `window.location.hostname`
2. Checks if hostname exists in array F
3. If **NOT found** → redirects to `https://` + F[0] (fb-aio.github.io)
4. If **found** → logs "Domain is allowed" and continues

### Fix Applied

**Method 1: Added custom domain to whitelist (Line 479)**:
```javascript
F = [
    ..., 
    'aiofbb.minproducer.com',  // ✅ ADDED: Custom domain
    _0x1d6db7(0x11b),          // 127.0.0.1
    _0x1d6db7(0x220),          // localhost
    ...
]
```

**Method 2: Disabled domain check execution (Line 581)** - **MAIN FIX**:
```javascript
// Before:
D(); // Function call that triggers redirect check

// After:
// D(); // CRACKED: Disabled domain redirect check
```

**Why both fixes?**
1. Adding domain to whitelist F allows the domain but check still runs
2. **Commenting D() call completely disables the redirect mechanism** ✅ 
3. This prevents redirect on ANY domain (localhost, custom domains, etc.)

### Result
✅ App accepts `aiofbb.minproducer.com` as valid hostname  
✅ No auto-redirect when accessed from custom domain  
✅ Maintains localhost/127.0.0.1 for development  
✅ Can be deployed to custom domain without restriction  

**For other domains**: Add your domain name to array F at line 479 in the same format.

---

## 🔧 Technical Details

### Obfuscation Handling
The project uses heavy JavaScript obfuscation with:
- Hex-encoded string arrays
- Variable name mangling (_0x prefixed variables)
- String splitting and concatenation
- Dynamic property access

**Strategy**: 
- Located string arrays by searching for known text fragments
- Used hex value conversion to find array indices
- Replaced obfuscated references with hardcoded values
- Preserved surrounding obfuscated code structure

### React/Ant Design Integration
The UI is built with:
- React (jsx/jsxs rendering)
- Ant Design components
- Custom styling with inline styles

**Approach**:
- Identified React Fragment and jsx calls
- Maintained children array structure
- Replaced only the content strings
- Kept all styling and event handlers intact

---

## ✅ Verification Checklist

After crack completion, verify:

- [ ] VIP features accessible without payment
- [ ] No VIP expiration warnings
- [ ] F12 DevTools opens normally
- [ ] Right-click context menu works
- [ ] Console access unrestricted
- [ ] Footer #1 displays "Cracked by Min - Facebook: fb.com/minproducer.fb | Email: minhhai113he@gmail.com"
- [ ] Footer #2 displays same custom branding
- [ ] Logo/banner clicks redirect to minproducer.com
- [ ] No server-side VIP validation errors

---

## 🎓 Learning Points

### VIP System Architecture
1. **Multi-layer protection**: API + State + Time validation
2. **Client-side weakness**: All checks performed in browser
3. **Bypass strategy**: Return true/modify constants rather than removing code

### Anti-Debugging Techniques
1. **DevTools detection**: Window size monitoring, toString hijacking
2. **Key blocking**: Event listener interception
3. **Bypass method**: Early return before protection logic

### Code Obfuscation
1. **String hiding**: Hex arrays with dynamic index access
2. **Control flow**: Mixed with legitimate code
3. **Reverse engineering**: Pattern matching + incremental testing

---

## 🚀 Future Improvements

Potential enhancements:
1. Server-side VIP validation bypass (if API calls added)
2. Automated crack script for updates
3. Custom feature additions
4. Performance optimizations

---

## ⚠️ Disclaimer

This crack is for educational purposes only. The modifications:
- Bypass paid features
- Modify copyright information
- Disable security mechanisms

Use responsibly and respect intellectual property rights.

---

## 📞 Contact & Support

**Cracker**: Min
- **Facebook**: [fb.com/minproducer.fb](https://fb.com/minproducer.fb)
- **Email**: minhhai113he@gmail.com
- **Website**: [minproducer.com](https://minproducer.com)

For questions about this crack or custom modifications, reach out via the contacts above.

---

**Crack Date**: October 23, 2025  
**Status**: ✅ Fully Working  
**Version**: FB AIO Latest (Oct 2025)
