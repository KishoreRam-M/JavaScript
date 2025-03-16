No, **`yield "Apple"` is not a key-value pair**. It simply **pauses the function and returns a value** when `next()` is called.  

Think of `yield` as a **return statement**, but one that **remembers where it left off** and continues from there in the next call.

---

### **Is `yield "Apple"` a Key-Value Pair?** ❌  
- **No!** `yield "Apple"` only returns `"Apple"`, nothing else.  
- But when `.next()` is called, it returns an **object** like this:  

```javascript
{ value: "Apple", done: false }
```
- This **object** has a `value` (the yielded value) and a `done` flag (`false` if the generator is not finished yet).  
- This **looks like a key-value pair** but is just the **output format** of `.next()`.  

---

### **Example of How `yield` Works**
```javascript
function* myGen() {
    yield "Apple";
    yield "Banana";
}

let gen = myGen();
console.log(gen.next()); // { value: "Apple", done: false }
console.log(gen.next()); // { value: "Banana", done: false }
console.log(gen.next()); // { value: undefined, done: true }
```
✅ **Here, `yield` is NOT storing a key-value pair—it just produces values step by step!** 🚀
