### **🧐 What is an Iterable Object in JavaScript?**
An **iterable object** in JavaScript is any object that **implements the `Symbol.iterator` method**. This means the object can be looped over using `for...of` or other iteration techniques like the spread operator (`...`) and `Array.from()`.

---

### **✅ Examples of Iterable Objects**
✅ **Built-in iterables in JavaScript**:
1. **Arrays** (`[]`)
2. **Strings** (`""`)
3. **Maps** (`new Map()`)
4. **Sets** (`new Set()`)
5. **Typed Arrays** (`Uint8Array`, `Float32Array`, etc.)
6. **Arguments object** (inside functions)
7. **DOM NodeLists** (`document.querySelectorAll()`)

---

### **❌ Objects `{}` are NOT Iterable!**
Plain JavaScript objects **DO NOT** have an iterator by default.

❌ This will throw an error:
```javascript
let obj = { a: 1, b: 2, c: 3 };
for (let item of obj) { // ❌ ERROR: obj is not iterable
    console.log(item);
}
```

---

### **🛠 How to Check if an Object is Iterable?**
Use `typeof obj[Symbol.iterator] === "function"`
```javascript
console.log([1, 2, 3][Symbol.iterator]); // ✅ function (iterable)
console.log({ a: 1, b: 2 }[Symbol.iterator]); // ❌ undefined (not iterable)
```

---

### **🌀 How Does Iteration Work?**
An iterable object **must implement `Symbol.iterator`**, which returns an **iterator** (an object with a `next()` method).

Example: **Custom Iterable Object**
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

for (let num of myIterable) {
    console.log(num); // Output: 10, 20, 30
}
```

---

### **🚀 Summary**
| **Type** | **Iterable?** | **Can use `for...of`?** |
|----------|-------------|----------------|
| Array `[]` | ✅ Yes | ✅ Yes |
| String `""` | ✅ Yes | ✅ Yes |
| Map `new Map()` | ✅ Yes | ✅ Yes |
| Set `new Set()` | ✅ Yes | ✅ Yes |
| Object `{}` | ❌ No | ❌ No (unless manually made iterable) |

🔹 **Solution for Objects**: Use `Object.entries(obj)`, `Object.keys(obj)`, or `Object.values(obj)` to make them iterable.

Now you know what **iterables** are! 🚀
