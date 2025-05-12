# 🚀 JavaScript Mastery Roadmap
> *From Zero to JavaScript Hero*

<div align="center">
  <img src="https://img.shields.io/badge/Level-Beginner%20to%20Advanced-blue?style=for-the-badge" alt="Level: Beginner to Advanced">
  <img src="https://img.shields.io/badge/Focus-Practical%20Mastery-orange?style=for-the-badge" alt="Focus: Practical Mastery">
  <img src="https://img.shields.io/badge/Format-Guided%20Practice-green?style=for-the-badge" alt="Format: Guided Practice">
</div>

## 📋 Table of Contents

- [Phase 1: JavaScript Fundamentals](#phase-1-javascript-fundamentals)
- [Phase 2: DOM Manipulation & Browser APIs](#phase-2-dom-manipulation--browser-apis)
- [Phase 3: Advanced JavaScript Concepts](#phase-3-advanced-javascript-concepts)
- [Phase 4: Modern JavaScript & Tooling](#phase-4-modern-javascript--tooling)
- [Phase 5: Testing & Performance](#phase-5-testing--performance)
- [Phase 6: Frameworks & Libraries](#phase-6-frameworks--libraries)
- [Phase 7: Expert Level JavaScript](#phase-7-expert-level-javascript)
- [Essential Resources](#essential-resources)

---

## Phase 1: JavaScript Fundamentals
> *Build your foundation with rock-solid fundamentals*

### Week 1-2: Core Syntax & Basic Data Types

#### Core Concepts:
- Variables (`var`, `let`, `const`) and scope
- Primitive data types: `String`, `Number`, `Boolean`, `null`, `undefined`
- Type conversion and coercion
- Basic operators and expressions
- Conditional statements (`if`, `else`, `switch`)
- Loops (`for`, `while`, `do-while`)

#### Practice Session 1: Variables & Data Types
```javascript
// Practice identifying the output of these operations
let a = 5;
const b = "10";
let result = a + b;
console.log(result); // What's the output?
console.log(typeof result); // What's the type?

// Convert string to number in 3 different ways
const numStr = "42";
// Your solutions here

// Demonstrate variable scoping with examples
// Your solutions here
```

#### Practice Session 2: Control Flow
```javascript
// Create a function that checks if a number is even, odd, or neither (decimal)
function checkNumber(num) {
  // Your solution here
}

// Implement FizzBuzz for numbers 1-20
// Print "Fizz" for multiples of 3, "Buzz" for multiples of 5
// and "FizzBuzz" for multiples of both
// Your solution here
```

### Week 3-4: Functions & Objects

#### Core Concepts:
- Function declarations and expressions
- Arrow functions
- Function parameters and return values
- Objects and properties
- Object methods
- Arrays and array methods
- JSON data format

#### Practice Session 3: Functions
```javascript
// Create a function that calculates the area of different shapes
// Implement function overloading based on parameters
function calculateArea() {
  // Your solution here
}

// Create a higher-order function that accepts a function as an argument
function operate(a, b, operation) {
  // Your solution here
}

// Convert these function declarations to arrow functions
function multiply(a, b) { return a * b; }
function greet(name) { return `Hello, ${name}!`; }
```

#### Practice Session 4: Objects & Arrays
```javascript
// Create an object representing a book with properties and methods
const book = {
  // Your solution here
};

// Create an array of numbers and perform these operations:
// 1. Filter out odd numbers
// 2. Double each remaining number
// 3. Calculate the sum
// Use array methods chaining
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your solution here
```

---

## Phase 2: DOM Manipulation & Browser APIs
> *Connect JavaScript to the visual world of the browser*

### Week 5-6: DOM Basics

#### Core Concepts:
- The Document Object Model (DOM)
- Selecting DOM elements
- Modifying element content and attributes
- Creating and removing elements
- Event handling (click, keyboard, form events)
- Event bubbling and delegation

#### Practice Session 5: DOM Selection & Manipulation
```html
<!-- Create a simple HTML file with these elements -->
<div id="container">
  <h1 class="title">DOM Practice</h1>
  <p class="text">First paragraph</p>
  <p class="text">Second paragraph</p>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <button id="btn">Click Me</button>
</div>

<script>
  // Select elements using different methods
  // 1. Get element by ID
  // 2. Get elements by class name
  // 3. Query selector
  // 4. Query selector all
  
  // Modify text content of the h1
  
  // Add a new class to all paragraphs
  
  // Create a new list item and add it to the list
</script>
```

#### Practice Session 6: Event Handling
```html
<div id="container">
  <button id="btn1">Button 1</button>
  <button id="btn2">Button 2</button>
  <form id="myForm">
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button type="submit">Submit</button>
  </form>
  <div id="output"></div>
</div>

<script>
  // 1. Add a click event listener to btn1 that changes its text
  
  // 2. Add a mouseover event to btn2 that changes its background color
  
  // 3. Add a form submission handler that prevents the default action
  // and displays the input value in the output div
  
  // 4. Implement event delegation for the container to handle all button clicks
</script>
```

### Week 7-8: Browser APIs

#### Core Concepts:
- Browser storage (localStorage, sessionStorage)
- Fetch API and AJAX
- Timers (setTimeout, setInterval)
- Geolocation API
- Canvas API basics
- Web Audio API basics

#### Practice Session 7: Browser Storage & Fetch
```javascript
// Create a function to save user preferences to localStorage
function savePreferences(theme, fontSize, language) {
  // Your solution here
}

// Create a function to load and apply user preferences
function loadPreferences() {
  // Your solution here
}

// Use the Fetch API to get data from a JSON placeholder API
// and display the results
function fetchUsers() {
  // Your solution here
}
```

#### Practice Session 8: Timers & Animation
```javascript
// Create a countdown timer that updates every second
function startCountdown(seconds) {
  // Your solution here
}

// Create a simple animation using setInterval
// (e.g., moving a div across the screen)
function animate() {
  // Your solution here
}

// Create a debounce function to limit how often a function can be called
function debounce(func, delay) {
  // Your solution here
}
```

---

## Phase 3: Advanced JavaScript Concepts
> *Deepen your understanding with advanced language features*

### Week 9-10: Advanced Functions & Closures

#### Core Concepts:
- Scope and closures
- Lexical environment
- Immediately Invoked Function Expressions (IIFE)
- Currying and partial application
- Function composition
- Callback patterns
- `this` keyword and binding methods

#### Practice Session 9: Closures & Scope
```javascript
// Create a counter function using closures
function createCounter() {
  // Your solution here
}

// Create a private variable using closures
function createWallet(initialAmount) {
  // Your solution here
}

// Implement a memoization function for caching expensive function calls
function memoize(fn) {
  // Your solution here
}
```

#### Practice Session 10: Function Binding & Context
```javascript
// Create an object with methods that use 'this'
const person = {
  // Your solution here
};

// Fix the 'this' context in these scenarios:
// 1. When a method is passed as a callback
// 2. When using an arrow function
// 3. Using explicit binding (call, apply, bind)

// Implement your own version of bind
Function.prototype.myBind = function(context, ...args) {
  // Your solution here
};
```

### Week 11-12: Asynchronous JavaScript

#### Core Concepts:
- Callbacks and callback hell
- Promises and Promise chaining
- Async/await syntax
- Error handling in asynchronous code
- Event loop and JavaScript runtime
- Microtasks and macrotasks
- Asynchronous patterns and best practices

#### Practice Session 11: Promises
```javascript
// Convert this callback-based function to use Promises
function getUser(id, callback) {
  setTimeout(() => {
    if (id < 0) {
      callback(new Error('Invalid ID'));
    } else {
      callback(null, { id, name: `User ${id}` });
    }
  }, 1000);
}

// Chain multiple promises to get a user, then their posts, then their comments
function getUserData(userId) {
  // Your solution here
}

// Create a function that runs multiple promises in parallel and waits for all to complete
function fetchAllData(userIds) {
  // Your solution here
}
```

#### Practice Session 12: Async/Await
```javascript
// Convert the Promise chain from the previous exercise to use async/await
async function getUserData(userId) {
  // Your solution here
}

// Implement proper error handling with async/await
async function fetchWithErrorHandling() {
  // Your solution here
}

// Create a sleep function using promises and use it with async/await
function sleep(ms) {
  // Your solution here
}

// Use it in an async function
async function processingWithDelay() {
  // Your solution here
}
```

---

## Phase 4: Modern JavaScript & Tooling
> *Leverage modern JS features and developer tools*

### Week 13-14: ES6+ Features

#### Core Concepts:
- Destructuring assignments
- Spread and rest operators
- Template literals
- Default parameters
- Object and array enhancements
- Map, Set, WeakMap, WeakSet
- Symbols and iterators
- Generators

#### Practice Session 13: Modern Syntax
```javascript
// Refactor this code using modern JS features
function getFullName(user) {
  const firstName = user.firstName || 'Anonymous';
  const lastName = user.lastName || '';
  return firstName + ' ' + lastName;
}

const parts = ['shoulders', 'knees'];
const lyrics = ['head', parts, 'and', 'toes'];

// Combine arrays using spread operator
// Your solution here

// Use destructuring to extract values from nested objects
const person = {
  name: {
    first: 'John',
    last: 'Doe'
  },
  address: {
    city: 'New York',
    state: 'NY',
    country: 'USA'
  }
};
// Your solution here
```

#### Practice Session 14: Collections & Iterators
```javascript
// Implement a custom iterable object
const customRange = {
  // Your solution here
};

// Create a function that removes duplicates using Set
function removeDuplicates(array) {
  // Your solution here
}

// Use Map to create a cache with time expiration
function createCache(defaultExpiryMs) {
  // Your solution here
}

// Create a generator function for Fibonacci sequence
function* fibonacci() {
  // Your solution here
}
```

### Week 15-16: Modules & Build Tools

#### Core Concepts:
- JavaScript modules (ES modules, CommonJS)
- Import and export syntax
- Dynamic imports
- Package management with npm/yarn
- Bundlers overview (Webpack, Rollup, Parcel)
- Transpilers (Babel)
- Linters and formatters (ESLint, Prettier)

#### Practice Session 15: Modules
```javascript
// Create a module for mathematical utilities
// math.js
// Your solution here

// Create a module for data formatting utilities
// format.js
// Your solution here

// Import and use these modules in a main file
// main.js
// Your solution here

// Create a module with dynamic imports based on conditions
// app.js
// Your solution here
```

#### Practice Session 16: NPM & Build Tools
```bash
# Create a new project with npm
# Your solution here

# Install dependencies including development tools
# Your solution here

# Create a basic webpack configuration
# Your solution here

# Set up ESLint and Prettier
# Your solution here
```

---

## Phase 5: Testing & Performance
> *Write reliable, high-performance JavaScript code*

### Week 17-18: Testing JavaScript

#### Core Concepts:
- Testing philosophies (unit, integration, e2e)
- Test frameworks (Jest, Mocha)
- Assertion libraries
- Test runners
- Mocks and stubs
- Test-driven development (TDD)
- Code coverage

#### Practice Session 17: Unit Testing
```javascript
// Function to test
function calculateTax(amount, rate) {
  if (typeof amount !== 'number' || typeof rate !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
  if (amount < 0 || rate < 0) {
    throw new Error('Arguments must be positive numbers');
  }
  return amount * rate / 100;
}

// Write Jest tests for this function
// calculateTax.test.js
// Your solution here

// Create a mock for an API service and test a function that uses it
// apiService.js
// Your solution here
```

#### Practice Session 18: TDD Practice
```javascript
// Using TDD, implement a shopping cart with these features:
// - Add items
// - Remove items
// - Update quantities
// - Calculate total
// - Apply discount codes

// Write tests first, then implement
// shoppingCart.test.js
// Your solution here

// shoppingCart.js
// Your solution here
```

### Week 19-20: Performance Optimization

#### Core Concepts:
- JavaScript performance metrics
- Memory management and garbage collection
- Performance profiling
- Common bottlenecks
- Optimization techniques
- Web Workers
- Virtual DOM concept

#### Practice Session 19: Performance Analysis
```javascript
// Analyze and optimize this function for performance
function findDuplicates(array) {
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
}

// Optimize this DOM manipulation code
function updateList(items) {
  const list = document.getElementById('list');
  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}
```

#### Practice Session 20: Web Workers
```javascript
// Create a web worker for computationally intensive tasks
// main.js
// Your solution here

// worker.js
// Your solution here

// Implement a throttle function to limit function calls
function throttle(func, limit) {
  // Your solution here
}
```

---

## Phase 6: Frameworks & Libraries
> *Apply your JavaScript knowledge in popular frameworks*

### Week 21-22: React Fundamentals

#### Core Concepts:
- React basics (components, props, state)
- Hooks (useState, useEffect)
- JSX syntax
- Rendering and lifecycle
- Forms and events
- Context API
- React Router

#### Practice Session 21: React Components & State
```jsx
// Create a counter component with increment/decrement buttons
function Counter() {
  // Your solution here
}

// Create a form component with validation
function SignupForm() {
  // Your solution here
}
```

#### Practice Session 22: React Hooks
```jsx
// Create a custom hook for fetching data
function useFetch(url) {
  // Your solution here
}

// Create a component that uses multiple hooks
function UserProfile({ userId }) {
  // Your solution here
}
```

### Week 23-24: Node.js & Express

#### Core Concepts:
- Node.js runtime environment
- CommonJS modules
- npm ecosystem
- Express framework
- RESTful API design
- Middleware concept
- Error handling

#### Practice Session 23: Node.js Basics
```javascript
// Create a file system utility module
// fileUtils.js
// Your solution here

// Create a simple command-line tool
// cli.js
// Your solution here
```

#### Practice Session 24: Express API
```javascript
// Create a RESTful API with Express
// server.js
// Your solution here

// Implement middleware for authentication
// auth.js
// Your solution here
```

---

## Phase 7: Expert Level JavaScript
> *Master advanced patterns and architecture*

### Week 25-26: Design Patterns & Architecture

#### Core Concepts:
- Common design patterns (Singleton, Factory, Observer)
- Architectural patterns (MVC, MVVM)
- State management
- Dependency injection
- Inversion of control
- Functional programming principles
- Reactive programming

#### Practice Session 25: Design Patterns
```javascript
// Implement the Singleton pattern
const Database = (function() {
  // Your solution here
})();

// Implement the Observer pattern
class EventEmitter {
  // Your solution here
}

// Implement the Factory pattern
class UserFactory {
  // Your solution here
}
```

#### Practice Session 26: Application Architecture
```javascript
// Design a state management system
class Store {
  // Your solution here
}

// Implement a simple MVC architecture
// model.js, view.js, controller.js
// Your solution here
```

### Week 27-28: Advanced Async & Performance

#### Core Concepts:
- Advanced Promise patterns
- Async iterators and generators
- Worker threads in Node.js
- Service workers
- Memory optimization techniques
- Performance measurement
- Rendering optimization

#### Practice Session 27: Advanced Async Patterns
```javascript
// Implement a rate limiter for API calls
function createRateLimiter(maxCalls, timeWindow) {
  // Your solution here
}

// Create a promise pool for limiting concurrent operations
function promisePool(promiseFns, concurrency) {
  // Your solution here
}

// Implement async iteration for paginated API results
async function* fetchPaginatedData(baseUrl) {
  // Your solution here
}
```

#### Practice Session 28: Performance Masters
```javascript
// Implement virtual scrolling for a large list
class VirtualScroller {
  // Your solution here
}

// Create a service worker for caching assets
// service-worker.js
// Your solution here

// Optimize a recursive function using memoization and tail call optimization
function optimizedFibonacci(n) {
  // Your solution here
}
```

---

## Essential Resources

### 📚 Books
- **"Eloquent JavaScript"** by Marijn Haverbeke
- **"You Don't Know JS"** series by Kyle Simpson
- **"JavaScript: The Good Parts"** by Douglas Crockford
- **"JavaScript Patterns"** by Stoyan Stefanov
- **"Secrets of the JavaScript Ninja"** by John Resig and Bear Bibeault

### 🌐 Online Courses
- [JavaScript.info](https://javascript.info/) - Modern JavaScript Tutorial
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JavaScript Guide
- [FreeCodeCamp JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Frontend Masters](https://frontendmasters.com/) - Various JavaScript courses

### 🧰 Tools & Practice
- [JSFiddle](https://jsfiddle.net/) - Online code playground
- [CodePen](https://codepen.io/) - Front-end development environment
- [LeetCode](https://leetcode.com/) - Algorithm challenges
- [JavaScript30](https://javascript30.com/) - 30 day vanilla JS coding challenge

### 📱 Apps
- [SoloLearn](https://www.sololearn.com/) - Mobile learning app
- [Codecademy Go](https://www.codecademy.com/mobile-app) - Practice on the go

### 🎙️ Podcasts
- [JavaScript Jabber](https://javascriptjabber.com/)
- [Syntax](https://syntax.fm/)
- [JS Party](https://jsparty.fm/)

### 📺 YouTube Channels
- [Traversy Media](https://www.youtube.com/user/TechGuyWeb)
- [Fun Fun Function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
- [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
- [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

### 🌟 Practice Platforms
- [Codewars](https://www.codewars.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Exercism](https://exercism.io/)
- [Edabit](https://edabit.com/)

### 💬 Communities
- [Stack Overflow](https://stackoverflow.com/)
- [Reddit r/javascript](https://www.reddit.com/r/javascript/)
- [DEV Community](https://dev.to/)
- [JavaScript Discord](https://discord.gg/javascript)
