

### 📌 **JavaScript: `var` vs `let` vs `const`**  

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they behave differently in terms of **scope, hoisting, and mutability**.

---

## 🔥 **1. `var` (Old Way - Avoid Using)**
✅ Function-scoped  
✅ Hoisted (initialized as `undefined`)  
✅ Can be reassigned  
⚠️ Can be redeclared (potential issues)  

### Example:
```js
function testVar() {
  if (true) {
    var x = 10; // Accessible outside the block
  }
  console.log(x); // ✅ Works (function-scoped)
}
testVar();
```
### ⚠️ Problems with `var`
- **Does not respect block scope** (can lead to unexpected bugs).
- **Gets hoisted and initialized as `undefined`**, which can cause confusion.

---

## 🌟 **2. `let` (Modern & Preferred for Reassignable Variables)**
✅ Block-scoped  
✅ Hoisted (but **not initialized**)  
✅ Can be reassigned  
❌ Cannot be redeclared in the same scope  

### Example:
```js
function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ Error (y is block-scoped)
}
testLet();
```
### ✅ Advantages of `let`
- **Respects block scope**, preventing unintended variable leaks.
- **Avoids accidental redeclarations** in the same scope.

---

## 🔒 **3. `const` (Best for Constants & Immutable Variables)**
✅ Block-scoped  
✅ Hoisted (but **not initialized**)  
❌ Cannot be reassigned  
❌ Cannot be redeclared  

### Example:
```js
const PI = 3.14;
PI = 3.14159; // ❌ Error: Cannot reassign a `const` variable
```
### ✅ Why use `const`?
- **Ensures immutability** for primitive values.
- **Prevents accidental modifications** of important constants.

---

## 📝 **Summary Table**

| Feature  | `var` | `let` | `const` |
|----------|------|------|------|
| **Scope** | Function | Block | Block |
| **Hoisting** | ✅ Yes (initialized as `undefined`) | ✅ Yes (not initialized) | ✅ Yes (not initialized) |
| **Reassignable** | ✅ Yes | ✅ Yes | ❌ No |
| **Redeclarable** | ✅ Yes | ❌ No | ❌ No |

---

## 🚀 **Best Practices**
✔️ **Use `const`** by default unless you need to reassign the variable.  
✔️ **Use `let`** when reassignment is required.  
❌ **Avoid `var`** unless working with legacy code.  

---

## 🎯 **Conclusion**
| **Scenario** | **Best Choice** |
|-------------|---------------|
| A variable that never changes | `const` |
| A variable that changes | `let` |
| Legacy code or function-wide scope | `var` (not recommended) |

🔹 Always prefer **`const`** unless you need to change the value.  
🔹 Use **`let`** when reassignment is necessary.  
🔹 Avoid **`var`** to prevent unexpected behavior.  

