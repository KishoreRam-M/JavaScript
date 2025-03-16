### **📌 What is a Callback in JavaScript?**
A **callback function** is a function that is **passed as an argument** to another function and is executed **after** the outer function completes.

---

## **1️⃣ Why Do We Use Callbacks?**
✅ **Asynchronous Operations** – Handle tasks like API calls, file reading, and timers.  
✅ **Custom Behavior** – Functions can be made more dynamic by allowing different operations.  
✅ **Event Handling** – Execute code when an event (click, keypress) occurs.  
✅ **Error Handling** – Handle errors efficiently in async operations.  

---

## **2️⃣ Example: Basic Callback Function**
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();  // Executes the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Kishore", sayGoodbye);
```
### **🔹 Output**
```
Hello, Kishore
Goodbye!
```
🔹 `sayGoodbye` is **passed as a callback** and executes **after** `greet()` finishes.

---

## **3️⃣ Example: Callbacks in Asynchronous Operations**
JavaScript is **non-blocking**. Callbacks allow functions to execute **after** an async task is done.

### **🛠 Example: `setTimeout` (Delays Execution)**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Delayed execution after 2 seconds");
}, 2000);

console.log("End");
```
### **🔹 Output**
```
Start
End
Delayed execution after 2 seconds
```
🔹 `setTimeout` **does not block** execution, so `"End"` is printed before the delayed message.

---

## **4️⃣ Example: Callbacks for Error Handling**
```javascript
function fetchData(callback, errorCallback) {
    let success = Math.random() > 0.5; // Randomly simulate success or failure

    setTimeout(() => {
        if (success) {
            callback("✅ Data received!");
        } else {
            errorCallback("❌ Error fetching data!");
        }
    }, 2000);
}

fetchData(
    (message) => console.log(message),   // Success callback
    (error) => console.log(error)        // Error callback
);
```
🔹 If `success = true`, **data is received**.  
🔹 If `success = false`, **error is handled separately**.

---

## **5️⃣ Callbacks for Custom Behavior**
```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
```
🔹 The **callback (`operation`) changes behavior** dynamically.

---

## **🚀 Summary: When to Use Callbacks?**
✔ When working with **asynchronous operations** (API calls, file reading).  
✔ When implementing **customizable functions**.  
✔ When handling **user events** (clicks, form submissions).  
✔ When managing **error handling in async code**.  

Would you like to see how **Promises** improve callbacks? 🚀
