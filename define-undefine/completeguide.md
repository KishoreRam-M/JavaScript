## 1. What is `undefined`?

`undefined` is a **primitive value** in JavaScript. It is one of the 8 fundamental data types (along with `null`, `boolean`, `number`, `string`, `symbol`, `bigint`, and `object`).

**Definition:**
`undefined` signifies that a variable has been declared but has not yet been assigned a value, or that a property of an object does not exist. It's a placeholder for "no value yet" or "missing value".

**Data Type:**
The data type of `undefined` is `undefined`.

```javascript
console.log(typeof undefined); // Output: "undefined"
```

**How it's assigned:**
`undefined` is typically assigned **implicitly** by JavaScript in several scenarios. However, it can also be explicitly assigned by a developer, though this is generally discouraged as it can mask true "unassigned" states.

**Implicit Assignment Scenarios:**

* **Variable declared but not assigned:**

    ```javascript
    let myVariable;
    console.log(myVariable); // Output: undefined
    ```

* **Function returns no value (or implicitly returns nothing):**

    ```javascript
    function doNothing() {
      // No return statement
    }
    let result = doNothing();
    console.log(result); // Output: undefined

    function returnsUndefined() {
      return; // Explicitly returning nothing also results in undefined
    }
    let anotherResult = returnsUndefined();
    console.log(anotherResult); // Output: undefined
    ```

* **Accessing a non-existent property of an object:**

    ```javascript
    const myObject = { name: "Alice" };
    console.log(myObject.age); // Output: undefined (age property does not exist)
    ```

* **Function parameters that are not provided:**

    ```javascript
    function greet(name, age) {
      console.log(name); // "Bob"
      console.log(age);  // undefined (age was not passed)
    }
    greet("Bob");
    ```

* **`void` operator:** The `void` operator evaluates an expression and returns `undefined`.

    ```javascript
    console.log(void(0)); // Output: undefined
    console.log(void("hello")); // Output: undefined
    ```

**Explicit Assignment (Discouraged):**

```javascript
let someValue = "Hello";
someValue = undefined; // Explicitly setting it to undefined
console.log(someValue); // Output: undefined
```

---

## 2. What is `not defined`?

`not defined` is **not a value or a data type** in JavaScript. Instead, it's an **error message** that you encounter when the JavaScript engine cannot find a variable, function, or other identifier in the current scope or any accessible outer scopes (the scope chain).

Specifically, it signals a **`ReferenceError`**.

**Definition:**
A `ReferenceError` occurs when you try to access a variable or identifier that has not been declared (or is currently in its Temporal Dead Zone for `let`/`const`). It means the engine literally has no "reference" to what you are trying to use.

**When it happens:**

* **Accessing an undeclared variable:** This is the most common scenario.

    ```javascript
    // console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined
    ```

* **Accessing a variable that is out of scope:** Even if a variable was declared, if you try to access it outside its defined lexical scope, you'll get a `ReferenceError`.

    ```javascript
    function myFunction() {
      let scopedVar = 10;
    }
    myFunction();
    // console.log(scopedVar); // ReferenceError: scopedVar is not defined (out of scope)
    ```

* **Accessing `let` or `const` variables in their Temporal Dead Zone (TDZ):** As we'll discuss, these variables exist but cannot be accessed until their declaration line is executed.

    ```javascript
    // console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
    let tdzVar = 5;
    ```

**Key Distinction:**
* `undefined` is a **value**. The variable *exists*, but it has no assigned value.
* `not defined` is an **error**. The variable *does not exist* in the current scope.

---

## 3. Differences between `undefined`, `null`, `NaN`, and `not defined`

These are all distinct concepts in JavaScript. Let's break them down:

* **`undefined`:**
    * **Type:** Primitive value of type `undefined`.
    * **Meaning:** "No value has been assigned yet" or "property does not exist".
    * **When it occurs:** Default value for uninitialized variables, function parameters not passed, functions with no explicit `return`, missing object properties.
    * **`typeof` result:** `"undefined"`

    ```javascript
    let a;
    console.log(a);          // undefined
    console.log(typeof a);   // "undefined"
    ```

* **`null`:**
    * **Type:** Primitive value of type `object` (this is a long-standing bug/quirk in JavaScript, `null` is conceptually a primitive).
    * **Meaning:** "Intentional absence of any object value" or "no value". It's a value that means "nothing."
    * **When it occurs:** Explicitly assigned by a developer to indicate no value or the absence of an object.
    * **`typeof` result:** `"object"`

    ```javascript
    let b = null;
    console.log(b);          // null
    console.log(typeof b);   // "object"
    ```

* **`NaN` (Not-a-Number):**
    * **Type:** Numeric value of type `number`.
    * **Meaning:** Represents a value that is "Not a Number" in a numerical context. It's the result of invalid or unrepresentable mathematical operations.
    * **When it occurs:** `0 / 0`, `parseInt("hello")`, `Math.sqrt(-1)`, etc.
    * **`typeof` result:** `"number"`

    ```javascript
    let c = 0 / 0;
    console.log(c);          // NaN
    console.log(typeof c);   // "number"
    ```

* **`not defined`:**
    * **Type:** Not a value or data type; it's an **error message (`ReferenceError`)**.
    * **Meaning:** "The identifier (variable, function, etc.) does not exist in the current scope chain." The JavaScript engine couldn't find a reference to it.
    * **When it occurs:** Attempting to access an undeclared variable, or a `let`/`const` variable in its Temporal Dead Zone.
    * **`typeof` result:** Would throw a `ReferenceError` if used directly on an `not defined` identifier.

    ```javascript
    // console.log(d); // ReferenceError: d is not defined
    // console.log(typeof d); // ReferenceError: d is not defined
    ```

**Summary Table:**

| Feature            | `undefined`      | `null`             | `NaN`            | `not defined`     |
| :----------------- | :--------------- | :----------------- | :--------------- | :---------------- |
| **Category** | Value            | Value              | Value            | Error             |
| **Data Type** | `undefined`      | `object` (quirk)   | `number`         | N/A               |
| **Meaning** | Uninitialized    | Intentional absence| Invalid number   | Identifier unknown|
| **How it arises** | Implicitly/Explicitly | Explicitly        | Math operations  | Accessing undeclared / TDZ |
| **`typeof` check** | `"undefined"`    | `"object"`         | `"number"`       | Throws `ReferenceError` |

---

## 4. How `undefined` is different when:

Let's look at the specific scenarios where `undefined` appears implicitly.

### 1. Variable is declared but not assigned

When you declare a variable using `var`, `let`, or `const` but don't immediately assign it a value, JavaScript implicitly assigns it the value `undefined`. This is its default "empty" state.

```javascript
let firstName;
console.log(firstName); // Output: undefined

var lastName;
console.log(lastName);  // Output: undefined

// For `const`, it must be initialized at declaration,
// so you cannot declare it without assigning a value first.
// const PI; // SyntaxError: Missing initializer in const declaration
```
**Dry Run:**
* **Creation Phase:** When `let firstName;` is processed, `firstName` is added to the lexical environment's record. It's in the TDZ for `let`/`const` until its line is executed. Once the line is executed, it's initialized to `undefined`.
* **Execution Phase:** `console.log(firstName)` retrieves the value `undefined`.

### 2. Function returns no value

If a function executes without a `return` statement, or if it has a `return;` statement without an explicit value, it implicitly returns `undefined`.

```javascript
function sayHello() {
  console.log("Hello!");
  // No return statement here
}

let greetingResult = sayHello();
console.log(greetingResult); // Output: undefined

function calculateSum(a, b) {
  let sum = a + b;
  // What if I forgot to return sum?
  // return; // Or explicitly return nothing
}

let total = calculateSum(5, 3);
console.log(total); // Output: undefined
```
**Dry Run:**
* When `sayHello()` is called, its execution context is created.
* `console.log("Hello!")` executes.
* The function reaches its end without an explicit `return` value.
* The JavaScript engine implicitly adds `return undefined;` at the end of the function's execution.
* `greetingResult` captures this `undefined` value.

### 3. Accessing non-existing object properties

If you try to access a property on an object that does not exist, JavaScript will return `undefined`. It will **not** throw an error (unless the object itself is `null` or `undefined`).

```javascript
const user = {
  name: "Jane Doe",
  email: "jane@example.com"
};

console.log(user.name);    // Output: Jane Doe
console.log(user.age);     // Output: undefined (age property does not exist)
console.log(user.address); // Output: undefined (address property does not exist)

// Edge case: Accessing a property on null or undefined throws TypeError
let nullObj = null;
// console.log(nullObj.property); // TypeError: Cannot read properties of null (reading 'property')

let undefinedObj;
// console.log(undefinedObj.property); // TypeError: Cannot read properties of undefined (reading 'property')
```
**Dry Run:**
* `user` object is created in memory.
* When `user.age` is accessed:
    * The engine looks up the `age` property on the `user` object.
    * It determines that `age` is not a key in the `user` object.
    * Instead of throwing an error (as it would for `not defined`), it returns the value `undefined` to indicate the absence of that specific property.

