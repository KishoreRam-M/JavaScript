Great question! The reason a **Promise runs automatically** when created is because of how JavaScript **constructors** work. Let’s break it down step by step. 🚀  

---

### **1️⃣ Understanding How `new Promise()` Works**  
When you create a new Promise like this:  

```javascript
let isCofeeReady = new Promise((resolve, reject) => {
    console.log("Checking coffee availability...");
    
    let isCofeeReadyy = true; // Simulating coffee availability

    if (isCofeeReadyy) {
        resolve();  // Mark promise as fulfilled
    } else {
        reject();  // Mark promise as rejected
    }
});
```
🔹 **As soon as you create a `new Promise(...)`, JavaScript immediately executes the code inside it.**  
🔹 It does **not** wait for `.then()` or `.catch()` to be called.  
🔹 This is different from a function, which only runs when explicitly called.

---

### **2️⃣ Why Does It Run Automatically?**
When you write:  
```javascript
new Promise((resolve, reject) => { ... });
```
- You are **passing a function** as an argument to the `Promise` constructor.  
- The `Promise` constructor **immediately** executes this function.  
- This function is called the **executor function** (the code inside `(resolve, reject) => {...}`).  
- Because JavaScript **calls the executor function immediately**, the promise starts running as soon as it is created.

---

### **3️⃣ How Is It Different from a Function?**
Let’s compare **a function vs a promise**:

#### **Example 1: A Function (Runs Only When Called)**
```javascript
function checkCoffee() {
    console.log("Checking coffee availability...");
}

checkCoffee(); // ✅ This will run only when called
```
Here, `checkCoffee()` does **nothing** until we explicitly call it.

---

#### **Example 2: A Promise (Runs Immediately)**
```javascript
let isCofeeReady = new Promise((resolve, reject) => {
    console.log("Checking coffee availability...");
    
    let isCofeeReadyy = true;

    if (isCofeeReadyy) {
        resolve();
    } else {
        reject();
    }
});
```
👉 As soon as this line runs, `"Checking coffee availability..."` gets printed **without calling anything explicitly**.  
👉 The code inside the Promise **runs automatically** because the **executor function is executed immediately**.

---

### **4️⃣ What If You Want a Promise That Doesn’t Run Immediately?**
If you **don’t** want it to run automatically, you should **wrap it inside a function**:

```javascript
function getCoffeeStatus() {
    return new Promise((resolve, reject) => {
        console.log("Checking coffee availability...");

        let isCofeeReadyy = true;
        if (isCofeeReadyy) {
            resolve();
        } else {
            reject();
        }
    });
}

// ✅ Now it will run only when we call getCoffeeStatus()
getCoffeeStatus().then(() => {
    console.log("Coffee is ready! ☕");
}).catch(() => {
    console.log("Sorry, no coffee available. 🍵");
});
```
🔹 Now, the Promise **does not** run immediately.  
🔹 It only runs when we call `getCoffeeStatus()`.

---

### **5️⃣ Conclusion**
✅ **Functions** only run when explicitly called.  
✅ **Promises** execute **immediately** when created because the **executor function runs automatically**.  
✅ If you want a **Promise that doesn’t run immediately**, you must **wrap it inside a function** and call it when needed.  
