### 1. What is a Function in JavaScript?

A function in JavaScript is a reusable block of code designed to perform a specific task or calculate a value. It groups statements together so you can call them multiple times, making your code modular and organized.

**Syntax (function keyword, parameters, return value):**

```javascript
// Function Declaration syntax
function greet(name) { // 'name' is a parameter
  const greetingMessage = `Hello, ${name}!`; // Local variable
  return greetingMessage; // Returns a value
}

// Function call (invocation)
const message = greet("Alice"); // "Alice" is an argument
console.log(message); // Output: Hello, Alice!
```

* **`function` keyword:** Declares that a block of code is a function.
* **`greet`:** The name of the function.
* **`(name)`:** A comma-separated list of parameters the function expects. These are placeholders for values that will be passed when the function is called.
* **`{ ... }`:** The function body, containing the statements to be executed.
* **`return` statement:** Specifies the value that the function will send back to the calling code. If no `return` statement is explicitly used, the function implicitly returns `undefined`.

**First-class citizen behavior:**

In JavaScript, functions are "first-class citizens" (also known as "first-class objects"). This means they are treated like any other value (e.g., numbers, strings, objects). You can:

* **Stored in variables:**
    ```javascript
    const sayHi = function(person) { // Function Expression assigned to a variable
      console.log(`Hi, ${person}!`);
    };
    sayHi("Bob"); // Output: Hi, Bob!
    ```

* **Passed as arguments to other functions (callbacks):**
    ```javascript
    function executeAction(actionFn, data) {
      actionFn(data);
    }
    executeAction(sayHi, "Charlie"); // Output: Hi, Charlie!
    ```

* **Returned as values from other functions (higher-order functions, closures):**
    ```javascript
    function createMultiplier(factor) {
      return function(number) { // Returns a new function
        return number * factor;
      };
    }
    const multiplyBy5 = createMultiplier(5);
    console.log(multiplyBy5(10)); // Output: 50
    ```

---

### 2. Function Declaration vs Expression

The primary distinction lies in their syntax and, more importantly, their **hoisting behavior**.

#### Syntax differences

* **Function Declaration:**
    ```javascript
    function calculateSum(a, b) {
      return a + b;
    }
    ```
    * Defined with the `function` keyword followed by a name.
    * Exists as a standalone statement.

* **Function Expression:**
    ```javascript
    const calculateProduct = function(a, b) { // Anonymous function expression
      return a * b;
    };

    const calculateDifference = function subtract(a, b) { // Named function expression
      return a - b;
    };
    ```
    * Defined as part of an expression (e.g., assignment to a variable).
    * Can be anonymous (no name) or named. The name in a Named Function Expression is primarily for debugging (appears in stack traces) and internal recursion; it's not accessible outside the function's own scope.

#### ✅ Hoisting behavior comparison

Hoisting is JavaScript's behavior of moving declarations to the top of their containing scope during the compilation phase, *before* code execution.

* **Function Declaration Hoisting:**
    * The entire function declaration (both its name and its body) is hoisted to the top of its enclosing scope.
    * This means you can call a function declaration *before* it appears in the code.

    ```javascript
    console.log(add(2, 3)); // Output: 5 (Works due to hoisting)

    function add(x, y) {
      return x + y;
    }
    ```

* **Function Expression Hoisting:**
    * Only the *variable declaration* (e.g., `const multiply`) is hoisted, not its assignment to the function definition.
    * The function itself is only defined when the line of code where the expression is assigned is executed.
    * Attempting to call a function expression before its assignment will result in a `ReferenceError` (if `const`/`let`) or `TypeError` (if `var` and the variable is `undefined`).

    ```javascript
    // console.log(subtract(5, 2)); // ReferenceError: Cannot access 'subtract' before initialization (if const/let)
    // console.log(multiply(5, 2)); // TypeError: multiply is not a function (if var, as multiply is undefined)

    const subtract = function(x, y) {
      return x - y;
    };
    console.log(subtract(5, 2)); // Output: 3

    var multiply = function(x, y) {
        return x * y;
    };
    console.log(multiply(5, 2)); // Output: 10
    ```

#### ✅ Use cases

* **Function Declaration:**
    * **General-purpose, reusable functions:** When you want to define a function that will be called multiple times throughout your code, regardless of its position.
    * **Defining utility functions:** Common helper functions that are part of your application's core logic.
    * **Readability:** Can improve code flow by putting helper functions at the bottom and main logic at the top, leveraging hoisting.

* **Function Expression:**
    * **Callbacks:** Often used when a function needs to be passed as an argument to another function (e.g., event handlers, `setTimeout`, array methods like `map`).
    * **Closures:** Commonly used to create functions that encapsulate private state.
    * **Immediately Invoked Function Expressions (IIFEs):** For creating isolated scopes.
    * **Conditional function definition:** When a function needs to be defined based on a condition.
    * **Self-referencing recursion (Named Function Expression):** The name allows the function to refer to itself within its own body without pollution the outer scope.

#### ✅ Table comparing features

| Feature         | Function Declaration                 | Function Expression                   |
| :-------------- | :----------------------------------- | :------------------------------------ |
| **Syntax** | `function name() {}`                 | `const name = function() {};`         |
| **Hoisting** | Entire function hoisted              | Only variable name hoisted            |
| **Scope** | Available throughout its scope       | Available after assignment line       |
| **Name** | Required                             | Optional (can be anonymous)           |
| **Recursion** | Uses its own name directly           | Can use its own name (if named) or variable name |
| **Debugging** | Name appears in call stack           | Anonymous functions may show as `anonymous` (less helpful); named expressions show their name |
| **When to Use** | General, standalone utility functions| Callbacks, closures, IIFEs, conditional definition |

---

### 3. Types of Functions in JavaScript