---

## 5. Scenarios that throw `ReferenceError: variable is not defined`

A `ReferenceError` occurs when the JavaScript engine tries to resolve an identifier (like a variable name or function name) in the current lexical environment and up the scope chain, but fails to find any binding for it.

Here are the primary scenarios:

1.  **Accessing an undeclared variable:** This is the most direct cause. You're trying to use a name that JavaScript has never seen declared with `var`, `let`, `const`, or as a function declaration.

    ```javascript
    // console.log(city); // ReferenceError: city is not defined
    // myUnknownFunction(); // ReferenceError: myUnknownFunction is not defined

    function greet() {
      // console.log(town); // ReferenceError: town is not defined (even if it was declared globally, the engine doesn't find it until execution)
    }
    ```

2.  **Accessing a variable that is out of its lexical scope:** A variable might be declared, but you're attempting to access it from a scope where it is not visible.

    ```javascript
    function outer() {
      let outerVar = "I'm in outer scope";
      if (true) {
        let blockVar = "I'm in block scope";
      }
      // console.log(blockVar); // ReferenceError: blockVar is not defined (out of its block scope)
    }
    outer();
    // console.log(outerVar); // ReferenceError: outerVar is not defined (out of its function scope)
    ```

3.  **Accessing `let` or `const` variables in their Temporal Dead Zone (TDZ):** While `let` and `const` declarations are hoisted, they are not initialized until their actual declaration line is executed. Accessing them before this point triggers a `ReferenceError`.

    ```javascript
    function tdzScenario() {
      // console.log(productName); // ReferenceError: Cannot access 'productName' before initialization
      let productName = "Laptop";
      console.log(productName);
    }
    tdzScenario();
    ```

4.  **Using `typeof` on an undeclared variable (in non-strict mode):** This is a rare edge case. While `typeof` usually returns `"undefined"` for undeclared variables in non-strict mode, if the variable name itself is somehow reserved or part of a syntax error, it *might* still throw a `ReferenceError` before `typeof` can even evaluate it. However, typically `typeof` is the *only* operation that won't throw a `ReferenceError` for a truly undeclared variable in non-strict mode.

    ```javascript
    // In non-strict mode, this will return "undefined" (a special exception for typeof)
    console.log(typeof trulyUndeclaredVar); // Output: "undefined"

    // But any other operation will throw:
    // trulyUndeclaredVar = 1; // ReferenceError in strict mode, global var in non-strict
    ```
    This `typeof` behavior for undeclared variables is an old quirk to allow for checking if a global variable exists, but it's not robust.

5.  **Attempting to assign to a `const` variable after its initial assignment:** This is a `TypeError`, not a `ReferenceError`, but it's important to distinguish. `const` variables cannot be reassigned.

    ```javascript
    const myConst = 10;
    // myConst = 20; // TypeError: Assignment to constant variable.
    ```
    This is different from `ReferenceError` because `myConst` *is* defined; you're just violating a rule about its mutability.

---

## 6. How `var`, `let`, and `const` behave with `undefined` and `not defined`

The choice of `var`, `let`, or `const` significantly impacts how `undefined` and `not defined` manifest due to their differing hoisting and scoping rules.

### `var`

* **Hoisting:** `var` declarations are **fully hoisted** to the top of their immediate function scope (or global scope). This means the declaration is processed before any code runs, and the variable is automatically initialized to `undefined`.
* **Initialization:** Always initialized to `undefined` during the creation phase of the execution context.
* **Scope:** Function-scoped.
* **Re-declaration:** Can be re-declared in the same scope without error.

**Behavior:**

* **Before assignment:** You can access a `var` variable before its assignment, and its value will be `undefined`.
    ```javascript
    console.log(myVar); // Output: undefined
    var myVar = "hello";
    console.log(myVar); // Output: "hello"
    ```
* **Out of function scope:** Will be `not defined` if accessed outside its function scope.
    ```javascript
    function exampleVar() {
      var foo = 10;
    }
    exampleVar();
    // console.log(foo); // ReferenceError: foo is not defined
    ```
* **Block scope (pitfall):** `var` ignores block scope.
    ```javascript
    if (true) {
      var blockVar = "I'm var in a block";
    }
    console.log(blockVar); // Output: "I'm var in a block" (accessible outside block)
    // Here, if you expected blockVar to be 'not defined', you'd be wrong.
    ```

### `let`

* **Hoisting:** `let` declarations are hoisted to the top of their immediate block scope, but they are **not initialized**. They are placed in the **Temporal Dead Zone (TDZ)**.
* **Initialization:** Not initialized until their declaration line is executed during the execution phase.
* **Scope:** Block-scoped.
* **Re-declaration:** Cannot be re-declared in the same scope.

**Behavior:**

* **Before declaration (in TDZ):** Accessing a `let` variable before its declaration line results in a `ReferenceError` (a specific `not defined` case).
    ```javascript
    // console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = "world";
    console.log(myLet); // Output: "world"
    ```
* **Declared but not assigned:** If declared but not assigned, its value is `undefined` *after* it exits the TDZ.
    ```javascript
    let anotherLet;
    console.log(anotherLet); // Output: undefined
    ```
* **Out of block scope:** Will be `not defined` if accessed outside its block scope.
    ```javascript
    if (true) {
      let blockLet = "I'm let in a block";
    }
    // console.log(blockLet); // ReferenceError: blockLet is not defined
    ```

### `const`

* **Hoisting:** Similar to `let`, `const` declarations are hoisted but are in the **Temporal Dead Zone (TDZ)**.
* **Initialization:** Must be initialized at the time of declaration. If not, it's a `SyntaxError`.
* **Scope:** Block-scoped.
* **Re-declaration:** Cannot be re-declared in the same scope.
* **Re-assignment:** Cannot be re-assigned after initial assignment (throws `TypeError`).

**Behavior:**

* **Before declaration (in TDZ):** Accessing a `const` variable before its declaration line results in a `ReferenceError`.
    ```javascript
    // console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
    const myConst = 123;
    console.log(myConst); // Output: 123
    ```
* **Declared without assignment:** This is a `SyntaxError`, not `undefined` or `ReferenceError`.
    ```javascript
    // const PI; // SyntaxError: Missing initializer in const declaration
    ```
* **Out of block scope:** Will be `not defined` if accessed outside its block scope.
    ```javascript
    function exampleConst() {
      if (true) {
        const blockConst = "block const";
      }
      // console.log(blockConst); // ReferenceError: blockConst is not defined
    }
    exampleConst();
    ```

**Summary of Behavior:**

| Feature            | `var`                                 | `let`                                    | `const`                                  |
| :----------------- | :------------------------------------ | :--------------------------------------- | :--------------------------------------- |
| **Hoisting** | Hoisted, initialized to `undefined`   | Hoisted, in TDZ (uninitialized)          | Hoisted, in TDZ (uninitialized)          |
| **Before Decl.** | `undefined`                           | `ReferenceError` (TDZ)                   | `ReferenceError` (TDZ)                   |
| **Decl. no Assign**| `undefined`                           | `undefined`                              | `SyntaxError` (must assign)              |
| **Scope Type** | Function                             | Block                                    | Block                                    |
| **Re-declare** | Yes                                   | No (`SyntaxError`)                       | No (`SyntaxError`)                       |
| **Re-assign** | Yes                                   | Yes                                      | No (`TypeError`)                         |

---

## 7. Explain Temporal Dead Zone (TDZ) and its role in `let`/`const`

We've touched upon this, but let's give it a dedicated, detailed explanation.

**What is the Temporal Dead Zone (TDZ)?**

The Temporal Dead Zone (TDZ) is a conceptual "region" or "time period" in the execution of JavaScript code where `let` and `const` variables exist but cannot be accessed.

It starts at the **beginning of the variable's lexical scope** and ends when the variable's **declaration line is actually executed and it's initialized with a value**.

**Role in `let`/`const`:**

The TDZ is a crucial feature that distinguishes `let` and `const` from `var` and significantly improves the predictability and reliability of JavaScript code.

1.  **Strictness and Error Prevention:**
    * With `var`, accessing a variable before its declaration gives `undefined`, which can silently mask bugs.
    * With `let` and `const`, accessing them in the TDZ throws a `ReferenceError`. This makes it explicit that you're trying to use a variable before it's properly set up, leading to earlier detection of potential errors.

