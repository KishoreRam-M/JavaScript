### **JavaScript Object Concepts & Related Methods**  

JavaScript objects are a **core concept** in the language. Here’s a structured breakdown of important **concepts, methods, and techniques** related to objects in JavaScript.  

---

## **1️⃣ Object Creation & Initialization**
### **Ways to Create Objects**
- **Object Literal (Most Common)**
  ```javascript
  let person = { name: "John", age: 25 };
  ```
- **Using `new Object()` (Less Common)**
  ```javascript
  let person = new Object();
  person.name = "John";
  person.age = 25;
  ```
- **Using a Constructor Function**
  ```javascript
  function Person(name, age) {
      this.name = name;
      this.age = age;
  }
  let person1 = new Person("John", 25);
  ```
- **Using Class (ES6)**
  ```javascript
  class Person {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }
  }
  let person2 = new Person("John", 25);
  ```

---

## **2️⃣ Object Properties & Access Methods**
### **Accessing Properties**
- **Dot Notation (`object.property`)**
  ```javascript
  console.log(person.name); // John
  ```
- **Bracket Notation (`object["property"]`)**
  ```javascript
  console.log(person["age"]); // 25
  ```

### **Adding/Modifying Properties**
```javascript
person.city = "New York";  // Add new property
person.age = 26;           // Modify existing property
```

### **Deleting Properties**
```javascript
delete person.age; // Removes 'age' property
```

### **Checking Property Existence**
```javascript
console.log("name" in person); // true
console.log(person.hasOwnProperty("city")); // true
```

---

## **3️⃣ Object Methods**
### **Basic Built-in Methods**
- **`Object.keys(obj)`** → Returns an array of all property keys  
  ```javascript
  console.log(Object.keys(person)); // ["name", "city"]
  ```
- **`Object.values(obj)`** → Returns an array of all property values  
  ```javascript
  console.log(Object.values(person)); // ["John", "New York"]
  ```
- **`Object.entries(obj)`** → Returns an array of `[key, value]` pairs  
  ```javascript
  console.log(Object.entries(person)); // [["name", "John"], ["city", "New York"]]
  ```
- **`Object.assign(target, source)`** → Copies properties from one object to another  
  ```javascript
  let obj1 = { a: 1 };
  let obj2 = { b: 2 };
  let merged = Object.assign({}, obj1, obj2);
  console.log(merged); // { a: 1, b: 2 }
  ```
- **`Object.freeze(obj)`** → Makes an object immutable (cannot modify properties)  
  ```javascript
  Object.freeze(person);
  person.city = "London"; // No effect
  ```
- **`Object.seal(obj)`** → Allows modification but prevents adding/removing properties  
  ```javascript
  Object.seal(person);
  person.city = "Chicago"; // Allowed
  delete person.city; // Not allowed
  ```

---

## **4️⃣ Object Iteration Methods**
### **Looping Through Objects**
- **Using `for...in`**
  ```javascript
  for (let key in person) {
      console.log(key + ": " + person[key]);
  }
  ```
- **Using `Object.entries()` + `forEach()`**
  ```javascript
  Object.entries(person).forEach(([key, value]) => {
      console.log(key, value);
  });
  ```

---

## **5️⃣ Object Destructuring (ES6)**
### **Extracting Properties Easily**
```javascript
const person = { name: "John", age: 25, city: "New York" };
const { name, age } = person;
console.log(name, age); // John 25
```

---

## **6️⃣ Object Spread (`...`) & Rest Operator**
### **Copying an Object (`...` spread)**
```javascript
let newPerson = { ...person };
```

### **Merging Objects**
```javascript
let objA = { x: 1, y: 2 };
let objB = { z: 3 };
let merged = { ...objA, ...objB };
console.log(merged); // { x: 1, y: 2, z: 3 }
```

---

## **7️⃣ Prototypes & Inheritance**
### **Understanding Prototypes**
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    return "Hello, " + this.name;
};
let p = new Person("John");
console.log(p.greet()); // Hello, John
```

### **Using `Object.create()` for Inheritance**
```javascript
let parent = { greet: function() { return "Hello"; } };
let child = Object.create(parent);
console.log(child.greet()); // Hello
```

---

## **8️⃣ JSON & Objects**
### **Convert Object to JSON (`JSON.stringify()`)**
```javascript
let jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"John","city":"New York"}'
```

### **Convert JSON to Object (`JSON.parse()`)**
```javascript
let obj = JSON.parse(jsonString);
console.log(obj.name); // John
```

---

## **9️⃣ This Keyword in Objects**
```javascript
let car = {
    brand: "Toyota",
    model: "Camry",
    getDetails: function () {
        return this.brand + " " + this.model;
    }
};
console.log(car.getDetails()); // Toyota Camry
```

---

## **🔟 Advanced Object Methods**
- **`Object.getOwnPropertyNames(obj)`** → Returns all property names  
- **`Object.getPrototypeOf(obj)`** → Returns the prototype of an object  
- **`Object.defineProperty(obj, key, descriptor)`** → Defines a new property with custom behavior  
  ```javascript
  let person = {};
  Object.defineProperty(person, "name", { value: "John", writable: false });
  console.log(person.name); // John
  person.name = "Doe"; // Will NOT change, since writable is false
  ```

---

### **🔹 Summary**
| **Concept**             | **Methods/Techniques** |
|-------------------------|-----------------------|
| **Creating Objects** | Object literals, `new Object()`, Constructor, Class |
| **Accessing Properties** | Dot & Bracket notation |
| **Adding/Updating** | `object.property = value`, `object["property"] = value` |
| **Deleting Properties** | `delete object.property` |
| **Checking Properties** | `"key" in obj`, `obj.hasOwnProperty("key")` |
| **Iterating Objects** | `for...in`, `Object.keys()`, `Object.entries()` |
| **Copying/Merging** | `Object.assign()`, Spread (`...`) |
| **Freezing/Sealing** | `Object.freeze()`, `Object.seal()` |
| **Prototype & Inheritance** | `Object.create()`, `Object.getPrototypeOf()` |
| **JSON & Objects** | `JSON.stringify()`, `JSON.parse()` |
| **Custom Property Definitions** | `Object.defineProperty()` |

---