This section expands on various functional constructs in JavaScript, highlighting their characteristics.

| Function Type        | Hoisted     | `this` Binding | Use Case                                | Code Example                                         |
| :------------------- | :---------- | :------------- | :-------------------------------------- | :--------------------------------------------------- |
| **Function Declaration** | ✅ Yes      | Dynamic        | General reusable logic                  | `function hello() {}`                                |
| **Function Expression** | ❌ No       | Dynamic        | When function is passed around          | `const greet = function() {};`                       |
| **Named Function Expression** | ❌ No       | Dynamic        | Recursion, debugging, self-reference    | `const calc = function factorial() {};`              |
| **Anonymous Function** | ❌ No       | Dynamic        | Passed as arguments, one-off tasks      | `setTimeout(function() {}, 100);`                    |
| **Arrow Function** | ❌ No       | Lexical        | Short syntax, `this` preservation, callbacks | `() => {}`, `param => {}`                            |
| **Callback Function** | ✅/❌ (depends on declaration/expression) | Dynamic/Lexical (depends on function type) | Event handling, async operations, array methods | `array.map(item => item * 2);`                       |
| **IIFE (Immediately Invoked)** | ✅ Run Once | Dynamic        | Encapsulation, private scope, module pattern | `(function() {})();`                                |
| **Constructor Function** | ✅ Yes      | `new` context  | Object instantiation (before classes)   | `function Person(name) {this.name = name;}`        |
| **Generator Function** | ✅ Yes      | Dynamic        | Pause-resume logic, lazy eval, iterators | `function* idGenerator() { yield 1; }`              |
| **Async Function** | ✅ Yes      | Dynamic        | Asynchronous workflows, `await`         | `async function fetchData() { await fetch(...); }`   |
| **Recursive Function** | ✅ Yes      | Dynamic        | Self-calling algorithms, factorial, search | `function factorial(n) { if (n===0) return 1; return n * factorial(n-1); }` |
| **Higher-Order Function** | ✅ Yes      | Dynamic        | Functions that return/accept other functions | `function map(arr, fn) {}`                           |
| **Factory Function** | ✅ Yes      | Dynamic        | Return objects, custom behavior         | `function createCar(make) { return { make: make }; }` |
| **Method (in Object)** | ✅ Yes      | Object `this`  | Encapsulated behavior within an object  | `const obj = { start: function() {} };` or `obj = { start() {} };` |

---

### 4. Arrow Function Deep Dive

Arrow functions (`=>`) were introduced in ES6 (ECMAScript 2015) as a more concise way to write function expressions. They have distinct features, especially regarding `this` binding.

#### Syntax

* **No parameters:** `() => { /* code */ }`
* **One parameter:** `param => { /* code */ }` (parentheses optional)
* **Multiple parameters:** `(param1, param2) => { /* code */ }`
* **Single expression body (implicit return):** `param => param * 2` (no `return` keyword needed)
* **Block body (explicit return):** `(param) => { return param * 2; }`

```javascript
// Examples:
const add = (a, b) => a + b; // Implicit return
console.log(add(5, 3)); // Output: 8

const greetUser = name => { // Single parameter, explicit return block
  const message = `Hello, ${name}!`;
  return message;
};
console.log(greetUser("David")); // Output: Hello, David!

const logMessage = () => console.log("No parameters."); // No parameters
logMessage(); // Output: No parameters.
```

#### Lexical `this` explained (with vs without arrow)

This is the most significant difference. Arrow functions **do not bind their own `this` value**. Instead, they capture (`this` is lexically bound) the `this` value from their **enclosing lexical context** (the `this` value of the scope in which they are defined).

* **Traditional Function (`function` keyword):**
    * The value of `this` is determined by *how* the function is called.
    * It can be dynamically changed (e.g., by explicit binding with `call`, `apply`, `bind`, or by object method invocation).
    * In a simple function call, `this` typically refers to the global object (`window` in browsers, `undefined` in strict mode).

    ```javascript
    const traditionalObj = {
      value: 42,
      getValue: function() {
        console.log("Traditional function 'this.value':", this.value); // 'this' refers to traditionalObj
        setTimeout(function() {
          console.log("Traditional setTimeout callback 'this.value':", this.value); // 'this' refers to global object (window/undefined)
        }, 100);
      }
    };
    traditionalObj.getValue();
    // Output:
    // Traditional function 'this.value': 42
    // (after 100ms) Traditional setTimeout callback 'this.value': undefined (or window object properties)
    ```

* **Arrow Function:**
    * The value of `this` is inherited from its parent scope at the time of its *definition*. It cannot be re-bound.

    ```javascript
    const arrowObj = {
      value: 42,
      getValue: function() { // Traditional function to define 'this' context for arrow
        console.log("Traditional outer function 'this.value':", this.value); // 'this' refers to arrowObj
        setTimeout(() => { // Arrow function
          console.log("Arrow setTimeout callback 'this.value':", this.value); // 'this' lexically bound to arrowObj's 'this'
        }, 100);
      }
    };
    arrowObj.getValue();
    // Output:
    // Traditional outer function 'this.value': 42
    // (after 100ms) Arrow setTimeout callback 'this.value': 42
    ```

    In the arrow function example, the arrow function inside `setTimeout` does not create its own `this` context. Instead, it "looks up" to its enclosing `getValue` function's `this`, which is `arrowObj`.

#### No binding to `arguments` or `super`

Arrow functions do not have their own `arguments` object. If you need to access arguments, you must use rest parameters (`...args`). They also don't have their own `super` binding.

```javascript
const myArrowFn = (...args) => { // Use rest parameters
  console.log("Arguments in arrow function:", args);
};
myArrowFn(1, 2, 3); // Output: Arguments in arrow function: [1, 2, 3]

// In a traditional function, `arguments` keyword would work
function myTraditionalFn() {
  console.log("Arguments in traditional function:", arguments);
}
myTraditionalFn(4, 5, 6); // Output: Arguments in traditional function: [Arguments { '0': 4, '1': 5, '2': 6 }]
```

