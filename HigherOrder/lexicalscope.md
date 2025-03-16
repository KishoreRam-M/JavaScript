### **🔹 What is Lexical Scope in JavaScript?**  
👉 **Lexical Scope** means that a function **can access variables from its parent scope where it was defined**, not where it was called.  

📌 **In simple terms**: **Functions remember the scope in which they were created.**  

---

### **🔹 Example of Lexical Scope**
```javascript
function outer() {
    let name = "Kishore";  // Variable inside outer scope

    function inner() {
        console.log(name);  // Can access `name` from outer()
    }

    inner();  // Calling inner function
}

outer();  
// Output: Kishore ✅
```
✔ **Even though `inner()` does not declare `name`, it can access it from `outer()` because of lexical scope.**  

---

### **🔹 How Lexical Scope Works?**
- JavaScript **looks at where a function was defined, NOT where it is called**.
- The function **remembers** its **parent scope** even when executed elsewhere.

---

### **🔹 Nested Lexical Scope**
```javascript
function outer() {
    let a = 10;

    function middle() {
        let b = 20;

        function inner() {
            let c = 30;
            console.log(a, b, c);  // ✅ Can access all variables
        }

        inner();
    }

    middle();
}

outer();  
// Output: 10 20 30 ✅
```
✔ **Each function has access to its parent function’s variables but NOT the other way around!**  

---

### **🔹 Lexical Scope vs. Dynamic Scope**
❌ JavaScript uses **Lexical Scope**, NOT **Dynamic Scope**.  
📌 **Dynamic Scope** (used in some languages like Bash) means **a function looks at where it was called, not where it was defined.**  
🔹 In JavaScript, scope is **determined at the time of function definition**, not at execution.

---

### **🔹 Why is Lexical Scope Important?**
✅ **Encapsulation** – Functions keep variables private.  
✅ **Predictability** – Functions behave consistently regardless of where they are called.  
✅ **Closures Work Because of Lexical Scope** – This allows functions to "remember" variables.

---

### **🔹 Summary**
| Concept | Explanation |
|---------|------------|
| **What?** | A function can access variables from its **parent function** where it was **defined**, not where it was **called**. |
| **How?** | Functions "remember" their original scope. |
| **Example?** | A function inside another function can access the outer function’s variables. |
| **Why Use?** | Helps with closures, predictability, and encapsulation. |
| **Not Dynamic Scope?** | JavaScript does **not** use dynamic scope (which looks at where a function is called). |

---


