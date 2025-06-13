# JavaScript Global Environment - Interview Questions & Challenges

## Table of Contents
1. [Basic Global Scope Questions](#1-basic-global-scope-questions)
2. [Variable Declaration Behavior](#2-variable-declaration-behavior)
3. [Hoisting Challenges](#3-hoisting-challenges)
4. [Shadowing and Scope Chain](#4-shadowing-and-scope-chain)
5. [Window vs GlobalThis](#5-window-vs-globalthis)
6. [Cross-Platform Global Objects](#6-cross-platform-global-objects)
7. [This Binding in Global Context](#7-this-binding-in-global-context)
8. [Implicit Globals and Strict Mode](#8-implicit-globals-and-strict-mode)
9. [ES Modules vs Scripts](#9-es-modules-vs-scripts)
10. [Advanced Global Manipulation](#10-advanced-global-manipulation)
11. [Practical Problem-Solving](#11-practical-problem-solving)
12. [Debugging and Code Analysis](#12-debugging-and-code-analysis)

---

## 1. Basic Global Scope Questions

### Question 1.1: Global Variable Access
```javascript
// What will this code output and why?
var a = 1;
let b = 2;
const c = 3;

console.log(window.a);
console.log(window.b);
console.log(window.c);
console.log(globalThis.a);
console.log(globalThis.b);
console.log(globalThis.c);
```

**Expected Answer:**
- `window.a` → `1` (var creates window property)
- `window.b` → `undefined` (let doesn't create window property)
- `window.c` → `undefined` (const doesn't create window property)
- `globalThis.a` → `1` (globalThis === window in browser)
- `globalThis.b` → `undefined`
- `globalThis.c` → `undefined`

### Question 1.2: Global Function Declarations
```javascript
// Predict the behavior
function outer() {
    function inner() {
        return 'inner';
    }
    return inner;
}

console.log(typeof window.outer);
console.log(typeof window.inner);

var func = function named() {
    return 'named';
};

console.log(typeof window.func);
console.log(typeof window.named);
```

**Expected Answer:**
- `window.outer` → `"function"` (global function declaration)
- `window.inner` → `"undefined"` (not global, inside outer function)
- `window.func` → `"function"` (var creates window property)
- `window.named` → `"undefined"` (named function expression doesn't create global)

---

## 2. Variable Declaration Behavior

### Question 2.1: Redeclaration Behavior
```javascript
// Will this code run without errors? What will it output?
var x = 1;
var x = 2;
console.log(x);

let y = 3;
let y = 4; // What happens here?
console.log(y);

const z = 5;
const z = 6; // What happens here?
console.log(z);
```

**Expected Answer:**
- `var x = 2` works, outputs `2` (var allows redeclaration)
- `let y = 4` throws `SyntaxError: Identifier 'y' has already been declared`
- `const z = 6` throws `SyntaxError: Identifier 'z' has already been declared`

### Question 2.2: Mixed Declaration Types
```javascript
// What will happen with these mixed declarations?
var mixed = 'var';
let mixed = 'let';
const mixed = 'const';

// Alternative scenario:
let another = 'let';
var another = 'var';
```

**Expected Answer:**
Both scenarios throw `SyntaxError` because you cannot redeclare a variable with different declaration types in the same scope.

### Question 2.3: Global Assignment vs Declaration
```javascript
// Compare these approaches
// Scenario A
globalVar1 = 'assigned';
var globalVar1;

// Scenario B
var globalVar2;
globalVar2 = 'assigned';

// Scenario C
globalVar3 = 'assigned';

console.log(window.globalVar1);
console.log(window.globalVar2);
console.log(window.globalVar3);

// Which creates a property on window? Which can be deleted?
delete window.globalVar1;
delete window.globalVar2;
delete window.globalVar3;
```

**Expected Answer:**
- All three create window properties
- `globalVar1` and `globalVar2` cannot be deleted (var-declared variables)
- `globalVar3` can be deleted (implicit global, not var-declared)

---

## 3. Hoisting Challenges

### Question 3.1: Complex Hoisting Scenario
```javascript
// What will this output?
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

var a = 1;
let b = 2;
const c = 3;

function d() {
    return 'function';
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
```

**Expected Answer:**
First set:
- `typeof a` → `"undefined"` (var hoisted, undefined)
- `typeof b` → `ReferenceError` (temporal dead zone)
- `typeof c` → `ReferenceError` (temporal dead zone)
- `typeof d` → `"function"` (function declaration hoisted)

Second set:
- All would be their respective types if the code gets past the ReferenceErrors

### Question 3.2: Function Hoisting Edge Cases
```javascript
// What will this code output?
console.log(foo());
console.log(bar());
console.log(baz());

function foo() {
    return 'foo';
}

var bar = function() {
    return 'bar';
};

let baz = () => 'baz';
```

**Expected Answer:**
- `foo()` → `"foo"` (function declaration hoisted)
- `bar()` → `TypeError: bar is not a function` (var hoisted as undefined)
- `baz()` → `ReferenceError` (let in temporal dead zone)

### Question 3.3: Hoisting with Conditional Declarations
```javascript
// What happens here?
console.log(typeof conditionalFunc);

if (false) {
    function conditionalFunc() {
        return 'never executed';
    }
}

console.log(typeof conditionalFunc);

// Compare with:
console.log(typeof conditionalVar);

if (false) {
    var conditionalVar = 'never assigned';
}

console.log(conditionalVar);
```

**Expected Answer:**
- Function declaration behavior in blocks is implementation-dependent
- `conditionalVar` is hoisted as `undefined`, remains `undefined`

---

## 4. Shadowing and Scope Chain

### Question 4.1: Complex Shadowing
```javascript
// What will this output?
var name = 'global';
let age = 25;

function test() {
    console.log(name); // Line A
    console.log(age);  // Line B
    
    var name = 'local';
    let age = 30;
    
    console.log(name); // Line C
    console.log(age);  // Line D
    
    function inner() {
        console.log(name); // Line E
        console.log(age);  // Line F
        console.log(this.name); // Line G
    }
    
    inner();
}

test();
```

**Expected Answer:**
- Line A: `undefined` (var name hoisted, shadows global)
- Line B: `ReferenceError` (let age in temporal dead zone)
- Line C: `"local"`
- Line D: `30`
- Line E: `"local"`
- Line F: `30`
- Line G: `"global"` (this.name refers to global/window.name)

### Question 4.2: Block Scope Shadowing
```javascript
// Predict the output
let x = 'outer';

{
    console.log(x); // Line 1
    let x = 'inner';
    console.log(x); // Line 2
}

console.log(x); // Line 3

// Compare with:
var y = 'outer';

{
    console.log(y); // Line 4
    var y = 'inner';
    console.log(y); // Line 5
}

console.log(y); // Line 6
```

**Expected Answer:**
- Line 1: `ReferenceError` (temporal dead zone)
- Line 2: `"inner"`
- Line 3: `"outer"`
- Line 4: `"outer"`
- Line 5: `"inner"`
- Line 6: `"inner"` (var doesn't respect block scope)

### Question 4.3: Parameter Shadowing
```javascript
// What will this output?
var param = 'global';

function shadowParam(param) {
    console.log(param); // Line 1
    var param = 'local';
    console.log(param); // Line 2
}

shadowParam('argument');

// Compare with:
function shadowParam2(param) {
    console.log(param); // Line 3
    let param = 'local'; // Line 4
    console.log(param); // Line 5
}

shadowParam2('argument');
```

**Expected Answer:**
- Line 1: `"argument"` (parameter value)
- Line 2: `"local"` (var declaration doesn't create new binding)
- Line 3: `"argument"`
- Line 4: `SyntaxError` (cannot redeclare parameter with let)

---

## 5. Window vs GlobalThis

### Question 5.1: Property Assignment Differences
```javascript
// What's the difference between these assignments?
window.prop1 = 'window';
globalThis.prop2 = 'globalThis';
this.prop3 = 'this';
var prop4 = 'var';

console.log(prop1);
console.log(prop2);
console.log(prop3);
console.log(prop4);

// Can these be deleted?
console.log(delete window.prop1);
console.log(delete globalThis.prop2);
console.log(delete this.prop3);
console.log(delete window.prop4);
```

**Expected Answer:**
- All console.log statements output their respective values
- `delete window.prop1` → `true`
- `delete globalThis.prop2` → `true`
- `delete this.prop3` → `true`
- `delete window.prop4` → `false` (var-declared properties can't be deleted)

### Question 5.2: Cross-Environment Detection
```javascript
// Write a function that works in all environments
function getGlobalObject() {
    // Your implementation here
}

// Test cases:
// Should work in browser (return window)
// Should work in Node.js (return global)
// Should work in Web Workers (return self)
// Should work in modern environments (return globalThis)
```

**Expected Answer:**
```javascript
function getGlobalObject() {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    if (typeof self !== 'undefined') return self;
    throw new Error('Unable to locate global object');
}
```

---

## 6. Cross-Platform Global Objects

### Question 6.1: Environment Detection
```javascript
// Complete this function to detect the JavaScript environment
function detectEnvironment() {
    // Return 'browser', 'node', 'webworker', or 'unknown'
}

console.log(detectEnvironment());
```

**Expected Answer:**
```javascript
function detectEnvironment() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        return 'browser';
    } else if (typeof global !== 'undefined' && typeof process !== 'undefined') {
        return 'node';
    } else if (typeof self !== 'undefined' && typeof importScripts !== 'undefined') {
        return 'webworker';
    } else {
        return 'unknown';
    }
}
```

### Question 6.2: Universal Global Access
```javascript
// What's wrong with this code and how would you fix it?
function setGlobalConfig(config) {
    window.APP_CONFIG = config;
}

function getGlobalConfig() {
    return window.APP_CONFIG;
}

// How would you make this work in all environments?
```

**Expected Answer:**
```javascript
function setGlobalConfig(config) {
    globalThis.APP_CONFIG = config;
}

function getGlobalConfig() {
    return globalThis.APP_CONFIG;
}

// Or with fallback:
const globalObj = (function() {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    if (typeof self !== 'undefined') return self;
    throw new Error('Unable to locate global object');
})();

function setGlobalConfig(config) {
    globalObj.APP_CONFIG = config;
}
```

---

## 7. This Binding in Global Context

### Question 7.1: Global This Behavior
```javascript
// What will these output in different modes?

// Non-strict mode
console.log(this === window);
console.log(this === globalThis);

function regularFunction() {
    console.log(this === window);
    console.log(this === globalThis);
}

const arrowFunction = () => {
    console.log(this === window);
    console.log(this === globalThis);
};

regularFunction();
arrowFunction();

// Now in strict mode
'use strict';
console.log(this === window);

function strictFunction() {
    console.log(this === undefined);
    console.log(this === window);
}

strictFunction();
```

**Expected Answer:**
Non-strict mode:
- All console.log statements output `true`

Strict mode:
- `this === window` → `true` (global context still has window)
- `strictFunction`: `this === undefined` → `true`, `this === window` → `false`

### Question 7.2: Module Context This
```javascript
// In an ES module, what will this output?
console.log(this); // Line 1
console.log(this === undefined); // Line 2
console.log(this === window); // Line 3
console.log(this === globalThis); // Line 4

function moduleFunction() {
    console.log(this); // Line 5
    console.log(this === undefined); // Line 6
}

const moduleArrow = () => {
    console.log(this); // Line 7
    console.log(this === undefined); // Line 8
};

moduleFunction();
moduleArrow();
```

**Expected Answer:**
In ES modules:
- Line 1: `undefined`
- Line 2: `true`
- Line 3: `false`
- Line 4: `false`
- Line 5: `undefined`
- Line 6: `true`
- Line 7: `undefined` (inherits from module scope)
- Line 8: `true`

---

## 8. Implicit Globals and Strict Mode

### Question 8.1: Implicit Global Creation
```javascript
// What will happen in each scenario?

// Scenario 1
function createImplicit() {
    implicitVar = 'I am implicit';
    return implicitVar;
}

console.log(createImplicit());
console.log(window.implicitVar);
console.log(delete window.implicitVar);

// Scenario 2
'use strict';
function createImplicitStrict() {
    implicitVarStrict = 'I am implicit in strict';
    return implicitVarStrict;
}

console.log(createImplicitStrict());
```

**Expected Answer:**
- Scenario 1: Works, outputs "I am implicit", creates window property, can be deleted
- Scenario 2: Throws `ReferenceError: implicitVarStrict is not defined`

### Question 8.2: Nested Function Implicit Globals
```javascript
// Trace through this code - what globals are created?
function outer() {
    var localVar = 'local';
    
    function inner() {
        localVar = 'modified local';
        newGlobal = 'surprise global';
        
        function deepest() {
            anotherGlobal = 'deep global';
            var properLocal = 'properly local';
        }
        
        deepest();
    }
    
    inner();
    return localVar;
}

console.log(outer());
console.log(typeof window.localVar);
console.log(typeof window.newGlobal);
console.log(typeof window.anotherGlobal);
console.log(typeof window.properLocal);
```

**Expected Answer:**
- `outer()` returns `"modified local"`
- `window.localVar` → `"undefined"`
- `window.newGlobal` → `"string"`
- `window.anotherGlobal` → `"string"`
- `window.properLocal` → `"undefined"`

---

## 9. ES Modules vs Scripts

### Question 9.1: Module vs Script Globals
```javascript
// File: script.js (loaded as <script src="script.js">)
var scriptVar = 'script';
let scriptLet = 'script';
const scriptConst = 'script';

function scriptFunction() {
    return 'script';
}

console.log(window.scriptVar);
console.log(window.scriptLet);
console.log(window.scriptConst);
console.log(window.scriptFunction);

// File: module.js (loaded as <script type="module" src="module.js">)
var moduleVar = 'module';
let moduleLet = 'module';
const moduleConst = 'module';

function moduleFunction() {
    return 'module';
}

console.log(window.moduleVar);
console.log(window.moduleLet);
console.log(window.moduleConst);
console.log(window.moduleFunction);
```

**Expected Answer:**
Script file:
- `window.scriptVar` → `"script"`
- `window.scriptLet` → `undefined`
- `window.scriptConst` → `undefined`
- `window.scriptFunction` → `function`

Module file:
- All four window properties → `undefined` (module scope is not global)

### Question 9.2: Module Global Access
```javascript
// In an ES module, how would you:
// 1. Create a truly global variable
// 2. Access a global variable created by a script
// 3. Share data between modules without imports/exports

// Provide implementations for each scenario
```

**Expected Answer:**
```javascript
// 1. Create truly global variable
globalThis.myGlobalVar = 'accessible everywhere';
// or
window.myGlobalVar = 'accessible everywhere'; // browser only

// 2. Access global from script
const scriptGlobal = globalThis.scriptVar || window.scriptVar;

// 3. Share data between modules
globalThis.sharedData = globalThis.sharedData || {
    cache: new Map(),
    config: {}
};
```

---

## 10. Advanced Global Manipulation

### Question 10.1: Global Property Descriptors
```javascript
// What will this code output?
var a = 1;
window.b = 2;
Object.defineProperty(window, 'c', {
    value: 3,
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(window, 'a'));
console.log(Object.getOwnPropertyDescriptor(window, 'b'));
console.log(Object.getOwnPropertyDescriptor(window, 'c'));

console.log(delete window.a);
console.log(delete window.b);
console.log(delete window.c);

window.c = 4;
console.log(window.c);
```

**Expected Answer:**
- Property descriptor for 'a': `{value: 1, writable: true, enumerable: true, configurable: false}`
- Property descriptor for 'b': `{value: 2, writable: true, enumerable: true, configurable: true}`
- Property descriptor for 'c': `{value: 3, writable: false, enumerable: false, configurable: false}`
- `delete window.a` → `false`
- `delete window.b` → `true`
- `delete window.c` → `false`
- `window.c` → `3` (assignment fails silently)

### Question 10.2: Global Proxy Trap
```javascript
// Create a proxy for the global object that logs all property access
// How would you implement this, and what are the challenges?

const globalProxy = new Proxy(/* your implementation */);

// Should log when accessing any global property
globalProxy.someProperty;
globalProxy.console.log('test');
```

**Expected Answer:**
```javascript
const globalProxy = new Proxy(globalThis, {
    get(target, prop, receiver) {
        console.log(`Accessing global property: ${prop}`);
        return Reflect.get(target, prop, receiver);
    },
    
    set(target, prop, value, receiver) {
        console.log(`Setting global property: ${prop} = ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});

// Challenges:
// 1. Cannot proxy the actual global object in most environments
// 2. Would need to replace globalThis reference everywhere
// 3. Some built-in properties might not work correctly
// 4. Performance implications
```

---

## 11. Practical Problem-Solving

### Question 11.1: Safe Global Namespace
```javascript
// Create a safe global namespace that:
// 1. Doesn't conflict with existing globals
// 2. Can be safely initialized multiple times
// 3. Provides version checking
// 4. Works in all environments

function createSafeNamespace(name, version) {
    // Your implementation here
}

// Usage:
const myApp = createSafeNamespace('MyApp', '1.0.0');
```

**Expected Answer:**
```javascript
function createSafeNamespace(name, version) {
    const global = (function() {
        if (typeof globalThis !== 'undefined') return globalThis;
        if (typeof window !== 'undefined') return window;
        if (typeof global !== 'undefined') return global;
        if (typeof self !== 'undefined') return self;
        throw new Error('Unable to locate global object');
    })();
    
    if (global[name]) {
        const existingVersion = global[name].version;
        if (existingVersion && existingVersion !== version) {
            console.warn(`Version conflict: ${name} v${existingVersion} vs v${version}`);
        }
        return global[name];
    }
    
    global[name] = {
        version: version,
        initialized: Date.now(),
        modules: {},
        config: {}
    };
    
    return global[name];
}
```

### Question 11.2: Global Event System
```javascript
// Implement a global event system that works across all environments
// Requirements:
// 1. addEventListener/removeEventListener interface
// 2. Custom event dispatching
// 3. Works without DOM
// 4. Memory leak prevention

class GlobalEventSystem {
    // Your implementation here
}

// Usage:
GlobalEventSystem.addEventListener('customEvent', handler);
GlobalEventSystem.dispatchEvent('customEvent', data);
```

**Expected Answer:**
```javascript
class GlobalEventSystem {
    static listeners = new Map();
    
    static addEventListener(type, listener) {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, new Set());
        }
        this.listeners.get(type).add(listener);
    }
    
    static removeEventListener(type, listener) {
        if (this.listeners.has(type)) {
            this.listeners.get(type).delete(listener);
            if (this.listeners.get(type).size === 0) {
                this.listeners.delete(type);
            }
        }
    }
    
    static dispatchEvent(type, data) {
        if (this.listeners.has(type)) {
            this.listeners.get(type).forEach(listener => {
                try {
                    listener(data);
                } catch (error) {
                    console.error('Event listener error:', error);
                }
            });
        }
    }
    
    static clear() {
        this.listeners.clear();
    }
}

// Make it globally available
globalThis.GlobalEventSystem = GlobalEventSystem;
```

### Question 11.3: Global Configuration Manager
```javascript
// Create a configuration manager that:
// 1. Supports nested configuration objects
// 2. Allows environment-specific overrides
// 3. Validates configuration schemas
// 4. Provides default values

class ConfigManager {
    // Your implementation here
}

// Usage:
ConfigManager.set('api.url', 'https://api.example.com');
ConfigManager.get('api.url'); // Should return the URL
ConfigManager.setEnvironment('production');
```

**Expected Answer:**
```javascript
class ConfigManager {
    static config = {};
    static environment = 'development';
    static defaults = {};
    
    static set(path, value) {
        const keys = path.split('.');
        let current = this.config;
        
        for (let i = 0; i < keys.length - 1; i++) {
            if (!(keys[i] in current)) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = value;
    }
    
    static get(path, defaultValue) {
        const keys = path.split('.');
        let current = this.config;
        
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                return defaultValue;
            }
        }
        
        return current;
    }
    
    static setEnvironment(env) {
        this.environment = env;
    }
    
    static getEnvironment() {
        return this.environment;
    }
}

globalThis.ConfigManager = ConfigManager;
```

---

## 12. Debugging and Code Analysis

### Question 12.1: Global Variable Leak Detection
```javascript
// Write a function that detects global variable leaks
// It should compare globals before and after running a function

function detectGlobalLeaks(fn) {
    // Your implementation here
    // Should return an array of newly created global variables
}

// Test case:
function leakyFunction() {
    leak1 = 'I am a leak';
    window.leak2 = 'I am also a leak';
    var proper = 'I am not a leak';
}

console.log(detectGlobalLeaks(leakyFunction));
// Should output: ['leak1', 'leak2']
```

**Expected Answer:**
```javascript
function detectGlobalLeaks(fn) {
    const global = globalThis;
    const beforeKeys = new Set(Object.keys(global));
    
    // Run the function
    fn();
    
    const afterKeys = Object.keys(global);
    const leaks = afterKeys.filter(key => !beforeKeys.has(key));
    
    return leaks;
}

// More robust version:
function detectGlobalLeaksRobust(fn) {
    const global = globalThis;
    const before = {};
    
    // Capture current state
    for (const key in global) {
        before[key] = true;
    }
    
    // Run function
    fn();
    
    // Find new globals
    const leaks = [];
    for (const key in global) {
        if (!(key in before)) {
            leaks.push(key);
        }
    }
    
    return leaks;
}
```

### Question 12.2: Global Scope Analyzer
```javascript
// Create a function that analyzes the global scope and returns:
// 1. Number of var declarations
// 2. Number of function declarations
// 3. Number of let/const declarations
// 4. Number of implicit globals
// 5. List of potential conflicts

function analyzeGlobalScope() {
    // Your implementation here
}

// Should return an object with analysis results
```

**Expected Answer:**
```javascript
function analyzeGlobalScope() {
    const global = globalThis;
    const analysis = {
        varDeclarations: 0,
        functionDeclarations: 0,
        letConstDeclarations: 0,
        implicitGlobals: 0,
        potentialConflicts: [],
        allGlobals: []
    };
    
    for (const key in global) {
        try {
            const descriptor = Object.getOwnPropertyDescriptor(global, key);
            if (!descriptor) continue;
            
            analysis.allGlobals.push(key);
            
            // Check if it's a function
            if (typeof global[key] === 'function') {
                analysis.functionDeclarations++;
            }
            
            // Check if it's configurable (likely implicit global)
            if (descriptor.configurable) {
                analysis.implicitGlobals++;
            } else {
                analysis.varDeclarations++;
            }
            
            // Check for common conflicts
            if (['$', '_', 'jQuery', 'React', 'Vue'].includes(key)) {
                analysis.potentialConflicts.push(key);
            }
            
        } catch (e) {
            // Some properties might not be accessible
        }
    }
    
    return analysis;
}
```

### Question 12.3: Memory Leak Detection
```javascript
// Write a global memory leak detector that can identify:
// 1. Functions that create global references
// 2. Event listeners that aren't cleaned up
// 3. Timers that aren't cleared

class GlobalMemoryLeakDetector {
    // Your implementation here
}

// Usage:
const detector = new GlobalMemoryLeakDetector();
detector.startMonitoring();
// ... run some code ...
const leaks = detector.getLeaks();
detector.stopMonitoring();
```

**Expected Answer:**
```javascript
class GlobalMemoryLeakDetector {
    constructor() {
        this.monitoring = false;
        this.globalsBefore = new Set();
        this.timers = new Set();
        this.originalSetTimeout = null;
        this.originalSetInterval = null;
    }
    
    startMonitoring() {
        if (this.monitoring) return;
        
        this.monitoring = true;
        this.globalsBefore = new Set(Object.keys(globalThis));
        
        // Wrap timer fu