#### Use cases: React, callbacks, functional JS

* **Concise Callbacks:** Ideal for array methods (`map`, `filter`, `forEach`), `setTimeout`, `addEventListener` callbacks where `this` binding can be problematic with traditional functions.
* **React Components (Class Components):** Used for component methods where `this` needs to refer to the component instance without explicit `bind()`. (Though functional components with hooks are now preferred, this was a common pattern).
* **Functional Programming:** Their conciseness and lexical `this` make them well-suited for pure functions and higher-order functions.

#### ✅ When NOT to use: constructor, method definition

* **Constructor Functions:** Arrow functions cannot be used as constructors. They do not have a `prototype` property and cannot be invoked with `new`.
    ```javascript
    // const MyArrowConstructor = () => {};
    // const instance = new MyArrowConstructor(); // TypeError: MyArrowConstructor is not a constructor
    ```
* **Object Methods (when `this` should refer to the object itself):** If you define a method using an arrow function directly on an object literal, `this` will refer to the global object (`window` or `undefined` in strict mode), not the object itself.

    ```javascript
    const badObject = {
      name: "Bad Obj",
      greet: () => {
        console.log(`Hello, ${this.name}`); // 'this' refers to global object, so 'this.name' is undefined
      }
    };
    badObject.greet(); // Output: Hello, undefined
    ```
    **Correct way to define object method:**
    ```javascript
    const goodObject = {
      name: "Good Obj",
      greet: function() { // Traditional function syntax
        console.log(`Hello, ${this.name}`); // 'this' refers to goodObject
      },
      // Shorthand method syntax (ES6) - also binds 'this' correctly
      anotherGreet() {
        console.log(`Another hello from ${this.name}`);
      }
    };
    goodObject.greet();       // Output: Hello, Good Obj
    goodObject.anotherGreet();// Output: Another hello from Good Obj
    ```

---

### 5. Callback Functions

A callback function is a function passed as an argument to another function, which is then executed inside the outer function at a later point. This allows for asynchronous operations and flexible program control.

#### How and where callbacks are used

Callbacks are fundamental to JavaScript's asynchronous nature and functional programming paradigms.

* **Event Handling:** Responding to user interactions (clicks, key presses, form submissions).
* **Asynchronous Operations:** Network requests, timers (`setTimeout`, `setInterval`), file I/O.
* **Array Iteration Methods:** `map`, `filter`, `forEach`, `reduce`, `sort`.
* **Higher-Order Functions:** Any function that takes a function as an argument.

#### Example: `addEventListener`, `setTimeout`, `map`, `filter`

* **`addEventListener` (Asynchronous):**
    ```javascript
    const myButton = document.createElement('button');
    myButton.textContent = 'Click Me';
    document.body.appendChild(myButton);

    myButton.addEventListener('click', function() { // This anonymous function is a callback
      console.log('Button clicked!');
    });
    ```
    * **Behavior:** The `click` event doesn't happen immediately. The callback is registered and only executed when the event occurs.

* **`setTimeout` (Asynchronous):**
    ```javascript
    setTimeout(function() { // This anonymous function is a callback
      console.log('Delayed message after 1 second.');
    }, 1000);
    ```
    * **Behavior:** The callback is scheduled and placed in the Callback Queue after the delay, then executed when the Call Stack is clear.

* **`map` (Synchronous):**
    ```javascript
    const numbers = [1, 2, 3];
    const doubledNumbers = numbers.map(function(num) { // This function is a callback
      return num * 2;
    });
    console.log(doubledNumbers); // Output: [2, 4, 6]
    ```
    * **Behavior:** `map` iterates over the array and executes the callback for each element immediately (synchronously).

* **`filter` (Synchronous):**
    ```javascript
    const ages = [20, 15, 30, 8];
    const adults = ages.filter(function(age) { // This function is a callback
      return age >= 18;
    });
    console.log(adults); // Output: [20, 30]
    ```
    * **Behavior:** `filter` iterates and executes the callback synchronously to decide which elements to keep.

#### Debugging common "callback hell"

"Callback hell" (or "pyramid of doom") occurs when multiple nested asynchronous callbacks make code hard to read and manage.

```javascript
// Example of Callback Hell
function fetchData(id, callback) {
  setTimeout(() => {
    console.log(`Fetching data for ID: ${id}`);
    const data = { id: id, value: `Data-${id}` };
    callback(data);
  }, 500);
}

fetchData(1, function(result1) {
  console.log('Got result 1:', result1);
  fetchData(2, function(result2) {
    console.log('Got result 2:', result2);
    fetchData(3, function(result3) {
      console.log('Got result 3:', result3);
      // More nested calls...
    });
  });
});
```
* **Debugging Challenge:** Hard to follow control flow, error handling becomes complex (each level needs its own `try/catch` or error callback).

**Solution:** Promises and `async/await` (covered in Section 9) were introduced to address callback hell by providing a more linear and readable way to handle asynchronous operations.

---

### 6. IIFE (Immediately Invoked Function Expression)

An IIFE (pronounced "iffy") is a JavaScript function that runs as soon as it is defined. It's a design pattern that creates an isolated scope, preventing variable declarations within the IIFE from polluting the global scope.

#### Syntax: `(() => {})()`

```javascript
// Traditional Function IIFE
(function() {
  var privateVar = "I am private";
  console.log(privateVar); // Output: I am private
})(); // Immediately invoked

// console.log(privateVar); // ReferenceError: privateVar is not defined (It's private!)

// Arrow Function IIFE
(() => {
  let anotherPrivateVar = "I am also private";
  console.log(anotherPrivateVar); // Output: I am also private
})();

// console.log(anotherPrivateVar); // ReferenceError: anotherPrivateVar is not defined
```