2.  **Enforcing Initialization for `const`:**
    * `const` variables *must* be initialized at the time of declaration. The TDZ ensures that you cannot even declare a `const` and then try to assign it later; the declaration and initialization must happen at the same line.

3.  **Preventing Accidental Leakage/Hoisting Quirks:**
    * The TDZ essentially makes `let` and `const` behave more like variables in other block-scoped languages, where you generally can't use a variable before its definition. It enforces a more intuitive "declaration before use" rule.

**Diagram of TDZ:**

```
|------------------------------------|  Start of Scope (e.g., function/block)
|                                    |
|    console.log(myLet);             |  <-- ReferenceError: 'myLet' is in TDZ
|    console.log(myConst);           |  <-- ReferenceError: 'myConst' is in TDZ
|                                    |
|    ---------------------------     |
|    | Temporal Dead Zone (TDZ) |     |
|    ---------------------------     |
|                                    |
|    let myLet = "hello";            |  <-- 'myLet' exits TDZ, is initialized
|    const myConst = 123;            |  <-- 'myConst' exits TDZ, is initialized
|                                    |
|    console.log(myLet);             |  <-- Accessible ("hello")
|    console.log(myConst);           |  <-- Accessible (123)
|                                    |
|------------------------------------|  End of Scope
```

**Practical Example:**

```javascript
function calculateDiscount(price) {
  // TDZ for 'discountedPrice' and 'taxRate' begins here
  // console.log(discountedPrice); // ReferenceError: Cannot access 'discountedPrice' before initialization
  // console.log(taxRate); // ReferenceError: Cannot access 'taxRate' before initialization

  const taxRate = 0.05; // 'taxRate' exits TDZ
  let discountedPrice = price * (1 - 0.10); // 'discountedPrice' exits TDZ

  console.log(taxRate); // 0.05
  console.log(discountedPrice); // price * 0.9

  // It's perfectly fine to use them after their declarations:
  return discountedPrice + (discountedPrice * taxRate);
}

calculateDiscount(100);
```

The TDZ is a powerful feature that makes `let` and `const` more robust and less prone to the subtle bugs that `var` can introduce due to its permissive hoisting behavior.

---

## 8. How function hoisting affects undefined behavior

Function hoisting in JavaScript primarily affects `function` declarations, not `function` expressions or arrow functions. Understanding this distinction is crucial for predicting `undefined` behavior.

### Function Declarations:

* **Fully Hoisted:** `function` declarations are hoisted entirely to the top of their containing scope (global or function scope). This means both the function's name and its definition are available before the line where they appear in the code.
* **Behavior with `undefined`:** Because they are fully hoisted, you can call a function declaration *before* it appears in the source code without encountering `undefined` or `ReferenceError`. The function is always "defined" and ready to be called.

    ```javascript
    sayHi(); // Output: Hello there! (Works perfectly due to hoisting)

    function sayHi() {
      console.log("Hello there!");
    }
    ```

### Function Expressions (including Arrow Functions):

* **Not fully hoisted:** `function` expressions (when assigned to a variable) are treated like variable declarations.
    * If declared with `var`, only the variable name is hoisted and initialized to `undefined`. The function definition itself is not available until the assignment line is reached.
    * If declared with `let` or `const`, the variable name is hoisted to the TDZ, and accessing it before declaration will result in a `ReferenceError`.

**Behavior with `undefined` and `not defined`:**

**1. `var` with Function Expression:**

```javascript
// console.log(greet); // Output: undefined (greet is hoisted but not yet assigned the function)
// greet(); // TypeError: greet is not a function (because greet is undefined)

var greet = function() {
  console.log("Greetings!");
};

greet(); // Output: Greetings!
```
**Dry Run:**
* **Creation Phase:** `greet` (variable) is hoisted and initialized to `undefined`.
* **Execution Phase:**
    * `console.log(greet)`: Prints `undefined`.
    * `greet()`: Attempts to call `undefined` as a function, resulting in `TypeError`.
    * `var greet = ...`: `greet` is now assigned the function object.
    * `greet()`: Calls the function successfully.

**2. `let`/`const` with Function Expression (TDZ):**

```javascript
// console.log(farewell); // ReferenceError: Cannot access 'farewell' before initialization
// farewell(); // ReferenceError: Cannot access 'farewell' before initialization

const farewell = () => {
  console.log("Goodbye!");
};

farewell(); // Output: Goodbye!
```
**Dry Run:**
* **Creation Phase:** `farewell` (variable) is hoisted but put into the TDZ.
* **Execution Phase:**
    * `console.log(farewell)` or `farewell()` before its declaration: Throws `ReferenceError` because it's in the TDZ.
    * `const farewell = ...`: `farewell` exits the TDZ and is assigned the arrow function object.
    * `farewell()`: Calls the function successfully.

**Key Takeaway:**
* **`function` declarations** are the safest to call anywhere within their scope because they are fully hoisted.
* **Function expressions** (especially `var` ones) can lead to `TypeError: ... is not a function` if called before their assignment, as the variable holds `undefined` initially.
* **`let`/`const` function expressions** will throw `ReferenceError` if called before their declaration due to the TDZ.

It's generally a best practice to define functions (especially expressions) before you call them to avoid confusion and potential errors related to hoisting.

---

## 9. Real-time examples of:

Let's illustrate the differences with practical scenarios across different scopes.

### 1. Global scope vs function scope vs block scope

```javascript
// Global scope: outerVariable, appName, init
let outerVariable = "I'm global.";
const appName = "MyWebApp";

function init() {
  // Function scope: message, processData
  let message = "Welcome to " + appName;
  var functionScopedVar = "I live in init."; // var is function-scoped

  if (true) {
    // Block scope: blockMessage, loopCounter
    let blockMessage = "Inside a block."; // let is block-scoped
    const loopCounter = 0; // const is block-scoped
    var anotherVar = "Another var in block."; // var is function-scoped, so this is init's scope

    console.log(outerVariable);    // Global: Accessible
    console.log(message);          // Function: Accessible
    console.log(blockMessage);     // Block: Accessible
    console.log(loopCounter);      // Block: Accessible
    console.log(functionScopedVar);// Function: Accessible
    console.log(anotherVar);       // Function: Accessible
    // console.log(nonExistent); // ReferenceError: nonExistent is not defined (never declared)
  }

  console.log(message);          // Function: Accessible
  console.log(functionScopedVar);// Function: Accessible
  console.log(anotherVar);       // Function: Accessible (var hoists out of block)
  // console.log(blockMessage);  // ReferenceError: blockMessage is not defined (out of block scope)
  // console.log(loopCounter);   // ReferenceError: loopCounter is not defined (out of block scope)
}

init();

console.log(outerVariable);    // Global: Accessible
console.log(appName);          // Global: Accessible
// console.log(message);       // ReferenceError: message is not defined (out of function scope)
// console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined (out of function scope)
// console.log(blockMessage);  // ReferenceError: blockMessage is not defined (never accessible globally)
// console.log(anotherVar); // ReferenceError: anotherVar is not defined (never accessible globally)
```
**Dry Run Insights:**
* `outerVariable` and `appName` are created in the Global Execution Context's Lexical Environment.
* When `init()` is called, its own Lexical Environment is created, linked to the Global one. `message`, `functionScopedVar`, and `anotherVar` are created within `init`'s environment. `functionScopedVar` and `anotherVar` (being `var`) are available throughout the *entire* `init` function body due to function hoisting.
* When the `if (true)` block is entered, a *new* Lexical Environment for the block is created, linked to `init`'s environment. `blockMessage` and `loopCounter` are created here. These are only available *inside* this block.
* When `console.log(blockMessage)` is called outside the `if` block, it searches `init`'s environment, then the Global one, but never finds `blockMessage`, hence `ReferenceError`.

### 2. Accessing undeclared variables

This emphasizes when `undefined` is a value vs. `not defined` is an error.

```javascript
// Scenario 1: Undeclared variable (will cause ReferenceError)
function checkUndeclared() {
  // console.log(undeclaredVar); // ReferenceError: undeclaredVar is not defined
  // undeclaredVar = 10; // This would create a global variable in non-strict mode!
}
checkUndeclared();


// Scenario 2: Declared but unassigned variable (will be undefined)
let declaredButUnassigned;
console.log(declaredButUnassigned); // Output: undefined

function checkUnassignedParameter(param1, param2) {
  console.log(param1); // Output: "Hello"
  console.log(param2); // Output: undefined (param2 was not passed)
}
checkUnassignedParameter("Hello");


// Scenario 3: Accessing non-existent object property (will be undefined)
const userProfile = {
  username: "coder123",
  status: "active"
};
console.log(userProfile.username); // Output: "coder123"
console.log(userProfile.lastLogin); // Output: undefined (property doesn't exist)
```
**Dry Run Insights:**
* `undeclaredVar` is never processed during any creation phase. When `console.log(undeclaredVar)` is executed, the engine attempts to resolve this identifier by searching the current and outer lexical environments. It finds no binding, so it throws a `ReferenceError`.
* `declaredButUnassigned` is processed during the creation phase of the global context. Since it's a `let` and no value is assigned, it's implicitly set to `undefined` after exiting its TDZ.
* `userProfile.lastLogin`: When accessing an object property, the engine looks for that property on the object itself. If not found, it's considered "missing" and JavaScript returns `undefined` as a value, rather than an error. This is a crucial distinction from variable resolution.

