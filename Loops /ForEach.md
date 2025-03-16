### **What is `.each()` Loop in JavaScript?**
The `.each()` loop is **not a native JavaScript loop** but is commonly used in **jQuery** to iterate over objects and arrays.

### **Syntax (jQuery `.each()` Loop)**
```javascript
$.each(collection, function(index, value) {
    console.log(index, value);
});
```

### **Example (Array Iteration using `.each()`)**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];

$.each(fruits, function(index, value) {
    console.log(index, value);
});
```
### **Output:**
```
0 Apple
1 Banana
2 Cherry
```

---

## **How `.each()` is Different from Other Loops?**

| Loop Type  | Works On | Iterates Over | Can Break? | Native JavaScript? |
|------------|---------|--------------|------------|----------------|
| `for` | Arrays, Numbers | Indexes | ✅ Yes (`break`, `continue`) | ✅ Yes |
| `for...in` | Objects, Arrays (not recommended for arrays) | Keys (Indexes for Arrays) | ✅ Yes (`break`, `continue`) | ✅ Yes |
| `for...of` | Arrays, Strings, Maps, Sets | Values | ✅ Yes (`break`, `continue`) | ✅ Yes |
| `forEach()` | Arrays | Values | ❌ No (`break` not allowed) | ✅ Yes |
| `.each()` | jQuery Objects, Arrays, Objects | Values | ❌ No (`break` not allowed) | ❌ No (jQuery required) |

---

## **🚀 Key Differences of `.each()`**
1️⃣ **Not native JavaScript** → Requires jQuery.  
2️⃣ **Works on both Arrays & Objects** → Unlike `forEach()`, which only works on arrays.  
3️⃣ **No `break` statement** → You cannot break out of `.each()`, whereas `for`, `for...in`, and `for...of` allow `break`.  
4️⃣ **Slower than native loops** → Because it's part of the jQuery library.  

---

## **📌 Should You Use `.each()`?**
- ✅ Use `.each()` **only if working with jQuery**.
- ❌ **Avoid it in modern JavaScript** since `forEach()`, `for...of`, and `map()` are better alternatives.

Would you like examples comparing `.each()` with modern JavaScript loops? 🚀
