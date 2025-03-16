### **🔹 Definition of an Iterable Object in JavaScript**  
An **iterable object** is any object that **implements the `Symbol.iterator` method**, which returns an **iterator** (an object with a `next()` method).  

This allows the object to be used with **`for...of` loops, spread syntax (`...`), and other iteration mechanisms.**  

---

### **✅ Example: Built-in Iterables**
Some built-in iterable objects in JavaScript:
```javascript
let arr = [1, 2, 3];       // Array ✅ Iterable
let str = "hello";         // String ✅ Iterable
let set = new Set([1, 2]); // Set ✅ Iterable
let map = new Map();       // Map ✅ Iterable

console.log(typeof arr[Symbol.iterator]); // function ✅
console.log(typeof str[Symbol.iterator]); // function ✅
console.log(typeof set[Symbol.iterator]); // function ✅
console.log(typeof map[Symbol.iterator]); // function ✅
```

---

### **🛠 Creating a Custom Iterable Object**
A **custom iterable** must have a `[Symbol.iterator]` method that returns an iterator.

```javascript
let myIterable = {
    data: [10, 20, 30],
    
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Using `for...of` to iterate
for (let num of myIterable) {
    console.log(num); // Output: 10, 20, 30
}
```

---

### **📌 Key Characteristics of an Iterable Object**
1. It **must** implement `Symbol.iterator`, returning an **iterator**.
2. The iterator **must** have a `next()` method.
3. `next()` should return an object `{ value: ..., done: true/false }`.
4. Works with **`for...of`**, `spread (...)`, `Array.from()`, and destructuring.

---

### **🚀 Summary**
✅ **Iterable objects**: Arrays, Strings, Maps, Sets, Typed Arrays, NodeLists  
❌ **Non-iterable objects**: Plain objects `{}`, unless manually made iterable.  

🔹 **Solution for Objects**: Convert to an iterable format using `Object.entries()`, `Object.keys()`, or `Object.values()`.