---

## 10. Use of `typeof` to check for `undefined` vs `not defined`

The `typeof` operator is unique in how it handles undeclared variables, making it a valuable tool for checking `undefined` vs. `not defined`.

**Checking for `undefined` (value):**

When `typeof` is applied to a variable that currently holds the `undefined` value, it correctly returns the string `"undefined"`.

```javascript
let myValue;
console.log(typeof myValue); // Output: "undefined"

let anotherValue = undefined;
console.log(typeof anotherValue); // Output: "undefined"

function noReturn() {}
let result = noReturn();
console.log(typeof result); // Output: "undefined"

const obj = {};
console.log(typeof obj.nonExistentProperty); // Output: "undefined"
```

**Checking for `not defined` (undeclared identifier):**

This is where `typeof` behaves uniquely. If you apply `typeof` to an identifier that has **never been declared** in the current scope chain, it will **not** throw a `ReferenceError`. Instead, it will return the string `"undefined"`.

This is a historical quirk of JavaScript, designed to allow checking for the existence of global variables in browser environments without causing script crashes.

```javascript
// Variable 'nonExistentVar' is nowhere declared
console.log(typeof nonExistentVar); // Output: "undefined" (NO ReferenceError)

if (typeof possiblyUndeclaredVar === "undefined") {
  console.log("possiblyUndeclaredVar is not defined or is undefined.");
  // You might then proceed to declare it:
  let possiblyUndeclaredVar = "now defined!";
  console.log(possiblyUndeclaredVar);
}
```

**Why this is useful (and its limitations):**

* **Legacy Global Checks:** In older JavaScript, before modules, you might use `typeof` to check if a library (e.g., `jQuery`) was loaded by checking `typeof jQuery === 'undefined'`.
* **Safe Property Access:** You can safely check if a variable or property exists without risking a `ReferenceError` if it might not be declared at all.

**Limitation:**
The `typeof` operator returns `"undefined"` for both `undefined` *values* and `not defined` *variables*. This means `typeof` alone cannot tell you if a variable *exists* but is unassigned, or if it *doesn't exist at all*.

**Example of Limitation:**

```javascript
let definedButUndefined; // Declared, value is undefined
// console.log(definedButUndefined); // undefined
console.log(typeof definedButUndefined); // "undefined"

// undeclaredVar; // This line would be a ReferenceError if not commented out
console.log(typeof undeclaredVar); // "undefined" (no error here)

// 'typeof' cannot differentiate between these two states directly.
// You need to rely on declaration awareness or other checks for robustness.
```

For practical purposes, `let` and `const` have made the `typeof undeclaredVar` scenario less common, as most modern code will declare variables properly. However, it's a key behavior to understand for debugging and historical context.

---

## 11. Deep explanation of Execution Context and Variable Environment

To truly grasp `undefined` vs `not defined` at an advanced level, we must understand the JavaScript **Execution Context (EC)** and its components, particularly the **Variable Environment**.

Recall from the previous detailed explanation of Lexical Scope:

An **Execution Context** is an abstract concept representing the environment in which the current JavaScript code is being evaluated. Every time a function is called, or the global code starts running, a new Execution Context is created.

Each Execution Context consists of:

1.  **Lexical Environment:**
    * **Environment Record:** The actual storage mechanism for variables, function declarations, and arguments within the current scope.
        * **Declarative Environment Record:** Holds `let`, `const`, function declarations, and function arguments.
        * **Object Environment Record:** (Mainly for global context and `with` statements) Holds `var` declarations and function declarations as properties of a binding object (`window` or `global`).
    * **Outer Lexical Environment Reference:** A pointer to the parent lexical environment, forming the scope chain.

2.  **Variable Environment:**
    * Historically, this was a distinct component primarily responsible for handling `var` declarations and function declarations during the **creation phase** of the Execution Context (i.e., hoisting).
    * In modern JavaScript (ES6+), the `Variable Environment`'s role for `let` and `const` has effectively been absorbed into the `Lexical Environment`. For simplicity, you can often think of the `Lexical Environment` as the primary component where all variable and function declarations are managed.
    * **Crucially, the `Variable Environment` component is where `var` variables are initialized to `undefined` during the creation phase.**

3.  **`this` Binding:** Determines the value of the `this` keyword.

### The Phases of an Execution Context:

An EC undergoes two main phases:

#### A. Creation Phase (Memory Creation/Hoisting)

This phase happens *before* any code execution. The JavaScript engine scans the code within the current context.

1.  **Creation of Lexical Environment and Variable Environment:**
    * A new Lexical Environment and Variable Environment are created.
    * The `Outer Lexical Environment Reference` is set, linking to the parent scope based on the code's lexical position.

2.  **Environment Record Population:**
    * **Function Declarations:** For each `function` declaration, a property with the function's name is added to the Environment Record, and its value is set to the actual function object. This means function declarations are fully available immediately.
    * **`var` Declarations:** For each `var` variable, a property is added to the Environment Record (specifically, the `Variable Environment` part of it) and **initialized to `undefined`**. This is why `var` variables are "hoisted" and you can access them before their declaration line, but they'll be `undefined`.
    * **`let` and `const` Declarations:** For `let` and `const` variables, a property is added to the Environment Record (specifically, the `Declarative Environment Record` part of the `Lexical Environment`). However, they are **not initialized**. They are placed in the **Temporal Dead Zone (TDZ)**. Accessing them before their actual declaration line will throw a `ReferenceError`.
    * **Arguments Object (for functions):** In a function EC, an `arguments` object is created and populated with the arguments passed to the function.

#### B. Execution Phase

This phase happens *after* the creation phase. The engine executes the code line by line.

* **Variable Assignments:** Values are assigned to variables as the assignment statements are encountered.
* **Function Calls:** When a function call is encountered, a new Execution Context is created for that function, pushed onto the call stack, and the entire process (creation + execution) repeats for the new context.
* **Code Evaluation:** All other statements and expressions are evaluated.

### How this relates to `undefined` vs `not defined`:

* **`undefined` (Value):**
    * Arises when a variable (especially `var` and `let` after its TDZ) is processed during the **Creation Phase** and *initialized to `undefined`* because no explicit assignment has been made yet.
    * Also arises when a function finishes without a `return` value or when accessing a non-existent object property – these are runtime behaviors that result in the `undefined` value.

* **`not defined` (ReferenceError):**
    * Arises during the **Execution Phase** when the engine tries to resolve an identifier:
        1.  It searches the current Execution Context's Lexical Environment.
        2.  It then follows the `Outer Lexical Environment Reference` up the scope chain.
        3.  If it reaches the global scope and still cannot find any binding for that identifier (meaning it was never declared at all or is out of scope), a `ReferenceError` is thrown.
    * A specific case of `ReferenceError` is when a `let` or `const` variable is accessed during its **Temporal Dead Zone** – it *has* been processed in the Creation Phase (its binding exists), but it's explicitly marked as "uninitialized" and inaccessible until its declaration line.

**Illustrative Dry Run Example:**

```javascript
console.log(variableA);   // Output: undefined (var is hoisted and initialized)
// console.log(variableB); // ReferenceError: Cannot access 'variableB' before initialization (let in TDZ)
// console.log(variableC); // ReferenceError: variableC is not defined (never declared)

var variableA = 10;
let variableB = 20;

function showVars() {
  console.log(variableA); // Output: 10
  console.log(variableB); // Output: 20
  // console.log(variableC); // ReferenceError: variableC is not defined
  let localD = 30;
}

showVars();
// console.log(localD); // ReferenceError: localD is not defined (out of scope)
```

**Execution Context Dry Run:**

1.  **Global EC - Creation Phase:**
    * Lexical Environment (Global):
        * `variableA`: added to Environment Record, initialized to `undefined`.
        * `variableB`: added to Environment Record, placed in TDZ.
        * `showVars`: Function object added to Environment Record.

