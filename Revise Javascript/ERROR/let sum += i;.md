# 🧠 Why `let sum += i;` Throws an Error in JavaScript

### ❌ Problem Code

```javascript
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    let sum += i; // ❌ SyntaxError
  }
}
```

### ❓ Why This Fails

The line:

```javascript
let sum += i;
```

tries to do two things at once:

* `let sum` → declare a new variable
* `sum += i` → use that variable as if it already has a value

But you **cannot update a variable that has just been declared**. JavaScript throws an error because `sum` has **not been initialized** yet.

---

### ✅ Correct Approach

Declare and initialize `sum` **once before the loop**, then update it inside the loop:

```javascript
let sum = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log("Sum of even numbers is " + sum);
```

---

### 🧠 Key Rule

> ❗ You cannot declare and update a variable in the same statement using `let`.

#### 🔴 Invalid:

```javascript
let sum += i; // ❌ SyntaxError
```

#### ✅ Valid:

```javascript
let sum = 0;
sum += i;
```

---

### 📌 Remember:

* `let` and `const` are **block-scoped**
* Always **initialize** a variable before using `+=`, `-=`, etc.
* Declare once → Update many times

---

### 📊 Output

```
Sum of even numbers is 2450
```

---

### ✅ Bonus Tip: Use `reduce()` for cleaner code

```javascript
const sum = Array.from({ length: 100 }, (_, i) => i)
                 .filter(i => i % 2 === 0)
                 .reduce((acc, val) => acc + val, 0);

console.log("Sum of even numbers is " + sum);
```
