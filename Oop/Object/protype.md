### **Prototype-Based Nature in JavaScript**
JavaScript is a **prototype-based** language, which means that **objects inherit directly from other objects** rather than from classes (like in Java).

---

### **1. What is a Prototype?**
A **prototype** is a built-in object in JavaScript that acts as a blueprint for other objects. Every JavaScript object has an internal link to another object called its **prototype**.

Think of a prototype as a **parent object** from which child objects inherit properties and methods.

---

### **2. Example: Understanding Prototypes**
```javascript
// Creating an object with a method
const person = {
    greet: function() {
        console.log("Hello!");
    }
};

// Creating a new object that inherits from person
const student = Object.create(person);

student.greet(); // Output: Hello!
```
Here, `student` does **not** have the `greet` method, but JavaScript looks up its **prototype chain** and finds it in `person`.

---

### **3. Prototype Chain: How JavaScript Inherits Properties**
Every object in JavaScript has a hidden property called `__proto__`, which points to its prototype.

```javascript
console.log(student.__proto__ === person); // true
```
When you call `student.greet()`, JavaScript:
1. Checks if `greet` exists in `student`. ❌ (Not found)
2. Looks at `student.__proto__` (which is `person`) ✅ (Found)
3. Executes `person.greet()`

This is called **prototype chaining**.

---

### **4. Prototypes in JavaScript Classes**
Even when using `class` in JavaScript, it is still prototype-based under the hood.

```javascript
class Animal {
    speak() {
        console.log("I make a sound!");
    }
}

const dog = new Animal();
dog.speak(); // Output: I make a sound!

console.log(dog.__proto__ === Animal.prototype); // true
```
Here:
- `Animal.prototype` is the prototype of `dog`.
- `dog.speak()` works because JavaScript finds `speak` in its prototype.

---

### **5. Why is JavaScript Prototype-Based?**
✔ **More flexible than class-based inheritance**  
✔ **Objects can inherit directly from other objects**  
✔ **Memory-efficient: Methods are shared via prototype, not duplicated**  
✔ **Dynamic: Prototypes can be modified at runtime**  

---

### **6. Java vs. JavaScript: Key Difference**
| Feature         | Java (Class-Based) | JavaScript (Prototype-Based) |
|---------------|----------------|----------------|
| Inheritance  | Uses **classes** for inheritance | Uses **prototypes** for inheritance |
| Object Creation | Needs `new ClassName()` | Can use `{}`, `Object.create()`, or `class` |
| Method Sharing | Each object gets its own method copy | Methods are shared via prototype |

---

### **7. Changing a Prototype Dynamically**
Since prototypes are dynamic, we can add methods to all objects of a type at runtime.

```javascript
function Car(model) {
    this.model = model;
}

Car.prototype.drive = function() {
    console.log(`${this.model} is driving!`);
};

const myCar = new Car("Tesla");
myCar.drive(); // Output: Tesla is driving!
```
Even though `myCar` didn’t define `drive()`, it **inherited** it from `Car.prototype`.