2.  **Global EC - Execution Phase (line by line):**
    * `console.log(variableA);` -> `variableA` is found in Global LE's ER, value is `undefined`. Output: `undefined`.
    * `console.log(variableB);` -> `variableB` is found in Global LE's ER, but it's in TDZ. Throws `ReferenceError`. (Script would stop here if not commented out).
    * `console.log(variableC);` -> `variableC` is not found in Global LE's ER, nor in any outer (none). Throws `ReferenceError`. (Script would stop here).
    * `var variableA = 10;` -> `variableA` in Global LE's ER is updated from `undefined` to `10`.
    * `let variableB = 20;` -> `variableB` in Global LE's ER exits TDZ and is initialized to `20`.
    * `showVars();` -> New Function EC for `showVars` is created and pushed onto stack.

3.  **`showVars` EC - Creation Phase:**
    * Lexical Environment (`showVars`):
        * `localD`: added to Environment Record, placed in TDZ.
        * Outer Lexical Environment: Points to Global LE.

4.  **`showVars` EC - Execution Phase:**
    * `console.log(variableA);` -> Search `showVars` LE. Not found. Follow Outer LE to Global LE. Found `variableA`. Value: `10`. Output: `10`.
    * `console.log(variableB);` -> Search `showVars` LE. Not found. Follow Outer LE to Global LE. Found `variableB`. Value: `20`. Output: `20`.
    * `console.log(variableC);` -> Search `showVars` LE. Not found. Follow Outer LE to Global LE. Not found. Throws `ReferenceError`.
    * `let localD = 30;` -> `localD` in `showVars` LE exits TDZ and is initialized to `30`.
    * `showVars` finishes. Its EC is popped from stack. `localD`'s binding is destroyed (unless captured by a closure).

5.  **Global EC - Execution Phase (continues):**
    * `console.log(localD);` -> Search Global LE. Not found. Throws `ReferenceError`.

This deep dive shows how `undefined` values result from initialization during the creation phase or explicit `undefined` returns, while `ReferenceError` results from failed identifier resolution during the execution phase, often due to non-declaration or TDZ access.

---

## 12. Diagrams showing:

### A. Memory allocation (Creation & Execution Phase)

Let's visualize the conceptual memory state for `var`, `let`, and `const` during the Execution Context phases.

**Code Example:**

```javascript
var fruit = "apple";
let vegetable; // Declared, not assigned
const animal = "dog";

console.log(fruit);      // 1
console.log(vegetable);  // 2
// console.log(reptile);  // 3 (ReferenceError if uncommented)
// console.log(bird);     // 4 (ReferenceError if uncommented)

vegetable = "carrot";
// animal = "cat"; // TypeError: Assignment to constant variable.

let fish = "salmon"; // Declared and assigned later
```

**Conceptual Memory Diagram:**

```mermaid
graph TD
    subgraph "Global Execution Context"
        direction LR
        EC_Creation[Creation Phase] --> EC_Execution[Execution Phase];

        subgraph "Environment Record (During Creation)"
            direction LR
            ER_Creation_V[var fruit: undefined]
            ER_Creation_L[let vegetable: <uninitialized> (TDZ)]
            ER_Creation_C[const animal: <uninitialized> (TDZ)]
            ER_Creation_NoDeclare(reptile: NOT found!)
            ER_Creation_NoDeclare2(bird: NOT found!)
            ER_Creation_L2[let fish: <uninitialized> (TDZ)]

            ER_Creation_V --> ER_Creation_L;
            ER_Creation_L --> ER_Creation_C;
        end

        subgraph "Environment Record (During Execution - Step by Step)"
            direction LR
            ER_Exec_1[fruit: "apple"]
            ER_Exec_2[vegetable: undefined]
            ER_Exec_3[animal: "dog"]
            ER_Exec_4[vegetable: "carrot"]
            ER_Exec_5[fish: "salmon"]

        end

        EC_Creation -- "Variable/Function scan" --> ER_Creation_V;
        EC_Creation -- "Variable/Function scan" --> ER_Creation_L;
        EC_Creation -- "Variable/Function scan" --> ER_Creation_C;
        EC_Creation -- "No declaration found" --> ER_Creation_NoDeclare;
        EC_Creation -- "No declaration found" --> ER_Creation_NoDeclare2;
        EC_Creation -- "Variable/Function scan" --> ER_Creation_L2;


        EC_Execution -- "Line 1: var fruit = 'apple'" --> ER_Exec_1;
        EC_Execution -- "Line 2: let vegetable;" --> ER_Exec_2;
        EC_Execution -- "Line 3: const animal = 'dog';" --> ER_Exec_3;
        EC_Execution -- "Line 7: vegetable = 'carrot';" --> ER_Exec_4;
        EC_Execution -- "Line 10: let fish = 'salmon';" --> ER_Exec_5;
    end

    style ER_Creation_V fill:#d4e6f1,stroke:#3498db,stroke-width:2px;
    style ER_Creation_L fill:#fef9e7,stroke:#f39c12,stroke-width:2px;
    style ER_Creation_C fill:#f9e79f,stroke:#f1c40f,stroke-width:2px;
    style ER_Creation_NoDeclare fill:#f8d7da,stroke:#dc3545,stroke-width:2px;
    style ER_Creation_NoDeclare2 fill:#f8d7da,stroke:#dc3545,stroke-width:2px;
    style ER_Creation_L2 fill:#fef9e7,stroke:#f39c12,stroke-width:2px;


    style ER_Exec_1 fill:#e6f9e6,stroke:#28a745,stroke-width:2px;
    style ER_Exec_2 fill:#e6f9e6,stroke:#28a745,stroke-width:2px;
    style ER_Exec_3 fill:#e6f9e6,stroke:#28a745,stroke-width:2px;
    style ER_Exec_4 fill:#e6f9e6,stroke:#28a745,stroke-width:2px;
    style ER_Exec_5 fill:#e6f9e6,stroke:#28a745,stroke-width:2px;

    style EC_Creation fill:#d6eaf8,stroke:#2196f3,stroke-width:2px;
    style EC_Execution fill:#e6effc,stroke:#4285f4,stroke-width:2px;
```

**Explanation:**

* **Creation Phase:** The engine scans the code.
    * `fruit` (var): Immediately added to the Environment Record and initialized to `undefined`.
    * `vegetable` (let): Added to the Environment Record but marked as `<uninitialized>` (in TDZ).
    * `animal` (const): Added to the Environment Record but marked as `<uninitialized>` (in TDZ).
    * `reptile`, `bird`: No declarations found for these. They simply don't exist in the Environment Record.
    * `fish` (let): Added to the Environment Record but marked as `<uninitialized>` (in TDZ).
* **Execution Phase:** Code runs line by line, updating the Environment Record.
    * `console.log(fruit)`: `fruit` is `undefined`.
    * `console.log(vegetable)`: `vegetable` (now out of TDZ) is `undefined`.
    * `console.log(reptile)`: `reptile` is **not found** in the Environment Record (or its outer environments). `ReferenceError` occurs.
    * `console.log(bird)`: Same as `reptile`.
    * `fruit = "apple"`: `fruit`'s value is updated.
    * `vegetable = "carrot"`: `vegetable`'s value is updated.
    * `let fish = "salmon"`: `fish` exits TDZ and is initialized with `"salmon"`.

### B. Hoisting behavior with `var`, `let`, `const`

This diagram illustrates how declarations are conceptually "moved" during the hoisting process before execution.

**Code Example:**

```javascript
// Scope Start

console.log(car);     // A: var behavior
// console.log(bike);    // B: let/const TDZ
// console.log(plane);   // C: let/const TDZ

var car = "Honda";
let bike = "Yamaha";
const plane = "Boeing";

function drive() {
  // Inner Scope Start
  console.log(car);     // D: var from outer scope
  console.log(bike);    // E: let from outer scope
  // console.log(truck); // F: ReferenceError for unhoisted var
  var truck = "Ford";
}

drive();

// Scope End
```

**Conceptual Hoisting Diagram:**

