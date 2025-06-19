# 🔥 Mastering Higher Order Functions (HOFs) in JavaScript 🔥

Welcome to the whiteboard session on Higher Order Functions! Prepare to visualize JavaScript's powerful functional core.

---

## 1. 📌 What is a Higher Order Function?

A Higher Order Function (HOF) is a function that either **takes one or more functions as arguments**, or **returns a function** as its result. It's how JavaScript treats functions as "first-class citizens" – just like any other data type (numbers, strings, objects).

### ✅ Visual Diagram Explanation

```
┌───────────────────┐               ┌───────────────────┐
│     Function A    │               │     Function B    │
│  (HOF Candidate)  │               │ (Argument/Return) │
└───────────────────┘               └───────────────────┘
          │                                   │
          │ Takes Function B as input         │ Returns Function B
          └─────────────────▶                 ◀─────────────────┘
          ┌───────────────────┐
          │     Function X    │
          │   (HOF confirmed) │
          └───────────────────┘

Memory Model:
┌─────────────────┐
│   GLOBAL SCOPE  │
│  ┌───────────┐  │
│  │ functionX │───┐  (HOF)
│  └───────────┘  │ │
│                 │ │
│  ┌───────────┐  │ │
│  │ functionY │◀───┘  (Passed to/Returned from HOF)
│  └───────────┘  │
└─────────────────┘
```

### 💻 JavaScript Code Example

```javascript
// ✅ Real-world usage: Analyzing user activity with HOFs

// A simple function to process user data
function processUserData(user) {
  return {
    id: user.id,
    fullName: user.firstName + ' ' + user.lastName,
    isActive: user.lastLogin > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Logged in last 7 days
  };
}

// Custom HOF: 'withAnalytics' - takes a function and returns a new one
// It "enhances" the original function with logging capabilities.
function withAnalytics(originalFunction) {
  // Returns a new function
  return function(...args) {
    console.log(`[ANALYTICS] Calling: ${originalFunction.name} with args:`, args);
    const result = originalFunction(...args);
    console.log(`[ANALYTICS] ${originalFunction.name} returned:`, result);
    return result;
  };
}

const users = [
  { id: 1, firstName: 'Alice', lastName: 'Smith', lastLogin: new Date('2025-06-18T10:00:00Z') },
  { id: 2, firstName: 'Bob', lastName: 'Johnson', lastLogin: new Date('2025-06-01T15:00:00Z') },
  { id: 3, firstName: 'Charlie', lastName: 'Brown', lastLogin: new Date('2025-06-19T08:30:00Z') }
];

// Using built-in HOFs: `map` and `filter`
const processedUsers = users
  .map(withAnalytics(processUserData)) // `map` is a HOF, `withAnalytics(processUserData)` returns a function
  .filter(user => user.isActive);     // `filter` is a HOF, `user => user.isActive` is a function argument

console.log("\nFinal Active Users:");
console.log(processedUsers);

/*
Expected Console Output:
[ANALYTICS] Calling: processUserData with args: [ { id: 1, firstName: 'Alice', lastName: 'Smith', lastLogin: ... } ]
[ANALYTICS] processUserData returned: { id: 1, fullName: 'Alice Smith', isActive: true }
[ANALYTICS] Calling: processUserData with args: [ { id: 2, firstName: 'Bob', lastName: 'Johnson', lastLogin: ... } ]
[ANALYTICS] processUserData returned: { id: 2, fullName: 'Bob Johnson', isActive: false }
[ANALYTICS] Calling: processUserData with args: [ { id: 3, firstName: 'Charlie', lastName: 'Brown', lastLogin: ... } ]
[ANALYTICS] processUserData returned: { id: 3, fullName: 'Charlie Brown', isActive: true }

Final Active Users:
[
  { id: 1, fullName: 'Alice Smith', isActive: true },
  { id: 3, fullName: 'Charlie Brown', isActive: true }
]
*/
```

### 🧠 1-line Takeaway

