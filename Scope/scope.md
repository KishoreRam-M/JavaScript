# 🧠 What is Scope in JavaScript?

## 🔹 **Definition**

> Scope defines the **visibility** and **lifetime** of variables — where they can be **accessed or modified** in your code.

JavaScript has several layers of scope:

1. **Global Scope**
2. **Script Scope**
3. **Function Scope**
4. **Block Scope**

Each newer version of JavaScript added tighter scoping (from global → block) to improve maintainability and security.

---

# 🔍 Deep Dive: Script Scope

## ✅ What is Script Scope?

**Script Scope** refers to the visibility of variables that are declared inside a **single `<script>` tag** in the browser or **a single file** in Node.js.

### 🔸 In the browser:

* `let` and `const` variables are scoped to the script where they are declared.
* `var` variables are hoisted to the **global `window` object**, effectively escaping script scope.

### 🔸 In Node.js:

* Everything is **file-scoped**, even `var` doesn’t go global unless explicitly exported.
* Each file is treated as a **CommonJS module**, encapsulated in its own function wrapper.

---

## 🧪 Real Code Example (Browser)

```html
<!-- script1.html -->
<script>
  var a = 10;
  let b = 20;
  const c = 30;
</script>

<!-- script2.html -->
<script>
  console.log(a); // ✅ 10 — because 'a' is attached to window
  console.log(b); // ❌ ReferenceError — 'b' is script-scoped
  console.log(c); // ❌ ReferenceError — 'c' is script-scoped
</script>
```

### 🧠 Explanation:

* `var a` gets hoisted to `window.a`
* `let b` and `const c` are local to the `<script>` they’re declared in (Script Scope)
* Other `<script>` tags **cannot** access `b` or `c`

---

## 🔎 Internals (Browser)

When you declare variables at the top-level of a `<script>`, here’s how they behave:

| Declaration | Visible across `<script>` tags? | Attached to `window`? |
| ----------- | ------------------------------- | --------------------- |
| `var`       | ✅ Yes                           | ✅ Yes                 |
| `let`       | ❌ No                            | ❌ No                  |
| `const`     | ❌ No                            | ❌ No                  |

### ✅ Proof in DevTools:

```js
<script>
  var a = 1;
  let b = 2;
  const c = 3;
</script>
```

In the console:

```js
window.a; // 1 ✅
window.b; // undefined ❌
window.c; // undefined ❌
```

---

## 📂 Real-World Example: Preventing Variable Collisions

### ✅ Problem:

In large applications with many `<script>` files, using `var` can lead to **accidental overwrites** of variable names.

```html
<!-- analytics.js -->
<script>
  var token = '123456';
</script>

<!-- main.js -->
<script>
  var token = 'user-session-789';
  console.log(token); // ❗ Will override the previous 'token'
</script>
```

### ✅ Safer With Script Scope:

```html
<script>
  let token = '123456'; // Only local to this script
</script>

<script>
  let token = 'user-session-789'; // Also local, no conflict
</script>
```

✅ This **eliminates** unintentional overwrites and bugs in shared global space.

---

# 📘 In Node.js

Node wraps every file in a function like this:

```js
(function(exports, require, module, __filename, __dirname) {
  // your code here
});
```

This means:

* Even `var` is **not global** in Node.
* You need to `export` variables explicitly to share them across files.

### ✅ Example:

```js
// file1.js
var x = 10;
let y = 20;

// file2.js
console.log(x); // ❌ ReferenceError
```

You must do:

```js
// file1.js
module.exports = { x: 10 };

// file2.js
const { x } = require('./file1.js');
console.log(x); // ✅ 10
```

---

## 🧠 Comparison: Browser vs Node.js

| Environment | `var` global? | `let`/`const` global? | File/module scope |
| ----------- | ------------- | --------------------- | ----------------- |
| Browser     | ✅ Yes         | ❌ No                  | Partial           |
| Node.js     | ❌ No          | ❌ No                  | ✅ Full file scope |

---

# 🧩 Scope Hierarchy in JavaScript

```
Global Scope (browser → window)
└── Script Scope (per <script>)
    └── Function Scope (per function)
        └── Block Scope (inside {} blocks)
```

| Scope Level    | Declared By         | Visible Where                     |
| -------------- | ------------------- | --------------------------------- |
| Global Scope   | Outside any script  | Everywhere in all `<script>` tags |
| Script Scope   | Top-level in script | Only inside that script tag       |
| Function Scope | Inside a function   | Only inside that function         |
| Block Scope    | Inside `{}` block   | Only inside the block             |

---

# 📌 Summary Table: `var` vs `let` vs `const` (Advanced)

| Feature               | `var`             | `let`           | `const`         |
| --------------------- | ----------------- | --------------- | --------------- |
| Scope                 | Function + Global | Block + Script  | Block + Script  |
| Reassignable          | ✅ Yes             | ✅ Yes           | ❌ No            |
| Redeclarable          | ✅ Yes             | ❌ No            | ❌ No            |
| Hoisted               | ✅ Yes             | ✅ (TDZ applies) | ✅ (TDZ applies) |
| Attached to `window`? | ✅ Yes             | ❌ No            | ❌ No            |

---

# 🧠 TDZ Note (Temporal Dead Zone)

Variables declared with `let` and `const` are **hoisted** but cannot be used **before declaration**.

```js
console.log(x); // ❌ ReferenceError
let x = 10;
```

This is called the **Temporal Dead Zone** — the time between entering scope and the line of declaration.

---

# ✅ Best Practices (Real-World)

1. ✅ **Avoid using `var`**

   * It leaks to global scope
   * Easy to overwrite

2. ✅ Prefer `const` for constants and `let` for variables

   * Scoped properly
   * No accidental overrides

3. ✅ Understand that **script scope is isolated**

   * Helpful when integrating 3rd-party JS libraries
   * Prevents bugs from name collisions

4. ✅ In large apps: use **modules (ES6 or CommonJS)** instead of raw script tags

   * This gives you **true encapsulation**

---

# 🧪 Practice Question Set

### Q1: If I declare `let username = "kishore"` in `<script>1`, can I access it in `<script>2`?

✅ Answer: ❌ No, it’s **script-scoped**

---

### Q2: What’s the output?

```html
<script>
  var a = 10;
  let b = 20;
</script>
<script>
  console.log(window.a); // ?
  console.log(window.b); // ?
</script>
```

✅ Answer:

* `window.a` → `10` ✅
* `window.b` → `undefined` ❌

---

### Q3: In Node.js, if I declare `var x = 5` in one file, can another file access `x`?

✅ Answer: ❌ No, each file has its **own scope**

---

# 🔚 Final Thoughts

Script scope exists to **reduce pollution of the global scope** and to **isolate code logic** inside scripts or modules. It’s a natural and important part of modern JavaScript design, especially when managing large codebases or importing libraries.

When writing serious applications:

* Use `let` and `const` to respect scope.
* Treat each script/module as **a self-contained unit**.
* Avoid `var` unless you’re dealing with legacy code.
