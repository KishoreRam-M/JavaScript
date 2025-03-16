## **🔹 How Primitive and Reference Data Types are Stored in Memory?**  

JavaScript uses **two types of memory**:  
1️⃣ **Stack Memory** → Stores **Primitive data types** (Direct values)  
2️⃣ **Heap Memory** → Stores **Reference data types** (Objects, Arrays, Functions)  

---

## **1️⃣ Stack Memory (for Primitives)**
- Stores **primitive values** (Number, String, Boolean, etc.).  
- Each variable gets its own space in memory.  
- When assigned to another variable, a **copy** of the value is made.  
- **Fast & automatically managed.**  

### **Example: How Primitive Values are Stored**
```javascript
let a = 10;
let b = a; // Copying value

b = 20; // Changing 'b' does not affect 'a'

console.log(a); // 10
console.log(b); // 20
```
### **🔹 Stack Memory Representation**
```
STACK MEMORY
---------------
| a = 10     |  <-- Value stored directly
| b = 10     |  <-- A separate copy is created
---------------
```
📌 **Each variable gets its own memory space, so modifying `b` does not affect `a`.**  

---

## **2️⃣ Heap Memory (for Reference Types)**
- Stores **Objects, Arrays, and Functions**.  
- Variables store a **memory address (reference)**, not the actual value.  
- When assigned to another variable, only the **reference (address)** is copied, **not the actual data**.  
- **Slow but flexible (used for dynamic memory allocation).**  

### **Example: How Reference Types are Stored**
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // Copying reference (not value)

obj2.name = "Bob"; // Modifying obj2 also affects obj1

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
```
### **🔹 Heap Memory Representation**
```
STACK MEMORY          HEAP MEMORY
----------------     ----------------------
| obj1 | 0x001 | --> | { name: "Alice" } |
| obj2 | 0x001 | --> | (same object)     |
----------------     ----------------------
```
📌 **`obj1` and `obj2` both point to the same object in Heap Memory. Changing one affects the other.**  

---

## **🔹 Key Differences Between Stack & Heap Memory**
| Feature  | **Stack (Primitive)** | **Heap (Reference Types)** |
|----------|----------------------|---------------------------|
| **Stores** | Direct values | Memory addresses (references) |
| **Speed** | Fast | Slow |
| **Copy Behavior** | Creates a new copy | Copies reference (points to the same object) |
| **Examples** | `Number`, `String`, `Boolean`, `Null`, `Undefined` | `Object`, `Array`, `Function` |
| **Mutation** | **Immutable** (cannot modify original) | **Mutable** (modifies original object) |

---

## **🔹 Avoiding Unintended Changes in Reference Types**
### **1️⃣ Using the Spread Operator (`{...obj}`)**
Creates a **shallow copy** (does not copy nested objects).
```javascript
let obj1 = { name: "John" };
let obj2 = { ...obj1 }; // Creates a new object

obj2.name = "Doe"; // Changing obj2 does NOT affect obj1

console.log(obj1.name); // "John"
console.log(obj2.name); // "Doe"
```

### **2️⃣ Using `Object.assign()`**
```javascript
let obj1 = { name: "Alice" };
let obj2 = Object.assign({}, obj1);

obj2.name = "Emma"; // Changing obj2 does NOT affect obj1

console.log(obj1.name); // "Alice"
console.log(obj2.name); // "Emma"
```

### **3️⃣ Deep Copy (for Nested Objects)**
For deeply nested objects, use `JSON.parse(JSON.stringify(obj))` or **Lodash’s `cloneDeep()`**.
```javascript
let obj1 = { name: "John", address: { city: "New York" } };
let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

obj2.address.city = "Los Angeles"; 

console.log(obj1.address.city); // "New York"
console.log(obj2.address.city); // "Los Angeles"
```

---

## **🚀 Conclusion**
✅ **Stack Memory** stores **primitive values directly** (fast, immutable).  
✅ **Heap Memory** stores **reference types as memory addresses** (mutable, slower).  
✅ **Assigning primitives creates a new copy**, but **assigning objects copies only the reference**.  
✅ **Use spread (`{...obj}`), `Object.assign()`, or deep copy for safe cloning.**  

📌 **Now, memory management in JavaScript should be much clearer! Let me know if you need more explanation. 😊**