HOFs empower functions to participate directly in computation by consuming or producing other functions.

### 🌐 Real-World Application

HOFs are the backbone of functional programming patterns in JavaScript, enabling powerful data transformations (like processing API responses with `map` and `filter`) and creating reusable utility functions that can modify or enhance behavior (like `withAnalytics`).

---

## 2. 📌 Function as an Argument

This is one of the most common forms of HOFs. A function (the "callback" function) is passed into another function, which then executes the callback at an appropriate time or for specific data.

### ✅ Visual Diagram Explanation

```
Data Flow:
┌───────────┐    ┌────────────────────┐    ┌───────────┐
│ Input Data│    │ Higher Order       │    │ Output    │
│ (e.g., Array) │──▶│ Function (HOF)     │──▶│ Data      │
└───────────┘    │ (e.g., .filter())  │    └───────────┘
                 │                    │
                 │ Calls with data    │
                 │    ┌───────────┐   │
                 └────│ Callback  │◀───┘
                      │ Function  │
                      │ (e.g., isAdult)│
                      └───────────┘

Execution Flow (Conceptual Call Stack):
                               ┌─────────────────┐
       Call .filter() with array, isAdult
       │                         │ array
       │                         │ isAdult
       ▼                         │
┌───────────────────────────┐    │
│ .filter() (Context A)     │◀───┘
│   - Iterates array        │
│   - For each item:        │
│     ┌───────────────────┐ │
│     │ isAdult(item)     │ │  (Called by .filter())
│     └───────────────────┘ │
│     - Collects results    │
└───────────────────────────┘
```

### 💻 JavaScript Code Example

```javascript
// ✅ Real-world usage: Filtering products based on stock and category

const products = [
  { id: 'p001', name: 'Laptop Pro', category: 'Electronics', stock: 12, price: 1200 },
  { id: 'p002', name: 'Ergo Mouse', category: 'Accessories', stock: 50, price: 25 },
  { id: 'p003', name: 'Gaming Keyboard', category: 'Electronics', stock: 5, price: 150 },
  { id: 'p004', name: 'USB Hub', category: 'Accessories', stock: 0, price: 15 },
  { id: 'p005', name: '4K Monitor', category: 'Electronics', stock: 8, price: 300 }
];

// Callback function 1: Checks if product is in stock
function isInStock(product) {
  return product.stock > 0;
}

// Callback function 2: Checks if product is an electronic item
function isElectronic(product) {
  return product.category === 'Electronics';
}

// Input:
// products array
//
// Transformation 1: Filter for in-stock products
// products  ───▶  .filter(isInStock)  ───▶  inStockProducts
const inStockProducts = products.filter(isInStock);

console.log("In-Stock Products:", inStockProducts.map(p => p.name));
/*
Output:
In-Stock Products: [ 'Laptop Pro', 'Ergo Mouse', 'Gaming Keyboard', '4K Monitor' ]
*/

// Transformation 2: Filter for electronic products that are also in stock
// inStockProducts  ───▶  .filter(isElectronic)  ───▶  electronicStockProducts
const electronicStockProducts = inStockProducts.filter(isElectronic);

console.log("Electronic Products in Stock:", electronicStockProducts.map(p => p.name));
/*
Output:
Electronic Products in Stock: [ 'Laptop Pro', 'Gaming Keyboard', '4K Monitor' ]
*/
```

### 🧠 1-line Takeaway

Passing functions as arguments allows HOFs to customize their behavior without knowing the exact logic beforehand.

### 🌐 Real-World Application

This pattern is ubiquitous:
* **Filtering active users** from a list in a dashboard.
* **Sorting posts by likes** or date in a social media feed (`array.sort`).
* **Iterating over database query results** to perform an action on each record (`forEach`).
* **Handling events** in UI frameworks (e.g., `button.addEventListener('click', handleClick)`).

---

## 3. 📌 Function as Return Value

