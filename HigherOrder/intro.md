### **🔹 What is a Higher-Order Function in JavaScript?**  
A **higher-order function (HOF)** is a function that either:  
✅ **Takes another function as an argument** (callback function).  
✅ **Returns a function**.  

### **📌 Example of a Higher-Order Function**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

function higherOrder(func, name) {
    return func(name);  // Calling the function passed as an argument
}

console.log(higherOrder(greet, "Kishore"));  
// Output: "Hello, Kishore!"
```
✔ Here, `higherOrder()` **takes another function (`greet()`) as a parameter**, making it a **higher-order function**.

---

### **🔹 Why Use Higher-Order Functions?**
✅ **Code Reusability** – Write once, use many times.  
✅ **Clean & Readable Code** – Avoid repetition and long functions.  
✅ **Functional Programming** – JavaScript supports functional paradigms.  
✅ **Used in Callbacks & Asynchronous Programming** – Key in event handling, `setTimeout()`, `map()`, `filter()`, `reduce()`, etc.

---

### **🔹 Where Are Higher-Order Functions Used?**
1️⃣ **`map()` – Transform Each Array Element**
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); 
// Output: [2, 4, 6]
```
✔ `map()` is a **higher-order function** because it **takes a function (`num => num * 2`) as an argument**.

---

2️⃣ **`filter()` – Select Elements Based on a Condition**
```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4, 6]
```
✔ `filter()` **takes a function as an argument** that determines which elements to keep.

---

3️⃣ **`reduce()` – Accumulate Values into One**
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  
// Output: 10
```
✔ `reduce()` **takes a function that performs accumulation**.

---

### **🔹 Why Don’t Some Other Languages Have Higher-Order Functions?**
- Some older programming languages (like **C, Java (before Java 8)**) do **not** treat functions as first-class citizens.  
- They require **explicit function pointers or interfaces** to achieve similar behavior.
- **Modern languages like JavaScript, Python, and Kotlin** fully support **functional programming**, allowing **functions to be passed as arguments**.

---

### **🔹 When Should You Use Higher-Order Functions?**
✅ **Working with Arrays (map, filter, reduce, sort)**  
✅ **Event Handling (`addEventListener()`)**  
✅ **Callbacks in Asynchronous Code (setTimeout, Promises, fetch API)**  
✅ **Encapsulation (Returning Functions, Closures)**  
✅ **Functional Programming (Composability, Immutability)**  

---

### **🔹 Final Summary**
| Concept  | Explanation |
|----------|------------|
| **What?** | A function that takes another function as a parameter or returns one. |
| **Why?** | Makes code reusable, cleaner, and supports functional programming. |
| **Where?** | Used in `map()`, `filter()`, `reduce()`, async functions, event handling, etc. |
| **Why Not in Some Languages?** | Older languages (C, Java pre-8) didn’t treat functions as first-class citizens. |

