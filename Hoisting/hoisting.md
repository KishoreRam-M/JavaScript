### 💪 What Is Hoisting?

Hoisting is JavaScript's behavior of moving **declarations** to the top of their scope (either global or function scope) during the **Creation Phase** of execution.

Hoisting applies to:

* `var` declarations (hoisted to `undefined`)
* `let` and `const` (hoisted but not initialized → in TDZ)
* Function declarations (hoisted fully)
* Function expressions (variable hoisted, but not the function)

---

### 🧠 JavaScript Engine Execution Phases

JavaScript code is executed in two main phases:

#### 1. Creation Phase:

* Memory is allocated for variables and functions.
* `var` variables initialized to `undefined`
* `let` and `const` are hoisted but **not initialized** (in **TDZ**)
* Function declarations are fully hoisted with body

#### 2. Execution Phase:

* JavaScript runs code line-by-line using the memory setup from the Creation Phase

---

### 💡 Global Execution Context Example

```javascript
console.log(a);
var a = 10;
```

#### Creation Phase Memory:

```
a ➔ undefined
```

#### Execution Phase:

```
console.log(a); ➔ undefined
a = 10;
```

#### Timeline View:

| Line | Action         | Memory State |
| ---- | -------------- | ------------ |
| 1    | console.log(a) | a: undefined |
| 2    | a = 10         | a: 10        |

---

### 🧐 var vs let vs const

#### var

```javascript
console.log(x);
var x = 5;
```

Output: `undefined` (hoisted to `undefined`)

#### let

```javascript
console.log(y);
let y = 5;
```

Output: `ReferenceError` (TDZ)

#### const

```javascript
console.log(z);
const z = 5;
```

Output: `ReferenceError` (TDZ)

---

### 👨‍🔧 Function Declarations vs Expressions

#### Function Declaration

```javascript
hello();
function hello() {
  console.log("Hi");
}
```

Output: `Hi` (fully hoisted)

#### Function Expression

```javascript
greet();
var greet = function() {
  console.log("Hello");
};
```

Output: `TypeError: greet is not a function`

---

### 🌎 Function Execution Context Example

```javascript
function foo() {
  console.log(x);
  var x = 10;
  console.log(x);
}
foo();
```

#### Creation Phase:

```
x ➔ undefined
```

#### Execution Phase:

```
console.log(x); // undefined
x = 10;
console.log(x); // 10
```

---

### 🔀 Call Stack and Execution Context

#### Code:

```javascript
function one() {
  two();
}
function two() {
  console.log("Hello");
}
one();
```

#### Call Stack:

```
| two()     |
| one()     |
| Global    |
```

---

### 📊 Interview Tricky Problems

#### Problem 1:

```javascript
console.log(typeof foo);
var foo = function() {};
```

Output: `undefined` (foo is hoisted to undefined)

#### Problem 2:

```javascript
foo();
var foo = function() { console.log("Hi"); };
```

Output: `TypeError` (foo is undefined at time of call)

#### Problem 3:

```javascript
foo();
function foo() { console.log("Hi"); }
```

Output: `Hi` (function is hoisted)

#### Problem 4:

```javascript
console.log(a);
let a = 10;
```

Output: `ReferenceError` (TDZ)

#### Problem 5:

```javascript
function bar() {
  console.log(b);
  var b = 20;
}
bar();
```

Output: `undefined`

---

### 🔧 Real-World Bug Example

```javascript
function init() {
  console.log(active);
  var active = true;
}
init();
```

Output: `undefined` (expecting true)

#### Fix:

```javascript
function init() {
  let active = true;
  console.log(active);
}
```

Output: `true`

---

### 🔮 Visual Metaphors

1. 🔺 **Elevator Model**: Declarations go to the top (creation), then come down floor-by-floor (execution)
2. 🌿 **Fishing Rod Model**: You cast declarations into memory; the value is caught later.
3. 🌌 **Launchpad Model**: Setup (creation) before liftoff (execution)

---

### 🎓 10-Question Quiz

1. `console.log(a); var a = 1;` ➔ `undefined`
2. `console.log(b); let b = 2;` ➔ `ReferenceError`
3. `function x() { console.log(y); var y = 3; } x();` ➔ `undefined`
4. `console.log(typeof d); const d = 4;` ➔ `ReferenceError`
5. `foo(); var foo = () => {}` ➔ `TypeError`
6. `foo(); function foo(){return 1;} var foo=2;` ➔ `1`
7. `{ var x=1; } console.log(x);` ➔ `1`
8. `{ let y=1; } console.log(y);` ➔ `ReferenceError`
9. `var a=1; function a(){ } console.log(typeof a);` ➔ `number`
10. `console.log(g); let g = () => {};` ➔ `ReferenceError`
