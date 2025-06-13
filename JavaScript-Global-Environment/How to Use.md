To **safely use global variables or configuration** in a **large JavaScript project** without polluting the global scope, you should follow these structured techniques:

---

## ✅ 1. **Use ES Modules (Recommended for Modern JS)**

**Why**: ES modules have their own scope. Nothing declared inside leaks into the global scope.

### ✅ How:

```js
// config.js
export const API_KEY = 'abcd1234';
export const BASE_URL = 'https://api.example.com';

// main.js
import { API_KEY, BASE_URL } from './config.js';
```

**Best Practice**:

* Use `import`/`export` to share configuration or singletons.
* Use a default export for config objects.

```js
// config.js
const config = {
  API_KEY: 'abcd1234',
  BASE_URL: 'https://api.example.com',
};
export default config;
```

---

## ✅ 2. **Use IIFE (Immediately Invoked Function Expression)**

**Why**: Wraps logic/configuration in a local scope; nothing pollutes `window`.

### ✅ How:

```js
(function() {
  const config = {
    API_KEY: 'abcd1234',
  };
  window.MyApp = window.MyApp || {};
  window.MyApp.config = config;
})();
```

**Best Practice**:

* Namespace under `window.MyApp` instead of multiple globals.

---

## ✅ 3. **Use `globalThis` for Explicit Global Attachment**

**Why**: `globalThis` works in all environments (browser, Node, etc.).

### ✅ How:

```js
globalThis.MyApp = globalThis.MyApp || {};
globalThis.MyApp.config = {
  API_KEY: 'abcd1234',
};
```

**Best Practice**:

* Still avoid using this often—only for truly application-wide settings.
* Prefix your global to avoid conflicts (`MyApp_` or use Symbols).

---

## ✅ 4. **Use Configuration Singleton Pattern**

**Why**: Avoids multiple instances and provides central access.

### ✅ How:

```js
// config.js
class Config {
  constructor() {
    if (Config.instance) return Config.instance;
    this.API_KEY = 'abcd1234';
    Config.instance = this;
  }
}
export default new Config();
```

---

## ✅ 5. **Namespace Everything**

**Why**: Prevents key collisions in the global object.

### ✅ How:

```js
globalThis.MyApp = {
  config: {
    API_KEY: 'abcd1234'
  },
  utils: {},
  models: {}
};
```

---

## ✅ Summary of Best Practices

| Practice    | Description                               | Scope Pollution |
| ----------- | ----------------------------------------- | --------------- |
| ES Modules  | Use `import/export`                       | ❌ No            |
| IIFE        | Isolate config, attach to a single global | ⚠️ Minimal      |
| globalThis  | Use with caution and namespacing          | ⚠️ Minimal      |
| Singleton   | Centralized access                        | ❌ No            |
| Namespacing | Avoids many global variables              | ⚠️ Minimal      |

---

## 🔒 Key Rules

* ✅ Use **ES Modules** by default.
* 🚫 Never define variables directly on `window` unless intentional.
* ✅ Always use a **namespace** like `MyApp` if attaching to `globalThis`.
* ✅ Consider using `.env` files and tools like **Vite, Webpack, or dotenv** for build-time configuration.
