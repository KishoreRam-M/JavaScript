# **🔹 What is `Map` in JavaScript?**  
A **`Map`** is a built-in JavaScript object that allows you to store **key-value pairs**, just like an object. However, unlike objects, **`Map` preserves the order of entries and allows any data type as a key**.

---

## **🔹 Why Use `Map` Instead of Objects?**
| Feature | `Map` | Object `{}` |
|---------|------|-------------|
| Key type | Any type (objects, numbers, strings) | Only strings or symbols |
| Order | Maintains insertion order | No guaranteed order |
| Iteration | Has built-in iteration methods | Requires manual iteration (`for...in`) |
| Performance | Optimized for frequent additions/removals | Slower for large collections |

---

## **🔹 Creating a `Map`**
```javascript
// Create an empty Map
let myMap = new Map();

// Create a Map with initial values
let studentMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["course", "JavaScript"]
]);

console.log(studentMap);
// Output: Map { 'name' => 'John', 'age' => 25, 'course' => 'JavaScript' }
```

---

## **🔹 Common `Map` Methods**
| Method | Description | Example |
|--------|-------------|---------|
| `set(key, value)` | Adds a key-value pair | `myMap.set("age", 30);` |
| `get(key)` | Retrieves a value by key | `myMap.get("age"); // 30` |
| `has(key)` | Checks if a key exists | `myMap.has("age"); // true` |
| `delete(key)` | Removes a specific key | `myMap.delete("age");` |
| `clear()` | Removes all key-value pairs | `myMap.clear();` |
| `size` | Returns the number of key-value pairs | `myMap.size;` |

---

## **🔹 Iterating Over a `Map`**
### **1️⃣ Using `forEach()`**
```javascript
studentMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```
✅ **Output:**
```
name: John
age: 25
course: JavaScript
```

### **2️⃣ Using `for...of`**
```javascript
for (let [key, value] of studentMap) {
    console.log(`${key}: ${value}`);
}
```

### **3️⃣ Using `.keys()` and `.values()`**
```javascript
console.log([...studentMap.keys()]);  // ['name', 'age', 'course']
console.log([...studentMap.values()]);  // ['John', 25, 'JavaScript']
```

---

## **🔹 Convert `Map` to Object & Vice Versa**
### **1️⃣ Convert `Map` to Object**
```javascript
let objFromMap = Object.fromEntries(studentMap);
console.log(objFromMap);
// Output: { name: 'John', age: 25, course: 'JavaScript' }
```

### **2️⃣ Convert Object to `Map`**
```javascript
let obj = { name: "Alice", age: 22, course: "Python" };
let mapFromObj = new Map(Object.entries(obj));

console.log(mapFromObj);
// Output: Map { 'name' => 'Alice', 'age' => 22, 'course' => 'Python' }
```

---

## **🔹 Practical Use Cases of `Map`**
1️⃣ **Storing Unique Key-Value Pairs Efficiently**  
```javascript
let userRoles = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "Editor");
console.log(userRoles.get("Alice")); // 'Admin'
```

2️⃣ **Using Objects as Keys**
```javascript
let objKey = { id: 101 };
let map = new Map();
map.set(objKey, "Object as key");

console.log(map.get(objKey)); // 'Object as key'
```

3️⃣ **Counting Word Frequency**
```javascript
let text = "hello world hello";
let words = text.split(" ");
let wordCount = new Map();

words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
});

console.log(wordCount); 
// Output: Map { 'hello' => 2, 'world' => 1 }
```

---

## **🔹 Summary**
✔ `Map` stores **key-value pairs** where **keys can be any data type**.  
✔ **Faster performance** for frequent additions/removals compared to objects.  
✔ **Preserves insertion order**.  
✔ **Iterates easily** with `.forEach()`, `for...of`, `.keys()`, and `.values()`.  
✔ **Useful for storing structured data** like **word frequency, user sessions, caching, and object-based keys**.

🚀 **Use `Map` when you need key-value storage with efficiency & flexibility!**
