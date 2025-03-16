### **Difference Between `querySelector`, `getElementById`, and `getElementsByClassName` in JavaScript**  

| **Method**                  | **Returns** | **Selector Type** | **Multiple Elements?** | **Use Case** |
|-----------------------------|------------|-------------------|------------------------|--------------|
| `querySelector(selector)`  | First matching element | CSS selector (`#id`, `.class`, `tag`) | ❌ No (only first match) | Selects any element using a CSS-like selector |
| `querySelectorAll(selector)` | All matching elements (NodeList) | CSS selector (`#id`, `.class`, `tag`) | ✅ Yes | Selects all elements matching the selector |
| `getElementById("id")` | A single element | **ID only** (`id="name"`) | ❌ No (only 1 element) | Best for selecting a unique element by `id` |
| `getElementsByClassName("class")` | HTMLCollection (array-like) of elements | Class name (`class="name"`) | ✅ Yes | Selects all elements with the specified class |

---

### **Detailed Explanation with Examples**  

#### **1️⃣ `querySelector` - Selects the First Matching Element**
```javascript
let firstParagraph = document.querySelector("p"); // First <p> tag
let firstDiv = document.querySelector(".container"); // First element with class 'container'
let button = document.querySelector("#myButton"); // Select element by ID
```

✅ **Supports complex selectors** (e.g., `div > p`, `input[type='text']`).  
❌ **Returns only the first match.**  

---

#### **2️⃣ `querySelectorAll` - Selects All Matching Elements**
```javascript
let allParagraphs = document.querySelectorAll("p"); // Selects all <p> tags
allParagraphs.forEach(p => p.style.color = "blue"); // Applies style to all
```

✅ Returns a **NodeList** (which supports `.forEach()`).  
✅ **Best for selecting multiple elements.**  

---

#### **3️⃣ `getElementById` - Selects a Unique Element by ID**
```javascript
let header = document.getElementById("mainHeader"); // Select element with id="mainHeader"
header.style.color = "red";
```

✅ **Fastest method (direct lookup).**  
❌ **Only works with IDs** (no class or tag selection).  

---

#### **4️⃣ `getElementsByClassName` - Selects All Elements with a Class**
```javascript
let boxes = document.getElementsByClassName("box"); // Selects all elements with class 'box'
for (let box of boxes) {
    box.style.border = "2px solid black"; // Apply style to all
}
```

✅ **Returns an HTMLCollection** (live updates when DOM changes).  
❌ **Does not support `.forEach()` (convert to array first).**  

---

### **Comparison Table**

| Feature | `querySelector` | `querySelectorAll` | `getElementById` | `getElementsByClassName` |
|---------|---------------|------------------|----------------|----------------------|
| **Returns** | First matching element | NodeList of all matches | A single element | HTMLCollection of all matches |
| **Selector Type** | CSS selector (`#id`, `.class`, `tag`) | CSS selector | Only `id` | Only `class` |
| **Multiple Elements?** | ❌ No | ✅ Yes | ❌ No | ✅ Yes |
| **Supports Complex Selectors?** | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Best For** | Selecting the first match with CSS flexibility | Selecting multiple elements | Fastest for a unique ID | Selecting multiple elements by class |

---
