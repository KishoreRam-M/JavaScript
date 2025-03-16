Let's break down how this **`filter()`** method removes duplicates from the array. 🚀  

---

### **🔍 Understanding the Code**
```javascript
let arr = [1, 1, 9, 9, 6, 16, 16, 45, 2];

let unique = arr.filter((value, index, self) => self.indexOf(value) === index);

console.log(unique); 
// Output: [1, 9, 6, 16, 45, 2]
```

---

### **📌 Step-by-Step Execution**
#### **🔹 `filter()` Syntax**
```javascript
arr.filter((value, index, self) => self.indexOf(value) === index)
```
- `value` → The current element in the array.
- `index` → The current index of that element.
- `self` → The original array (`arr` itself).
- `self.indexOf(value)` → Finds the **first occurrence index** of `value` in `arr`.

🚀 **This works by keeping only the first occurrence of each value** and removing duplicates.

---

### **🔍 How Each Element is Processed**
Let's analyze how each element behaves:  

| **Element** | **Index (`index`)** | **First Occurrence (`self.indexOf(value)`)** | **Condition (`index === self.indexOf(value)`)** | **Kept?** |
|------------|---------------------|--------------------------------|--------------------------------|---------|
| **1**      | `0`                 | `0`                            | ✅ `0 === 0` → **Keep**      | ✅ |
| **1**      | `1`                 | `0`                            | ❌ `1 !== 0` → **Remove**    | ❌ |
| **9**      | `2`                 | `2`                            | ✅ `2 === 2` → **Keep**      | ✅ |
| **9**      | `3`                 | `2`                            | ❌ `3 !== 2` → **Remove**    | ❌ |
| **6**      | `4`                 | `4`                            | ✅ `4 === 4` → **Keep**      | ✅ |
| **16**     | `5`                 | `5`                            | ✅ `5 === 5` → **Keep**      | ✅ |
| **16**     | `6`                 | `5`                            | ❌ `6 !== 5` → **Remove**    | ❌ |
| **45**     | `7`                 | `7`                            | ✅ `7 === 7` → **Keep**      | ✅ |
| **2**      | `8`                 | `8`                            | ✅ `8 === 8` → **Keep**      | ✅ |

---

### **✅ Final Unique Array**
After filtering, the remaining unique elements are:
```javascript
[1, 9, 6, 16, 45, 2]
```

---

### **🚀 Why This Works?**
1️⃣ **`indexOf(value)` always returns the first occurrence index** of `value`.  
2️⃣ **If `index` matches `indexOf(value)`, it's the first occurrence → Keep it.**  
3️⃣ **If `index` is greater than `indexOf(value)`, it's a duplicate → Remove it.**  

---

### **💡 Alternative (Faster Way) – Using `Set`**
The **best and most efficient way** to remove duplicates:
```javascript
let unique = [...new Set(arr)];
console.log(unique);
// Output: [1, 9, 6, 16, 45, 2]
```
✔ **Faster than `filter() + indexOf()`**  
✔ **Shorter & cleaner**  

---

### **🚀 Summary**
| Method | Works By | Time Complexity | Best Use Case |
|--------|---------|----------------|--------------|
| `filter() + indexOf()` | Checking first occurrence index | **O(n²) (Slower for large arrays)** | When Set isn't available (older JavaScript versions) |
| `new Set()` | Storing unique values automatically | **O(n) (Faster & recommended)** | Removing duplicates efficiently |

🔹 **For small arrays, both work fine.**  
🔹 **For large datasets, always prefer `Set` for better performance.** 🚀
