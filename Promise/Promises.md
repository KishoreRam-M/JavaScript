A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous tasks like fetching data, reading files, or waiting for timers in a more readable and manageable way.

### **Why Use Promises?**
Before promises, callbacks were commonly used for handling asynchronous operations, leading to **callback hell** (nested callbacks that make the code hard to read and maintain). Promises solve this issue by chaining operations.

### **States of a Promise**
A Promise has three states:
1. **Pending** – The initial state; the operation is still in progress.
2. **Fulfilled** – The operation completed successfully, and the result is available.
3. **Rejected** – The operation failed, and an error reason is available.

### **Creating a Promise**
You can create a promise using the `Promise` constructor:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true; // Change this to false to test rejection
    if (success) {
      resolve("Operation successful! 🎉");
    } else {
      reject("Operation failed! ❌");
    }
  }, 2000);
});
```

### **Consuming a Promise**
You can handle the result using `.then()`, `.catch()`, and `.finally()`:

```javascript
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation completed.");
  });
```

### **Promise Chaining**
Promises can be chained to handle multiple asynchronous steps in sequence:

```javascript
new Promise((resolve) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((num) => {
    console.log(num); // 10
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 20
    return num * 3;
  })
  .then((num) => {
    console.log(num); // 60
  });
```

### **Using `async/await` (Modern Approach)**
Instead of `.then()` and `.catch()`, you can use `async/await`:

```javascript
async function fetchData() {
  try {
    let result = await myPromise;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Operation completed.");
  }
}

fetchData();
```

### **Promise Methods**
1. **`Promise.all([...promises])`** – Resolves when all promises resolve; rejects if any fail.
2. **`Promise.race([...promises])`** – Resolves/rejects as soon as the first promise settles.
3. **`Promise.allSettled([...promises])`** – Resolves with results of all promises, even if some fail.
4. **`Promise.any([...promises])`** – Resolves when the first successful promise settles.

### **Example: `Promise.all()`**
```javascript
const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));

Promise.all([p1, p2]).then(console.log); // ["First", "Second"] after 2 seconds
```

### **Summary**
- Promises make handling asynchronous code easier and more readable.
- Use `.then()` for success, `.catch()` for errors, and `.finally()` for cleanup.
- Use `async/await` for a cleaner approach.
- Use `Promise.all()`, `Promise.race()`, etc., for handling multiple promises.