```mermaid
graph TD
    subgraph "Global Scope (Conceptually after Hoisting)"
        var_car(var car;  // Initialized to undefined)
        let_bike(let bike; // TDZ)
        const_plane(const plane; // TDZ)
        func_drive(function drive() { ... }; // Full function hoisted)

        var_car --> A[console.log(car) -> undefined];
        let_bike --> B[// console.log(bike) -> ReferenceError (TDZ)];
        const_plane --> C[// console.log(plane) -> ReferenceError (TDZ)];

        A --> car_assign(car = "Honda");
        B --> bike_assign(bike = "Yamaha");
        C --> plane_assign(plane = "Boeing");

        func_drive -- "Call drive()" --> Drive_Context;
    end

    subgraph "drive() Function Scope (Conceptually after Hoisting)"
        var_truck(var truck; // Initialized to undefined)
        D_log(console.log(car) -> Honda);
        E_log(console.log(bike) -> Yamaha);
        F_log(console.log(truck) -> undefined);

        D_log -- "Accesses Global car" --> var_car;
        E_log -- "Accesses Global bike" --> let_bike;

        Drive_Context[Drive Function Execution Context] --> var_truck;
        Drive_Context --> D_log;
        Drive_Context --> E_log;
        Drive_Context --> F_log;

        var_truck --> truck_assign(truck = "Ford");
    end

    style var_car fill:#d4e6f1,stroke:#3498db,stroke-width:2px;
    style let_bike fill:#fef9e7,stroke:#f39c12,stroke-width:2px;
    style const_plane fill:#f9e79f,stroke:#f1c40f,stroke-width:2px;
    style func_drive fill:#e6f9e6,stroke:#28a745,stroke-width:2px;
    style var_truck fill:#d4e6f1,stroke:#3498db,stroke-width:2px;

    style A fill:#D6EAF8;
    style B fill:#FADBD8;
    style C fill:#FADBD8;
    style D_log fill:#D6EAF8;
    style E_log fill:#D6EAF8;
    style F_log fill:#D6EAF8;
```

**Explanation:**

* **Global Scope:** `car`, `bike`, `plane` are all hoisted. `car` (var) is initialized to `undefined`. `bike` (let) and `plane` (const) enter the TDZ. The `drive` function is fully hoisted.
* **`drive` Function Scope:** `truck` (var) is hoisted to the top of `drive`'s scope and initialized to `undefined`.
* **A, B, C:** Demonstrate immediate access behavior. `A` logs `undefined` due to `var`'s initialization. `B` and `C` throw `ReferenceError` due to TDZ.
* **D, E:** `car` and `bike` are resolved by climbing the scope chain to the Global scope.
* **F:** `truck` is accessed within `drive`'s scope, and because it's a `var` hoisted to the top of `drive`, it logs `undefined`.

---

## 13. Difference in strict mode vs non-strict mode

`strict mode` (`"use strict";`) has a significant impact on how `undefined` and `not defined` behaviors manifest, primarily by making JavaScript stricter and catching common errors earlier.

**1. Implicit Global Variables (Undeclared Assignments):**

* **Non-strict mode:** If you assign a value to an identifier that has **not been declared** anywhere in the scope chain, JavaScript will *implicitly create a global variable* (a property on the global object, `window` in browsers, `global` in Node.js). This can easily lead to accidental global pollution and hard-to-track bugs. The variable then holds the assigned value, so it's neither `undefined` nor `not defined` in the sense of an error, but it's an undesirable side effect.

    ```javascript
    // In global scope or non-strict function
    function createImplicitGlobal() {
      accidentalGlobal = "I was never declared!"; // No 'var', 'let', 'const'
    }
    createImplicitGlobal();
    console.log(accidentalGlobal); // Output: I was never declared! (accessible globally)
    console.log(typeof accidentalGlobal); // Output: "string"
    ```

* **Strict mode:** Implicit global variable creation is forbidden. If you attempt to assign a value to an undeclared identifier, it will immediately throw a `ReferenceError`. This helps prevent accidental global pollution and promotes cleaner code.

    ```javascript
    "use strict";
    function tryImplicitGlobal() {
      // strictAccidentalGlobal = "This will throw an error!"; // ReferenceError: strictAccidentalGlobal is not defined
    }
    // tryImplicitGlobal(); // Uncommenting this line will cause the error
    ```

**2. `this` Binding for Function Calls:**

While not directly about `undefined` values, `strict mode` influences `this` behavior, which can affect where you might expect `undefined` if you misinterpret `this`.

* **Non-strict mode:** When a regular function is called directly (not as a method of an object or with `call`/`apply`/`bind`), `this` defaults to the global object (`window` or `global`).

    ```javascript
    function showThisNonStrict() {
      console.log(this); // In browser: Window object; In Node: global object
    }
    showThisNonStrict();
    ```

* **Strict mode:** When a regular function is called directly, `this` is `undefined`. This is a safer default as it avoids accidentally modifying the global object and makes `this`'s behavior more predictable.

    ```javascript
    "use strict";
    function showThisStrict() {
      console.log(this); // Output: undefined
    }
    showThisStrict();
    ```

**3. `eval()` Behavior:**

* **Non-strict mode:** `eval()` can "leak" `var` declarations and function declarations into the surrounding lexical scope. This means variables declared inside `eval` might unexpectedly become `defined` (or `undefined` initially) in the outer scope.

    ```javascript
    var outerVar = "original";
    eval("var outerVar = 'modified'; var evalVar = 'new';");
    console.log(outerVar); // Output: "modified"
    console.log(evalVar);  // Output: "new" (evalVar leaked globally)
    ```

* **Strict mode:** `eval()` creates its own private lexical environment. `var` declarations and function declarations inside `eval` are confined to that `eval` scope and do **not** leak into the surrounding scope. They will be `not defined` outside the `eval` string.

    ```javascript
    "use strict";
    var strictOuterVar = "strict original";
    eval("var strictOuterVar = 'strict modified'; var strictEvalVar = 'new strict';");
    console.log(strictOuterVar); // Output: "strict original" (not modified by eval)
    // console.log(strictEvalVar); // ReferenceError: strictEvalVar is not defined (confined to eval's scope)
    ```

**Recommendation:**
Always use `strict mode` by including `"use strict";` at the top of your script files or within individual functions. It helps catch common programming errors, enforces better practices, and leads to more robust and debuggable code, making `not defined` errors occur where they should and preventing accidental `undefined` (due to implicit globals).

---

## 14. How `undefined` affects equality checks (`==`, `===`)

Understanding how `undefined` interacts with JavaScript's equality operators is crucial, especially when distinguishing it from `null`.

### 1. Loose Equality Operator (`==`)

The loose equality operator performs **type coercion** before comparing values. This means it tries to convert one or both operands to a common type before the comparison.

* **`undefined == null` is `true`:** This is a very important and often-used rule. Both `undefined` and `null` are considered "empty" or "absent" values, and the `==` operator specifically treats them as equal.
    ```javascript
    console.log(undefined == null);   // Output: true
    console.log(null == undefined);   // Output: true
    ```
* **`undefined == anything_else` (except `null`) is `false`:** `undefined` is not loosely equal to any other value, including `0`, `false`, or an empty string `""`.

    ```javascript
    console.log(undefined == 0);      // Output: false
    console.log(undefined == false);  // Output: false
    console.log(undefined == '');     // Output: false
    console.log(undefined == NaN);    // Output: false
    console.log(undefined == null);   // Output: true (the exception)
    ```

### 2. Strict Equality Operator (`===`)

The strict equality operator performs **no type coercion**. It compares both the value and the type of the operands.

* **`undefined === null` is `false`:** Because `undefined` is of type `undefined` and `null` is conceptually of type `null` (but `typeof null` is "object"), their types are different, so strict equality returns `false`. This is the preferred way to distinguish `undefined` from `null`.
    ```javascript
    console.log(undefined === null);   // Output: false
    console.log(null === undefined);   // Output: false
    ```
* **`undefined === undefined` is `true`:**
    ```javascript
    console.log(undefined === undefined); // Output: true
    let a;
    console.log(a === undefined);     // Output: true
    ```
* **`undefined === anything_else` is `false`:** As there is no type coercion, `undefined` will not be strictly equal to any other type.

    ```javascript
    console.log(undefined === 0);      // Output: false
    console.log(undefined === false);  // Output: false
    console.log(undefined === '');     // Output: false
    console.log(undefined === NaN);    // Output: false
    ```

**Summary Table:**

| Comparison           | `==` (Loose) | `===` (Strict) |
| :------------------- | :----------- | :------------- |
| `undefined == null`  | `true`       | `false`        |
| `undefined == 0`     | `false`      | `false`        |
| `undefined == false` | `false`      | `false`        |
| `undefined == ''`    | `false`      | `false`        |
| `undefined == NaN`   | `false`      | `false`        |
| `undefined == undefined` | `true`       | `true`         |

**Best Practice:**

Always use the **strict equality operator (`===`)** when comparing `undefined` (or any other values) unless you specifically intend for type coercion. This leads to more predictable and robust code by avoiding unexpected coercions.

If you specifically want to check if a variable is either `undefined` *or* `null`, the `== null` check is idiomatic because `undefined == null` is `true` and `null == null` is `true`, while no other values behave this way with `null`.