* **Parentheses around the function:** `(function() { ... })` or `(() => { ... })`. This makes the function a function *expression*, which is callable.
* **Trailing parentheses:** `()` immediately after the function definition. This invokes the function.

#### Used for data privacy, module pattern

The primary use case for IIFEs is to create a private scope, thereby achieving data encapsulation and avoiding global namespace pollution. This was foundational to the **Module Pattern** before native ES Modules.

#### Example: wrap in IIFE to create local scope

```javascript
// Problem: Global pollution
// var counter = 0; // This pollutes the global scope
// function increment() {
//   counter++;
//   console.log(counter);
// }

// Solution: IIFE for private scope (Module Pattern basic)
const appCounter = (function() {
  let count = 0; // 'count' is private to this IIFE's scope

  function increment() {
    count++;
    console.log(`App Counter: ${count}`);
  }

  function decrement() {
    count--;
    console.log(`App Counter: ${count}`);
  }

  return { // Expose only necessary public API
    increment: increment,
    decrement: decrement,
    getCurrentCount: function() { // This is a closure over 'count'
      return count;
    }
  };
})(); // The IIFE runs immediately and returns the public API

appCounter.increment();      // Output: App Counter: 1
appCounter.increment();      // Output: App Counter: 2
appCounter.decrement();      // Output: App Counter: 1
console.log(appCounter.getCurrentCount()); // Output: 1

// console.log(count); // ReferenceError: count is not defined
// console.log(appCounter.count); // Undefined, 'count' is not a property of the returned object
```
* **Explanation:** The `count` variable is "closed over" by the `increment`, `decrement`, and `getCurrentCount` functions. Since `count` is declared inside the IIFE, it's not accessible from the global scope, effectively making it a private variable.

---

### 7. Higher-Order Functions

A Higher-Order Function (HOF) is a function that either:
1.  Takes one or more functions as arguments (callbacks).
2.  Returns a function as its result.

HOFs are a cornerstone of functional programming in JavaScript, enabling powerful abstractions and code reusability.

#### Example: `map`, `filter`, `reduce`

These built-in array methods are classic HOFs because they accept a callback function.

* **`map`:** Transforms each element of an array using a callback.
    ```javascript
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map(num => num * num); // 'num => num * num' is the callback
    console.log(squaredNumbers); // Output: [1, 4, 9]
    ```

* **`filter`:** Creates a new array with elements that pass a test implemented by the provided callback function.
    ```javascript
    const users = [{isActive: true}, {isActive: false}, {isActive: true}];
    const activeUsers = users.filter(user => user.isActive); // 'user => user.isActive' is the callback
    console.log(activeUsers); // Output: [{isActive: true}, {isActive: true}]
    ```

* **`reduce`:** Executes a reducer callback function on each element of the array, resulting in a single output value.
    ```javascript
    const prices = [10, 20, 30];
    const total = prices.reduce((acc, current) => acc + current, 0); // '(acc, current) => acc + current' is the callback
    console.log(total); // Output: 60
    ```

#### Build a custom higher-order logger or validator

* **Custom Higher-Order Logger (takes a function as argument):**
    ```javascript
    function withLogging(originalFunction) {
      return function(...args) {
        console.log(`Calling ${originalFunction.name || 'anonymous function'} with args:`, args);
        const result = originalFunction(...args);
        console.log(`Finished ${originalFunction.name || 'anonymous function'}. Result:`, result);
        return result;
      };
    }

    function sum(a, b) {
      return a + b;
    }

    const loggedSum = withLogging(sum);
    console.log(loggedSum(7, 8)); // Output: logs before and after sum
    // Output:
    // Calling sum with args: [ 7, 8 ]
    // Finished sum. Result: 15
    // 15
    ```

* **Custom Higher-Order Validator (returns a function):**
    ```javascript
    function createLengthValidator(minLength, maxLength) {
      return function(input) { // This is the validator function
        const isValid = input.length >= minLength && input.length <= maxLength;
        if (!isValid) {
          console.error(`Validation Error: Input length must be between ${minLength} and ${maxLength}.`);
        }
        return isValid;
      };
    }

    const validateUsernameLength = createLengthValidator(5, 15);
    console.log(validateUsernameLength("user123")); // Output: true
    console.log(validateUsernameLength("hi"));      // Output: false (and error message)
    ```

---

### 8. Generator Functions

Generator functions are a special type of function that can be paused and resumed. They allow you to write iterative algorithms in a synchronous-looking style while producing a sequence of values asynchronously.

#### Syntax: `function*`

* Defined using `function*` syntax.
* Contain one or more `yield` expressions.

#### Use of `yield` keyword

* The `yield` keyword pauses the execution of the generator function and returns the value specified.
* When the generator's `next()` method is called, the generator's execution resumes from where it was last paused, until it hits the next `yield` or `return`.

#### Pause/resume control flow

