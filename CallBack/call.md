### **📌 What is `.call()` in JavaScript?**  
The `.call()` method **invokes a function with a specified `this` value** and allows passing arguments explicitly.  

---

## **1️⃣ Why Use `.call()`?**
✅ **Method Borrowing** – Use a function from one object for another.  
✅ **Changing `this` Context** – Helps execute a function with a custom `this`.  
✅ **Explicit Argument Passing** – Unlike normal function calls, `.call()` lets you set `this` and pass arguments separately.  

---

## **2️⃣ Syntax of `.call()`**
```javascript
functionName.call(thisArg, arg1, arg2, ...);
```
- **`functionName`** → The function to invoke.  
- **`thisArg`** → Value of `this` inside the function.  
- **`arg1, arg2, ...`** → Arguments passed to the function.  

---

## **3️⃣ Example: Changing `this` Context**
```javascript
let person1 = { name: "Alice" };
let person2 = { name: "Bob" };

function greet() {
    console.log("Hello, " + this.name);
}

greet.call(person1); // "Hello, Alice"
greet.call(person2); // "Hello, Bob"
```
🔹 `.call()` sets `this` to `person1` or `person2`.

---

## **4️⃣ Example: Borrowing a Method**
You can use `.call()` to apply a function from one object to another.

```javascript
let person = {
    name: "Kishore",
    greet: function () {
        console.log("Hi, I am " + this.name);
    }
};

let anotherPerson = { name: "Ram" };

person.greet.call(anotherPerson); // "Hi, I am Ram"
```
🔹 `.call(anotherPerson)` temporarily **binds `this` to `anotherPerson`**.

---

## **5️⃣ Example: Passing Arguments**
```javascript
function introduce(age, city) {
    console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

let person = { name: "Kishore" };

introduce.call(person, 18, "Kadayanallur");
// Output: Hi, I'm Kishore, 18 years old from Kadayanallur.
```
🔹 `.call(person, 18, "Kadayanallur")`  
🔹 Sets `this` to `person` and passes extra arguments.

---

### **🚀 When to Use `.call()`?**
✔ When you need to **borrow methods** from another object.  
✔ When you want to **explicitly set `this`** inside a function.  
✔ When you need to **pass multiple arguments separately** (unlike `.apply()` which uses an array).  

Would you like to compare `.call()` vs `.apply()` vs `.bind()`? 🚀