```javascript
let myVar; // undefined
// myVar = null; // null
// myVar = 0; // 0
// myVar = false; // false

if (myVar == null) {
  console.log("myVar is either undefined or null");
}

if (myVar === undefined) {
  console.log("myVar is strictly undefined");
}

if (myVar === null) {
  console.log("myVar is strictly null");
}
```

---

## 15. Best practices to avoid bugs due to `undefined` or `not defined`

Preventing `undefined` and `not defined` bugs is crucial for writing robust JavaScript. Here are key best practices:

### 1. Always Declare Variables:

* **Use `let` or `const` always:** Never rely on implicit global variable creation (which happens in non-strict mode if you assign to an undeclared variable). Always declare your variables explicitly.
* **Prefer `const` over `let`, `let` over `var`:**
    * `const`: For values that won't change. Forces immediate initialization, preventing `undefined` at the point of declaration.
    * `let`: For values that will be reassigned. Block-scoping helps contain their visibility.
    * `var`: Avoid `var` in modern JavaScript due to its hoisting and function-scoping quirks that often lead to unexpected `undefined` or variable leakage.

### 2. Initialize Variables at Declaration (where possible):

* When you declare a variable, assign it an initial value if you know what it should be. This removes the possibility of it being `undefined` unexpectedly.
    ```javascript
    // Bad
    let userName;
    // ... many lines later ...
    if (userLoggedIn) {
      userName = fetchUserName();
    }
    // userName could be undefined if userLoggedIn is false

    // Good
    let userName = null; // Or empty string, depending on context
    if (userLoggedIn) {
      userName = fetchUserName();
    }
    ```

### 3. Use Strict Equality (`===`) for Comparisons:

* Avoid `==` (loose equality) as it performs type coercion, which can lead to unexpected results, especially with `undefined`, `null`, `0`, `false`, and `''`.
* Always use `===` unless you specifically need type coercion.

    ```javascript
    // Bad
    if (value == null) { /* handles both null and undefined */ }

    // Good (if you want to differentiate null from undefined)
    if (value === undefined) { /* ... */ }
    if (value === null) { /* ... */ }

    // Good (if you explicitly want to check for both null and undefined, often used)
    if (value === undefined || value === null) { /* ... */ }
    // Or the more concise way using loose equality only for this specific check:
    if (value == null) { /* ... */ }
    ```

### 4. Guard Clauses / Early Returns for Function Arguments:

* Validate function arguments at the beginning of your functions to ensure they are not `undefined` if they are required.

    ```javascript
    function processUser(user) {
      if (user === undefined || user === null) { // Or if (!user) for truthiness check
        console.error("User object is required.");
        return; // Early exit
      }
      // Proceed with processing user
      console.log(`Processing user: ${user.name}`);
    }

    processUser(undefined);
    processUser({ name: "Alice" });
    ```

### 5. Check for Object Property Existence Safely:

* When accessing potentially non-existent object properties, use:
    * **Optional Chaining (`?.`):** (ES2020+) This is the cleanest way to prevent `TypeError` when accessing properties of potentially `null` or `undefined` parents.

        ```javascript
        const user = {};
        // console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
        console.log(user.address?.street); // Output: undefined (safe)

        const anotherUser = {
          address: {
            street: "123 Main St"
          }
        };
        console.log(anotherUser.address?.street); // Output: "123 Main St"
        ```
    * **Logical AND (`&&`) operator (older way):**

        ```javascript
        const user = {};
        console.log(user.address && user.address.street); // Output: undefined
        ```
    * **`typeof` for properties (less common for objects):**
        ```javascript
        const user = {};
        if (typeof user.address === 'undefined') {
          console.log("address property does not exist on user");
        }
        ```

### 6. Use Nullish Coalescing Operator (`??`): (ES2020+)

* This operator provides a default value for `null` or `undefined` values, without affecting other "falsy" values like `0` or `''`.

    ```javascript
    let userName = undefined;
    const displayName = userName ?? "Guest"; // Output: "Guest"

    let count = 0;
    const actualCount = count ?? 1; // Output: 0 (unlike ||, which would make it 1)

    console.log(displayName);
    console.log(actualCount);
    ```

### 7. Leverage Linting Tools (ESLint):

* Configure ESLint (with recommended rules like `eslint:recommended` or a stricter preset like AirBnB) to enforce coding standards. Linters can warn about:
    * Undeclared variables.
    * Using `var` where `let`/`const` is preferred.
    * Unsafe `==` comparisons.
    * Accessing variables before their `let`/`const` declaration (TDZ).

### 8. Be Mindful of Function Return Values:

* Always ensure your functions explicitly return a value if that value is expected. If a function doesn't return anything, it will implicitly return `undefined`.

### 9. Debugging Tools:

* Use browser DevTools (Scope panel, Watch expressions) to see variable values and scope chain.

By adopting these practices, you can significantly reduce the occurrence of `undefined` and `not defined` related bugs in your JavaScript applications.

---

## 16. Debugging tips: using `console.log`, `typeof`, optional chaining, etc.

Debugging `undefined` or `not defined` issues requires systematic approaches. Here are effective tips:

1.  **Strategic `console.log()` for Value Inspection:**
    * **Log the variable itself:** The simplest way to see its value.
        ```javascript
        let myVar;
        console.log("myVar:", myVar); // Output: myVar: undefined
        // If myVar was undeclared, this would be ReferenceError in most cases.
        ```
    * **Log with object shorthand (ES6+):** This automatically labels the output with the variable name, making logs much clearer.
        ```javascript
        let firstName = "Alice";
        let lastName;
        // console.log(unknownVar); // Would be ReferenceError

        console.log({ firstName, lastName });
        // Output: { firstName: 'Alice', lastName: undefined }
        ```
    * **Log before and after operations:** Pinpoint exactly where a variable's value changes or becomes `undefined`.
        ```javascript
        let userProfile = {};
        console.log("Before assignment:", userProfile.name); // undefined
        userProfile.name = "Bob";
        console.log("After assignment:", userProfile.name);  // Bob
        ```

2.  **Using `typeof` for Type and Existence Checks:**
    * **Check for `undefined` value:**
        ```javascript
        let data;
        if (typeof data === 'undefined') {
          console.log("Data is undefined.");
        }
        ```
    * **Check for `not defined` (undeclared variable):** This is the **only** safe way to check if a variable *might not be declared at all* without throwing a `ReferenceError`.
        ```javascript
        // console.log(nonExistent); // Would throw ReferenceError

        if (typeof nonExistent === 'undefined') {
          console.log("nonExistent is truly not defined (or explicitly undefined).");
          // Proceed to declare it if needed:
          // let nonExistent = "now exists";
        }
        ```
    * **Distinguish from `null`:**
        ```javascript
        let val = null;
        console.log(typeof val); // "object"
        console.log(typeof undefined); // "undefined"
        ```

3.  **Browser Developer Tools (The Most Powerful Aid):**
    * **Breakpoints:** Set breakpoints at lines where you suspect the variable's value is wrong.
    * **`Scope` Panel:** When paused at a breakpoint, the `Scope` panel (in Chrome/Firefox DevTools) is your best friend. It clearly shows:
        * `Local` variables (current function/block scope).
        * `Closure` variables (variables captured from outer lexical environments).
        * `Global` variables.
        * You can see the current value of each variable. If a variable is listed but its value is `undefined`, you know it's declared but unassigned. If it's not listed at all in any accessible scope, it's `not defined`.
    * **`Watch` Expressions:** Add suspicious variables to the `Watch` panel to monitor their values as you step through the code.
    * **`Console` during debugging:** While paused at a breakpoint, you can type variable names directly into the DevTools console. The console will evaluate them in the context of the paused scope, showing their current value. This is incredibly useful for testing assumptions.
    * **`Call Stack`:** Helps visualize the chain of function calls, which corresponds to the nested execution contexts and their lexical environments.

4.  **Optional Chaining (`?.`) for Object Properties:**
    * Use `?.` to prevent `TypeError` when accessing deeply nested properties that might be `null` or `undefined` at an intermediate level. It gracefully returns `undefined` instead of throwing an error.
    * ```javascript
        const data = { user: { profile: { name: "John" } } };
        // const data = {}; // What if data is empty?

        console.log(data.user?.profile?.name); // "John" or undefined (no error)
        console.log(data.user?.address?.street); // undefined (no error)
        ```

5.  **Nullish Coalescing Operator (`??`) for Default Values:**
    * Use `??` to provide a fallback value if a variable or expression evaluates to `null` or `undefined`. This prevents subsequent operations from failing due to `undefined`.
    * ```javascript
        let responseData = undefined; // Imagine this came from an API call
        const defaultName = "Guest";
        const userName = responseData?.user?.name ?? defaultName;
        console.log(userName); // Output: "Guest"
        ```