Generator functions return an **iterator** object. When you call `next()` on this iterator, the generator runs until it encounters a `yield` expression. The value from `yield` is returned in an object `{ value: ..., done: false }`. When the generator finishes (either by `return` or no more `yield`s), `next()` returns `{ value: undefined, done: true }` (or `{ value: returnValue, done: true }` if there's an explicit return).

#### Use case: infinite data stream

Generators are excellent for creating iterators, especially for potentially infinite sequences or lazy evaluation, where you only compute values as they are needed.

```javascript
function* idGenerator() {
  let id = 1;
  while (true) { // Infinite loop
    yield id++; // Pauses here, returns current 'id', then increments for next call
  }
}

const generator = idGenerator(); // Returns the iterator object

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

// Example: Iterating over a limited number
for (let i = 0; i < 5; i++) {
  console.log(`Generated ID: ${generator.next().value}`);
}
// Output:
// Generated ID: 4
// Generated ID: 5
// Generated ID: 6
// Generated ID: 7
// Generated ID: 8
```

---

### 9. Async Functions

Async functions provide a cleaner, more synchronous-looking syntax for working with Promises, simplifying asynchronous code.

#### Introduced with ES2017

`async` and `await` keywords were officially introduced in ECMAScript 2017.

#### Use `async/await`

* **`async` keyword:** Used to define an asynchronous function. An `async` function always returns a Promise.
* **`await` keyword:** Can only be used inside an `async` function. It pauses the execution of the `async` function until a Promise settles (either resolves or rejects). When the Promise resolves, `await` returns its resolved value. If it rejects, `await` throws an error, which can be caught by a `try...catch` block.

#### Returns a Promise

An `async` function, whether it explicitly returns a Promise or not, will always wrap its return value in a Promise that resolves with that value. If it throws an error, it will return a rejected Promise.

```javascript
async function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved!');
    }, 2000);
  });
}

async function demonstrateAsync() {
  console.log("Start async function.");
  const result = await resolveAfter2Seconds(); // Pauses here for 2 seconds
  console.log(result); // Output: Resolved!
  console.log("End async function.");
}

// demonstrateAsync();
// Output:
// Start async function.
// (2 seconds later)
// Resolved!
// End async function.
```

#### Real-world example: fetching data using `fetch`

```javascript
async function fetchUserData(userId) {
  try {
    console.log(`Fetching user data for ID: ${userId}...`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); // await Promise from fetch
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userData = await response.json(); // await Promise from .json()
    console.log("User data fetched:", userData.name);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error; // Re-throw to propagate the error
  }
}

// Example usage:
// fetchUserData(1)
//   .then(user => console.log('Successfully retrieved user:', user.email))
//   .catch(err => console.error('Caught error:', err.message));

// console.log("Request initiated."); // This runs immediately
```
* **Behavior:** The `async` function allows `fetch` and `response.json()` calls to appear synchronous, but they are internally managed as Promises. The `await` keyword ensures that subsequent lines of code within the `async` function only execute once the awaited Promise resolves.

---

### 10. Closures Inside Functions

As discussed in the previous deep dive on Closures, a function forms a closure when it "remembers" and can access its **lexical environment** (the scope in which it was defined), even if the outer function has already finished executing.

#### Function returning a function

This is the most common pattern for demonstrating closures.

```javascript
function createGreeter(salutation) { // Outer function
  return function(name) {         // Inner function (forms a closure)
    console.log(`${salutation}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello"); // 'sayHello' is a closure over 'salutation' = "Hello"
const sayHi = createGreeter("Hi");       // 'sayHi' is a closure over 'salutation' = "Hi"

sayHello("Alice"); // Output: Hello, Alice!
sayHi("Bob");      // Output: Hi, Bob!
```
* **Explanation:** `sayHello` and `sayHi` are distinct functions. Each carries its own reference to the `salutation` variable from the specific call to `createGreeter` that created it. This `salutation` variable remains in memory even after `createGreeter` has returned.

#### Accessing outer scope

The inner function's `[[Environment]]` internal property points to the `Environment Record` of its parent lexical environment. This link is how it retains access.

```javascript
function setupCounter() {
  let count = 0; // 'count' lives in setupCounter's lexical environment

  // The returned function is a closure over 'count'
  return function() {
    count++; // Accesses and modifies 'count' from outer scope
    console.log(count);
  };
}

const myCounter = setupCounter();
myCounter(); // Output: 1
myCounter(); // Output: 2
```

#### Used in currying, encapsulation, memoization

* **Currying:** Functions that transform a multi-argument function into a sequence of functions, each taking a single argument, by using closures to remember previous arguments.
* **Encapsulation (Module Pattern):** IIFEs and factory functions leverage closures to create private variables and expose only a public API.
* **Memoization:** Caching function results using a private `cache` object closed over by the memoized function.

---

### 11. Function Properties & Methods

Functions in JavaScript are objects, so they have properties and methods.

#### `.length`, `.name`, `.constructor`

* **`.length`:** Returns the number of parameters the function expects.
    ```javascript
    function myFunction(a, b, c) {}
    console.log(myFunction.length); // Output: 3

    const arrowFn = (x, y) => x + y;
    console.log(arrowFn.length);    // Output: 2

    const noParamFn = () => {};
    console.log(noParamFn.length);  // Output: 0
    ```
* **`.name`:** Returns the name of the function. For anonymous function expressions, it might infer a name from the variable it's assigned to (in modern JS engines).
    ```javascript
    function namedFunc() {}
    console.log(namedFunc.name); // Output: namedFunc

    const anonFunc = function() {};
    console.log(anonFunc.name);  // Output: anonFunc (inferred from variable name)

    const namedExpr = function myNamedExpression() {};
    console.log(namedExpr.name); // Output: myNamedExpression (name from expression itself)

    const arrowFunc = () => {};
    console.log(arrowFunc.name); // Output: arrowFunc
    ```
* **`.constructor`:** Refers to the `Function` constructor that created the function.
    ```javascript
    function testFn() {}
    console.log(testFn.constructor === Function); // Output: true
    ```

#### `.call()`, `.apply()`, `.bind()` — with examples

These three methods are used to explicitly control the `this` binding and pass arguments when invoking a function.

* **`.call(thisArg, arg1, arg2, ...)`:**
    * Invokes the function immediately.
    * Sets `this` to `thisArg`.
    * Accepts arguments one by one.

    ```javascript
    const person = { name: "Alice" };
    function introduce(age, city) {
      console.log(`Hello, my name is ${this.name}. I am ${age} from ${city}.`);
    }

    introduce.call(person, 30, "New York"); // Output: Hello, my name is Alice. I am 30 from New York.
    ```

* **`.apply(thisArg, [argsArray])`:**
    * Invokes the function immediately.
    * Sets `this` to `thisArg`.
    * Accepts arguments as an array or an array-like object.

    ```javascript
    const numbers = [5, 10, 15];
    const max = Math.max.apply(null, numbers); // 'null' for 'this' as Math.max doesn't use it
    console.log(max); // Output: 15 (finds max in array)

    introduce.apply(person, [25, "London"]); // Output: Hello, my name is Alice. I am 25 from London.
    ```

* **`.bind(thisArg, arg1, arg2, ...)`:**
    * **Does NOT invoke the function immediately.**
    * Returns a *new function* (a bound function) where `this` is permanently bound to `thisArg`, and any provided arguments are partially applied.
    * The returned function can be invoked later.

    ```javascript
    const boundIntroduce = introduce.bind(person, 40); // 'this' is person, 'age' is 40
    boundIntroduce("Paris"); // Output: Hello, my name is Alice. I am 40 from Paris. (Only need to pass 'city')

    const greetBob = introduce.bind({ name: "Bob" }, 22, "Berlin");
    greetBob(); // Output: Hello, my name is Bob. I am 22 from Berlin.
    ```

#### Use case comparison of `call` vs `apply` vs `bind`

* **`call`:** Best when you know the arguments individually and want to execute immediately. Often used for method borrowing or invoking a function with a specific `this` for a single time.
* **`apply`:** Best when you have arguments already in an array (or array-like object) and want to execute immediately. Useful for situations where the number of arguments is dynamic.
* **`bind`:** Best when you want to create a *new function* that has a permanently fixed `this` context (and potentially partially applied arguments), to be executed at a later time. Commonly used for event handlers, callbacks, or when passing methods around while preserving their original `this`.

---

### 12. Common Interview Questions

#### Question 1: Output Prediction (Hoisting)

```javascript
console.log(foo);
var foo = 10;
console.log(foo);
function bar() {
  console.log(baz);
  var baz = 20;
  console.log(baz);
}
bar();
console.log(qux);
let qux = 30; // Attempting to use let after this line
```

* **Prediction & Explanation:**
    1.  `console.log(foo);`
        * `foo` is declared with `var`, so `var foo` is hoisted. At this point, `foo` exists but is `undefined`.
        * **Output: `undefined`**
    2.  `var foo = 10;`
        * `foo` is assigned `10`.
    3.  `console.log(foo);`
        * `foo` is now `10`.
        * **Output: `10`**
    4.  `bar();` (Function call starts)
        * New Execution Context for `bar` is created.
        * `var baz` is hoisted within `bar`'s scope.
    5.  `console.log(baz);`
        * `baz` is declared with `var`, so `var baz` is hoisted to the top of `bar`'s scope. At this point, `baz` exists but is `undefined`.
        * **Output: `undefined`**
    6.  `var baz = 20;`
        * `baz` is assigned `20`.
    7.  `console.log(baz);`
        * `baz` is now `20`.
        * **Output: `20`**
    8.  `bar()` finishes, its Execution Context is popped.
    9.  `console.log(qux);`
        * `qux` is declared with `let`. `let` variables are block-scoped and are in a Temporal Dead Zone (TDZ) until their declaration line is executed. Attempting to access it before its declaration.
        * **Output: `ReferenceError: Cannot access 'qux' before initialization`** (Code execution stops here)

#### Question 2: Fixing Bugs in Callbacks (Loop Trap)

Make the `click` handlers log the correct button index (0, 1, 2) when clicked.

```html
<button class="my-btn">Button 0</button>
<button class="my-btn">Button 1</button>
<button class="my-btn">Button 2</button>
```javascript
// Buggy Code
const buttons = document.querySelectorAll('.my-btn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log(`Button ${i} clicked!`);
  });
}
// Problem: All buttons will log "Button 3 clicked!"
```

* **Fixing Bug + Explanation:**
    ```javascript
    // Fixed Code using 'let'
    const buttons = document.querySelectorAll('.my-btn');
    for (let i = 0; i < buttons.length; i++) { // Changed 'var' to 'let'
      buttons[i].addEventListener('click', function() {
        console.log(`Button ${i} clicked!`); // 'i' is captured correctly for each iteration
      });
    }
    // Explanation: 'let' creates a new block-scoped 'i' for each iteration of the loop.
    // Each event listener's callback then forms a closure over its unique 'i' from that
    // specific iteration's scope, ensuring the correct index is logged.
    ```
    * **Alternative Fix using IIFE (for older environments):**
        ```javascript
        const buttons = document.querySelectorAll('.my-btn');
        for (var i = 0; i < buttons.length; i++) {
          (function(index) { // IIFE immediately invoked, capturing current 'i' as 'index'
            buttons[i].addEventListener('click', function() {
              console.log(`Button ${index} clicked!`); // Closure over 'index'
            });
          })(i); // Pass the current value of 'i' to the IIFE
        }
        ```

#### Question 3: `this` Binding with Arrow Functions

What will be logged by `obj.greet()` and `obj.sayLater()`?

```javascript
const obj = {
  name: "Interviewer",
  greet: function() {
    console.log(`Hello from ${this.name}`);
  },
  sayLater: function() {
    setTimeout(() => { // Arrow function
      console.log(`Later from ${this.name}`);
    }, 100);
  }
};

obj.greet();
obj.sayLater();

const unboundSayLater = obj.sayLater;
unboundSayLater(); // What happens here?
```

* **Prediction & Explanation:**
    1.  `obj.greet();`
        * `greet` is a regular function method. `this` inside it refers to the object it's called on, which is `obj`.
        * **Output: `Hello from Interviewer`**
    2.  `obj.sayLater();`
        * `sayLater` is a regular function method. `this` inside it refers to `obj`.
        * The `setTimeout` callback is an arrow function. Arrow functions lexically bind `this`. It captures `this` from its enclosing scope, which is the `sayLater` function's `this` (pointing to `obj`).
        * **Output (after 100ms): `Later from Interviewer`**
    3.  `unboundSayLater();`
        * `unboundSayLater` is `obj.sayLater` but invoked as a standalone function. In a regular function call (not as a method), `this` defaults to the global object (`window` in browsers, `undefined` in strict mode).
        * So, when `unboundSayLater()` is called, `this` inside `sayLater` is the global object/`undefined`.
        * The `setTimeout`'s arrow function will lexically capture *that* `this` (the global object/`undefined`).
        * **Output (after 100ms): `Later from undefined`** (or `Later from [window properties]` in non-strict browser)

#### Question 4: Currying with Closure

Write a `sumAll` function that allows for currying like `sumAll(a)(b)(c)` or `sumAll(a,b)(c)` etc., adding any number of arguments until invoked without arguments.

```javascript
function sumAll(...args) {
  let currentSum = args.reduce((a, b) => a + b, 0);

  function adder(...nextArgs) {
    if (nextArgs.length === 0) { // Base case: no arguments, return current sum
      return currentSum;
    }
    currentSum += nextArgs.reduce((a, b) => a + b, 0);
    return adder; // Return the adder function itself for further calls
  }

  return adder; // Initial call returns the adder closure
}

// Test cases:
console.log(sumAll(1)(2)(3)()); // Expect 6
console.log(sumAll(1, 2)(3)()); // Expect 6
console.log(sumAll(1)(2, 3)()); // Expect 6
console.log(sumAll(1, 2, 3)()); // Expect 6
console.log(sumAll(10)());      // Expect 10
console.log(sumAll()());        // Expect 0
```

* **Explanation:**
    The `sumAll` function (and the inner `adder` function) form a closure over the `currentSum` variable.
    * When `sumAll` is first called, it initializes `currentSum` with any arguments passed. It then returns the `adder` function.
    * The `adder` function is a closure that remembers and can modify `currentSum`.
    * Each time `adder` is called with new arguments, it adds them to `currentSum` and then returns itself (`adder`). This allows for chaining calls.
    * The chaining stops when `adder` is called *without* any arguments, at which point it returns the final `currentSum`.

#### Question 5: Recursive Optimization (Tail Call - Conceptual)

Discuss how tail call optimization *could* (but typically doesn't in strict JS engines) benefit recursive functions, and why it's relevant for deep recursion.

```javascript
// Non-tail recursive factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); // Multiplication happens AFTER the recursive call returns
}

// Tail-recursive factorial (conceptual, as JS engines often don't optimize this)
function factorialTailRec(n, accumulator = 1) {
  if (n === 0) {
    return accumulator;
  }
  return factorialTailRec(n - 1, accumulator * n); // The recursive call is the LAST operation
}

// console.log(factorial(10));
// console.log(factorialTailRec(10));
```

* **Explanation:**
    * **Non-tail recursion:** In `factorial(n)`, the operation `n * ...` happens *after* the recursive call `factorial(n-1)` returns. This means the Call Stack needs to keep track of each pending multiplication for every recursive call. For large `n`, this can lead to a **stack overflow**.
    * **Tail recursion:** In `factorialTailRec(n, accumulator)`, the recursive call `factorialTailRec(n - 1, accumulator * n)` is the *very last operation* performed in the function. The result of the recursive call is directly returned.
    * **Tail Call Optimization (TCO):** If a JavaScript engine supported TCO (which many modern engines *don't fully or reliably* implement in a general way, especially for strict mode where it's explicitly disallowed by spec for certain cases), it could optimize tail-recursive calls. Instead of adding a new stack frame for each recursive call, it could reuse the current stack frame. This would prevent stack overflow for very deep recursive calls.
    * **Relevance:** Even if not strictly optimized by the engine, understanding tail recursion promotes a thinking pattern that can be transformed into iterative loops for performance and stack safety in JavaScript. It's a theoretical optimization often discussed in functional programming contexts.

---

### 13. Memory Model & Execution

Understanding where functions and their associated data reside during execution is key to avoiding memory issues.

#### Where functions are stored (heap vs stack)

* **Function Code (Heap):** The actual executable code of a function is typically stored in the **Heap**. The Heap is a large pool of memory used for dynamic memory allocation, including objects, arrays, and function definitions. When a function declaration or expression is parsed, its code body is placed here.
* **Execution Contexts & Call Stack:** When a function is *invoked* (called), a new **Execution Context** is created for that invocation. This execution context is pushed onto the **Call Stack**. The Call Stack is a LIFO (Last-In, First-Out) data structure that tracks the flow of execution. Each execution context contains:
    * Its **Lexical Environment** (which includes its **Environment Record** for local variables, parameters, and inner function declarations).
    * Its `this` binding.
    * A reference to the caller's execution context.

#### Closure memory retention

When an inner function (a closure) is returned from an outer function and is held onto by an external reference (e.g., assigned to a variable), it maintains a reference to the **Lexical Environment** of its outer function (specifically, the `Environment Record` containing the variables it "closed over").

* **Persistence:** Even after the outer function's execution context is popped off the Call Stack, the `Environment Record` containing the closed-over variables is **not** immediately garbage collected. It persists in memory as long as the closure itself is accessible.
* **Selective Retention:** The engine is smart; it typically only retains the variables that are *actually referenced* by the closure, not the entire original execution context.

#### Garbage collection and cleanup of unused functions

* **Garbage Collection (GC):** JavaScript uses automatic garbage collection. The GC algorithm (typically Mark-and-Sweep) identifies objects (including functions and their associated lexical environments) that are no longer "reachable" from the root (e.g., global object, active Call Stack).
* **Cleanup of Unused Functions:**
    * A function whose definition is unreachable (e.g., an IIFE that returns nothing and isn't assigned, or a function defined within another function that's never called and its outer function isn't referenced) will eventually be garbage collected.
    * **Crucially for Closures:** The `Environment Record` (and the variables it contains) that a closure relies upon will only be garbage collected when the closure itself becomes unreachable. If a closure is unintentionally held onto (e.g., by a global variable, an unremoved event listener, or a long-lived object), it can prevent the garbage collection of the variables it captured, potentially leading to **memory leaks**.

---

### 14. Table Summary & Best Practices

| Concept                | Do This ✅                                           | Avoid ❌                                                                     |
| :--------------------- | :--------------------------------------------------- | :--------------------------------------------------------------------------- |
| **Reusability** | Use function declarations for general utilities.     | Don't over-nest functions unnecessarily, leading to deeply nested scopes.      |
| **Clarity** | Name all functions (even expressions) for debugging. | Avoid excessive anonymous function usage where a named function would improve readability or stack traces. |
| **Arrow Functions** | Use for concise callbacks, preserving `this` lexically in event handlers/async. | Don't use as object methods if `this` needs to refer to the object itself. Avoid as constructors. |
| **Hoisting** | Understand `var` vs `let`/`const` hoisting implications. Use `let`/`const` for block-scoped variables. | Don't rely on `var` hoisting for code clarity; it can lead to confusion and bugs (e.g., loop trap). |
| **Closures** | Leverage for data privacy (IIFE, Module Pattern), state management, memoization. | Don't retain references to large objects inside long-lived closures if they're no longer needed, to prevent memory leaks. |
| **Memory** | Explicitly `clearTimeout`/`clearInterval`. `removeEventListener`. Nullify global references. | Don't forget to clean up asynchronous tasks or event listeners.               |
| **Asynchronous Flow** | Use Promises and `async/await` for sequential async operations. | Avoid deeply nested callback chains ("callback hell").                      |
| **`this` Binding** | Be explicit or understand context for `this`. Use `.bind()`, `.call()`, `.apply()` when needed. | Don't assume `this` will always refer to what you expect; it's dynamic unless bound lexically (arrow functions). |

---

### 15. Mini Quiz Section

#### Question 1: Code Prediction

What will the following code output?

```javascript
const myFunction = function() {
  console.log(value);
  var value = "Hello";
  console.log(value);
};

myFunction();
```

**Output:**
```
undefined
Hello
```
**Explanation:** Inside `myFunction`, `var value` is hoisted to the top. So, the first `console.log(value)` sees `value` as declared but uninitialized (`undefined`). Then, `value` is assigned "Hello", and the second `console.log` prints the new value.

#### Question 2: Debugging Errors

Identify the error and fix it.

```javascript
// Buggy Code
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    setInterval(function() {
      // Problem: 'this' here is not the Counter instance
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}

// const c = new Counter();
// c.start();
```

**Error Explanation:** The `setInterval` callback uses a traditional function expression. Inside this callback, `this` will default to the global object (`window` in browsers, `undefined` in strict mode), not the `Counter` instance. Thus, `this.count` will be `undefined` or cause an error.

**Fixed Code:**
```javascript
// Fixed Code
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    setInterval(() => { // FIX: Use an arrow function for the callback
      this.count++; // 'this' lexically binds to the 'Counter' instance's 'this'
      console.log(this.count);
    }, 1000);
  }
}

// const c = new Counter();
// c.start();
```
**Alternative Fix (Binding):**
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    setInterval(function() {
      this.count++;
      console.log(this.count);
    }.bind(this), 1000); // FIX: Explicitly bind 'this'
  }
}
```

#### Question 3: Matching Table: Function Types vs Behavior

Match the function type to its primary characteristic.

| Function Type        | Primary Characteristic (Choose one from right column) |
| :------------------- | :---------------------------------------------------- |
| 1. Arrow Function    | A. Pausable execution with `yield`                      |
| 2. IIFE              | B. Lexically binds `this`                             |
| 3. Generator Function| C. Immediately executes upon definition               |
| 4. Async Function    | D. Designed to instantiate objects                    |
| 5. Constructor Function| E. Works with `await` and always returns a Promise  |

**Answers:**
1.  **Arrow Function** -> B. Lexically binds `this`
2.  **IIFE** -> C. Immediately executes upon definition
3.  **Generator Function** -> A. Pausable execution with `yield`
4.  **Async Function** -> E. Works with `await` and always returns a Promise
5.  **Constructor Function** -> D. Designed to instantiate objects

#### Question 4: Scope Chain Tracing

What will `displayNumbers` log?

```javascript
let num1 = 10;

function outer() {
  let num2 = 20;

  function inner(num3) {
    let num4 = 40;
    console.log(num1 + num2 + num3 + num4);
  }
  return inner;
}

const displayNumbers = outer();
displayNumbers(30);
```

**Output:**
```
100
```
**Explanation:**
* `num1` (10) is found in the Global Scope.
* `num2` (20) is found in `outer`'s lexical environment, captured by `inner` as a closure.
* `num3` (30) is a parameter to `inner`.
* `num4` (40) is a local variable within `inner`'s scope.
* Sum: $10 + 20 + 30 + 40 = 100$.

#### Question 5: MCQ (Function Type Purpose)

Which type of function is best suited for encapsulating private variables and methods into a reusable module, often before ES6 Modules were widely adopted?
A) Arrow Function
B) Generator Function
C) IIFE
D) Constructor Function

**Answer:** C) IIFE
**Explanation:** IIFEs create a private scope that prevents variable leakage into the global namespace, making them ideal for the Module Pattern for encapsulation.