In this scenario, a HOF creates and returns a *new* function. This returned function often "remembers" the environment in which it was created (a concept known as **closure**, which we'll cover next). This is powerful for creating function factories or configurable functions.

### ✅ Visual Diagram Explanation

```
Function Factory Flow:
┌─────────────────────┐
│ outerFn(config)     │ (HOF)
│                     │
│  - Receives 'config'│
│  - Defines innerFn  │
│  - Returns innerFn  │
└─────────────────────┘
          │
          │  Returns
          ▼
┌─────────────────────┐
│ innerFn(data)       │ (New function instance)
│                     │
│  - Uses 'config'    │
│    (captured from   │
│     outerFn's scope)│
│  - Processes 'data' │
└─────────────────────┘

Call Stack (when outerFn is called, then innerFn is called later):

Initial Call:
┌───────────────────┐
│ Global Scope      │
│  - multiplier(2)  │
│  ┌───────────────┐│
│  │ multiplier(2) ││
│  └───────────────┘│
└───────────────────┘

After multiplier(2) returns:
┌───────────────────┐
│ Global Scope      │
│  - double = [function] │  <- Reference to the returned inner function
└───────────────────┘

Later Call:
┌───────────────────┐
│ Global Scope      │
│  - double(5)      │
│  ┌───────────────┐│
│  │ double(5)     ││
│  └───────────────┘│
└───────────────────┘
```

### 💻 JavaScript Code Example

```javascript
// ✅ Real-world usage: Creating personalized discount calculators

// HOF: `createDiscountCalculator`
// Takes a discount percentage and returns a new function that applies that discount.
function createDiscountCalculator(discountPercentage) {
  if (discountPercentage < 0 || discountPercentage > 1) {
    throw new Error("Discount percentage must be between 0 and 1.");
  }
  // This inner function is returned by createDiscountCalculator
  // It "remembers" the discountPercentage from its creation environment (closure).
  return function(price) {
    // Input:
    // price (e.g., 100)
    //
    // Transformation:
    // price * (1 - discountPercentage)
    //
    // Output:
    // discountedPrice (e.g., 80 for 0.2 discount)
    return price * (1 - discountPercentage);
  };
}

const products = [
  { id: 'pr001', name: 'Premium Coffee Maker', basePrice: 150 },
  { id: 'pr002', name: 'Handheld Blender', basePrice: 50 },
  { id: 'pr003', name: 'Smart Toaster', basePrice: 80 }
];

// Create specific discount functions using the HOF
const calculate20PercentOff = createDiscountCalculator(0.20); // discountPercentage = 0.20
const calculate10PercentOff = createDiscountCalculator(0.10); // discountPercentage = 0.10

console.log("Applying Discounts:");

products.forEach(product => {
  const priceAfter20Off = calculate20PercentOff(product.basePrice);
  const priceAfter10Off = calculate10PercentOff(product.basePrice);

  console.log(
    `Product: ${product.name} (Base: $${product.basePrice}) ` +
    `| 20% Off: $${priceAfter20Off.toFixed(2)} ` +
    `| 10% Off: $${priceAfter10Off.toFixed(2)}`
  );
});

/*
Expected Console Output:
Applying Discounts:
Product: Premium Coffee Maker (Base: $150) | 20% Off: $120.00 | 10% Off: $135.00
Product: Handheld Blender (Base: $50) | 20% Off: $40.00 | 10% Off: $45.00
Product: Smart Toaster (Base: $80) | 20% Off: $64.00 | 10% Off: $72.00
*/
```

### 🧠 1-line Takeaway

Returning a function allows you to create specialized, configurable functions that can be used later.

### 🌐 Real-World Application

* **Event Handler Factories:** Creating specific event listeners based on configuration (e.g., `createClickHandler(itemId)`).
* **Rate Limiting:** Building a function that, when called repeatedly, only executes its core logic after a certain delay (`createRateLimiter(delay)`).
* **Middleware:** Functions in frameworks like Express.js or Redux often return other functions to form a chain of processing.
* **Partial Application/Currying:** Creating new functions with some arguments pre-filled.
