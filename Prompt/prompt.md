### 📌 **Why Do We Use `prompt()` in JavaScript?**  

The `prompt()` function in JavaScript is used to **take input from the user** via a simple dialog box. It allows users to enter text, which is then returned as a **string**.  

---

## 🚀 **Key Uses of `prompt()`**
1. **Get user input** – Collect data from users without using an HTML form.  
2. **Interactive scripts** – Prompt users for quick decisions.  
3. **Testing and debugging** – Quickly test scripts by inputting values dynamically.  

---

## 🛠 **Syntax**
```js
let userInput = prompt("Enter your name:");
```
- `"Enter your name:"` → Message displayed in the prompt box.  
- The value entered by the user is stored in `userInput`.  

---

## 📝 **Example 1: Get User's Name**
```js
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");
```
🔹 If the user enters **"Alice"**, the output will be:  
```
Hello, Alice!
```

---

## 📝 **Example 2: Convert Input to a Number**
```js
let age = prompt("Enter your age:");
age = Number(age); // Convert string to number
console.log("Next year, you will be " + (age + 1) + " years old.");
```
🔹 If the user enters **"25"**, the output will be:  
```
Next year, you will be 26 years old.
```

---

## ⚠️ **Important Notes**
- `prompt()` **always returns a string**, even if the user enters a number.  
- If the user **clicks "Cancel"**, it returns `null`.  
- If the user **does not enter anything**, it returns an **empty string** (`""`).  

---

## 🏆 **Best Practices**
✔ **Use `Number(prompt())` for numeric input.**  
✔ **Check for `null` or empty input** to prevent errors.  
✔ **Prefer HTML forms for complex inputs** in real-world applications.  

