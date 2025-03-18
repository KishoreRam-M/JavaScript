Great question! 🚀 JavaScript **Promises** come with several built-in methods that are used daily in real-world applications. Let’s go through all the essential ones with examples.  

---

## **1️⃣ `then()` – Handle Success**  
The `.then()` method is used to handle the **successful** resolution of a Promise.  

### ✅ **Example:**  
```javascript
let orderCoffee = new Promise((resolve, reject) => {
    let coffeeReady = true;
    if (coffeeReady) {
        resolve("Coffee is ready! ☕");
    } else {
        reject("No coffee available. ❌");
    }
});

orderCoffee.then((message) => {
    console.log(message); // Output: Coffee is ready! ☕
});
```
👉 If the promise resolves successfully, the `.then()` callback runs.  

---

## **2️⃣ `catch()` – Handle Errors**  
The `.catch()` method is used to handle **rejections** (errors).  

### ✅ **Example:**  
```javascript
let orderTea = new Promise((resolve, reject) => {
    let teaAvailable = false;
    if (teaAvailable) {
        resolve("Tea is ready! 🍵");
    } else {
        reject("Sorry, no tea available. ❌");
    }
});

orderTea.catch((error) => {
    console.log(error); // Output: Sorry, no tea available. ❌
});
```
👉 If the promise gets rejected, the `.catch()` callback runs.  

---

## **3️⃣ `finally()` – Run Code No Matter What**  
The `.finally()` method is executed **regardless of whether the Promise is resolved or rejected**.  

### ✅ **Example:**  
```javascript
let checkOrder = new Promise((resolve, reject) => {
    let available = true;
    if (available) {
        resolve("Your order is ready! ✅");
    } else {
        reject("Sorry, order failed. ❌");
    }
});

checkOrder
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .finally(() => console.log("Thank you for visiting! 🙏"));
```
🔹 Output when `available = true`:  
```
Your order is ready! ✅
Thank you for visiting! 🙏
```
🔹 Output when `available = false`:  
```
Sorry, order failed. ❌
Thank you for visiting! 🙏
```
👉 **No matter what happens**, `.finally()` will **always run**.  

---

## **4️⃣ `Promise.all()` – Run Multiple Promises in Parallel**  
The `Promise.all()` method runs multiple promises **at the same time** and waits for all of them to complete.  

### ✅ **Example:**  
```javascript
let coffee = new Promise((resolve) => setTimeout(() => resolve("Coffee is ready ☕"), 2000));
let sandwich = new Promise((resolve) => setTimeout(() => resolve("Sandwich is ready 🥪"), 3000));
let juice = new Promise((resolve) => setTimeout(() => resolve("Juice is ready 🧃"), 1000));

Promise.all([coffee, sandwich, juice])
    .then((items) => console.log("Order completed:", items))
    .catch((error) => console.log("Order failed:", error));
```
🔹 Output after 3 seconds:  
```
Order completed: [ 'Coffee is ready ☕', 'Sandwich is ready 🥪', 'Juice is ready 🧃' ]
```
👉 **If any one promise fails, `Promise.all()` rejects everything.**  

---

## **5️⃣ `Promise.allSettled()` – Get All Results, Even If Some Fail**  
`Promise.allSettled()` waits for all Promises to finish and returns **both resolved and rejected results**.  

### ✅ **Example:**  
```javascript
let pizza = new Promise((resolve) => setTimeout(() => resolve("Pizza is ready 🍕"), 2000));
let pasta = new Promise((_, reject) => setTimeout(() => reject("Pasta is out of stock ❌"), 3000));
let salad = new Promise((resolve) => setTimeout(() => resolve("Salad is ready 🥗"), 1000));

Promise.allSettled([pizza, pasta, salad])
    .then((results) => console.log(results));
```
🔹 Output after 3 seconds:  
```js
[
  { status: 'fulfilled', value: 'Pizza is ready 🍕' },
  { status: 'rejected', reason: 'Pasta is out of stock ❌' },
  { status: 'fulfilled', value: 'Salad is ready 🥗' }
]
```
👉 **Unlike `Promise.all()`, `Promise.allSettled()` doesn’t fail if one promise fails.**  

---

## **6️⃣ `Promise.race()` – Return First Completed Promise**  
`Promise.race()` returns the **first Promise that finishes**, whether it is resolved or rejected.  

### ✅ **Example:**  
```javascript
let fastFood = new Promise((resolve) => setTimeout(() => resolve("Burger is ready 🍔"), 3000));
let slowFood = new Promise((resolve) => setTimeout(() => resolve("Pizza is ready 🍕"), 5000));

Promise.race([fastFood, slowFood])
    .then((firstReady) => console.log("First ready:", firstReady));
```
🔹 Output after 3 seconds:  
```
First ready: Burger is ready 🍔
```
👉 **Whichever promise finishes first is returned!**  

---

## **7️⃣ `Promise.any()` – Return First Successful Promise**  
`Promise.any()` returns the **first successfully resolved Promise** and ignores failures.  

### ✅ **Example:**  
```javascript
let pizza = new Promise((_, reject) => setTimeout(() => reject("Pizza is not available ❌"), 2000));
let sandwich = new Promise((resolve) => setTimeout(() => resolve("Sandwich is ready 🥪"), 3000));
let juice = new Promise((resolve) => setTimeout(() => resolve("Juice is ready 🧃"), 1000));

Promise.any([pizza, sandwich, juice])
    .then((firstSuccess) => console.log("First success:", firstSuccess))
    .catch((error) => console.log("All failed:", error));
```
🔹 Output after 1 second:  
```
First success: Juice is ready 🧃
```
👉 **It returns the first successful result and ignores failures!**  

---

## **8️⃣ `Promise.resolve()` – Create a Resolved Promise**  
`Promise.resolve(value)` creates a **Promise that is already resolved**.

### ✅ **Example:**  
```javascript
let ready = Promise.resolve("Your food is ready! 🍽️");
ready.then(console.log);
```
🔹 Output:  
```
Your food is ready! 🍽️
```
👉 **Useful for converting values into Promises.**  

---

## **9️⃣ `Promise.reject()` – Create a Rejected Promise**  
`Promise.reject(error)` creates a **Promise that is already rejected**.

### ✅ **Example:**  
```javascript
let error = Promise.reject("Order failed ❌");
error.catch(console.log);
```
🔹 Output:  
```
Order failed ❌
```
👉 **Useful for creating an error state quickly.**  

---

## **🔥 Summary Table**
| Method | Description | If One Fails? |
|--------|------------|--------------|
| `.then()` | Handles success | ✅ No problem |
| `.catch()` | Handles errors | ✅ No problem |
| `.finally()` | Runs after success or error | ✅ Always runs |
| `Promise.all()` | Runs multiple in parallel, waits for all | ❌ All fail |
| `Promise.allSettled()` | Runs multiple, returns both successes & failures | ✅ Returns all results |
| `Promise.race()` | Returns the first completed promise | ✅ Works with first result |
| `Promise.any()` | Returns the first successful promise | ✅ Ignores failures |
| `Promise.resolve()` | Creates a resolved promise | ✅ Always resolves |
| `Promise.reject()` | Creates a rejected promise | ❌ Always rejects |

---