6.  **Linting Tools (ESLint, etc.):**
    * Set up a linter in your development environment. Linters can identify potential `undefined` or `not defined` issues (e.g., usage before declaration for `let`/`const`, implicit globals in non-strict mode) statically, *before* you even run your code.

By combining these methods, you can effectively pinpoint and resolve `undefined` and `not defined` issues, leading to more robust and predictable JavaScript applications.

---

## 17. Common JavaScript interview questions on this topic (with answers)

Here are some common interview questions on `undefined` vs `not defined` and related concepts, with concise yet comprehensive answers.

**Question 1: What is the difference between `undefined` and `not defined` in JavaScript?**

**Answer:**
`undefined` is a **primitive value** in JavaScript, indicating that a variable has been declared but has not been assigned a value, or that an object property doesn't exist. The variable `exists` and holds the value `undefined`.
`not defined` is **an error message (`ReferenceError`)**. It means that the JavaScript engine cannot find an identifier (variable, function, etc.) in the current scope or any accessible outer scopes. The variable literally `does not exist` or has not been declared.

**Question 2: Explain the behavior of `var`, `let`, and `const` when accessed before their declaration.**

**Answer:**
* **`var`**: When accessed before its declaration, a `var` variable will yield `undefined`. This is because `var` declarations are hoisted to the top of their function (or global) scope and are implicitly initialized to `undefined` during the creation phase of the execution context.
* **`let` and `const`**: When accessed before their declaration, both `let` and `const` variables will throw a `ReferenceError` ("Cannot access 'variable' before initialization"). This is because, while they are technically hoisted to the top of their block scope, they are placed in a "Temporal Dead Zone" (TDZ) and are not initialized until their actual declaration line is executed.

**Question 3: What is the Temporal Dead Zone (TDZ)?**

**Answer:**
The Temporal Dead Zone (TDZ) is a period of time during which `let` and `const` declarations exist but cannot be accessed. It begins at the start of the variable's lexical scope and ends when the variable's declaration is executed and it's initialized with a value. Attempting to access a variable within its TDZ results in a `ReferenceError`. The TDZ helps enforce a "declaration before use" principle, making `let`/`const` more predictable and robust than `var`.

**Question 4: Can `typeof` help you distinguish between `undefined` and `not defined`?**

**Answer:**
Partially. `typeof` will return the string `"undefined"` for variables that are either `undefined` (declared but unassigned) or for identifiers that are `not defined` (never declared at all).
`console.log(typeof myUndefinedVar); // "undefined"`
`console.log(typeof myUndeclaredVar); // "undefined"` (no ReferenceError here, this is a unique quirk of typeof)
So, `typeof` alone cannot strictly differentiate if a variable exists but is unassigned, or if it genuinely doesn't exist. However, it's the only operation that won't throw a `ReferenceError` for a truly undeclared variable.

**Question 5: What is the output of `console.log(a); var a = 10;` and why? What about `console.log(b); let b = 10;`?**

**Answer:**
1.  `console.log(a); var a = 10;` will output `undefined`.
    **Reason:** `var a;` is hoisted to the top of its scope, and `a` is initialized to `undefined` during the creation phase. The `console.log` executes before `a` is assigned `10`.
2.  `console.log(b); let b = 10;` will throw a `ReferenceError: Cannot access 'b' before initialization`.
    **Reason:** `let b;` is also hoisted, but `b` is placed in the Temporal Dead Zone (TDZ). Accessing `b` while it's in the TDZ results in a `ReferenceError`.

**Question 6: When would you use `null` instead of `undefined`?**

**Answer:**
You would use `null` when you want to explicitly indicate the **intentional absence of any object value** or the deliberate non-existence of a value.
* `undefined` typically implies a variable that hasn't been assigned yet by the system, or a missing property.
* `null` is an assignment explicitly made by a developer to convey that something is empty, unknown, or has no value.
For example, when initializing a variable that will later hold an object, you might set it to `null` initially: `let user = null;`. Or when a function is designed to return "no result," it might `return null;`.

**Question 7: How does `strict mode` affect `undefined` and `not defined` behavior?**

**Answer:**
`strict mode` makes JavaScript stricter, helping to prevent common pitfalls:
1.  **Implicit Global Variables:** In non-strict mode, assigning to an undeclared variable creates an implicit global. In `strict mode`, this behavior is forbidden and will throw a `ReferenceError` (e.g., `myVar = 10;` without `let`/`const`/`var` would be a `ReferenceError`). This prevents accidental global pollution and reduces `not defined` errors in the global scope.
2.  **`this` Binding:** In `strict mode`, `this` inside a function called directly (not as a method) is `undefined`, whereas in non-strict mode it defaults to the global object. This makes `this` more predictable.

---

## 18. Bonus: How this behaves differently in browsers vs Node.js

The core concepts of `undefined` and `not defined` (and `var`, `let`, `const`, hoisting, TDZ) are **standard ECMAScript specifications**, meaning they behave identically in both browser environments and Node.js.

The primary differences arise in the **global object** and the **default `this` binding in the global scope**.

### A. Global Object (`window` vs `global` / `globalThis`)

* **Browsers:** The global object is `window`.
    * `var` declarations and function declarations in the global scope become properties of the `window` object.
        ```javascript
        // In browser global scope
        var browserVar = "I'm global via window";
        function browserFunc() {}
        console.log(window.browserVar); // "I'm global via window"
        console.log(window.browserFunc); // f browserFunc() {}
        ```
    * `let` and `const` declarations in the global scope are *not* added as properties of the `window` object. They are held directly in the Global Lexical Environment's Declarative Environment Record.
        ```javascript
        // In browser global scope
        let browserLet = "I'm not on window";
        const browserConst = "Neither am I";
        console.log(window.browserLet); // undefined
        console.log(window.browserConst); // undefined
        ```

* **Node.js:** The global object is `global`.
    * Similar to browsers, `var` declarations and function declarations at the top level of a Node.js script *that is not a module* (i.e., a simple script run directly) become properties of the `global` object.
        ```javascript
        // In a Node.js script (e.g., run `node my-script.js`)
        var nodeVar = "I'm global via global";
        function nodeFunc() {}
        console.log(global.nodeVar); // "I'm global via global"
        console.log(global.nodeFunc); // [Function: nodeFunc]
        ```
    * However, Node.js files are treated as **CommonJS Modules by default**. In a CommonJS module, variables declared at the top level are **scoped to the module**, not the `global` object. This means they are **neither `undefined` nor `not defined` globally**, but module-scoped.
        ```javascript
        // Inside a Node.js module file (e.g., my-module.js)
        // Saved as my-module.js and then `require('./my-module.js')`
        var moduleVar = "I'm module-scoped var";
        let moduleLet = "I'm module-scoped let";
        const moduleConst = "I'm module-scoped const";

        console.log(moduleVar);   // "I'm module-scoped var"
        console.log(moduleLet);   // "I'm module-scoped let"
        console.log(moduleConst); // "I'm module-scoped const"

        console.log(global.moduleVar);   // undefined (not attached to global)
        console.log(global.moduleLet);   // undefined
        console.log(global.moduleConst); // undefined
        ```
    * **`globalThis` (ES2020):** This is a standardized way to access the global object regardless of the environment.
        ```javascript
        console.log(globalThis === window); // In browser: true
        console.log(globalThis === global); // In Node.js: true
        ```

### B. Default `this` Binding in Global Scope

* **Browsers (non-strict mode):** In the global scope, `this` refers to the `window` object.
* **Browsers (strict mode):** In the global scope, `this` is `undefined`.
* **Node.js (non-strict mode, top-level script):** `this` refers to the `global` object.
* **Node.js (in a CommonJS module):** At the top level of a CommonJS module, `this` refers to `module.exports` (or an empty object that becomes `module.exports`), **not** the global object. This is a crucial distinction.

    ```javascript
    // In a Node.js module file (e.g., my-module.js)
    console.log(this); // Output: {} (an empty object, represents module.exports)
    console.log(this === global); // Output: false

    // To access the global object in Node.js module:
    console.log(global.setTimeout); // Access via global
    ```

**Key Takeaways for `undefined` vs `not defined`:**

* The core rules of `undefined` (value for unassigned variables, missing properties) and `not defined` (`ReferenceError` for undeclared identifiers/TDZ) are **universal** across JavaScript environments.
* The differences mainly lie in *where* variables declared in the global scope end up (`window` vs `global` properties) and the default `this` binding in the global/module scope.
* In modern Node.js development, due to its module system, global variable pollution from top-level `var` is less of a concern than in older browser-based scripts. `let` and `const` further reinforce local scoping in both environments.

This concludes our comprehensive exploration of `undefined` vs `not defined` in JavaScript!
