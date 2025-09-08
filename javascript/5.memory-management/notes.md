# Memory Management in JavaScript

In JavaScript, memory management revolves around **primitive** and **non-primitive** (reference) data types. The runtime uses two main memory regions:

- **Stack** → Fast, smaller, used for static data like primitive values and references.  
- **Heap** → Larger, slower, used for objects, arrays, and functions (non-primitives).

---

## Primitive Types

Examples: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

- **Immutable** → Once assigned, the value itself cannot be changed.  
- Stored directly in the **stack**.  
- When a primitive is reassigned, a **new value** is created in memory, and the variable points to this new value.  

Example:

```js
let x = 10;
x = 20; // x now points to new memory location with value 20
```

---

## Non-Primitive (Reference) Types

Examples: `object`, `array`, `function`

- **Mutable** → Their content can be modified.  
- Stored in the **heap**, but the **reference (pointer)** is kept in the **stack**.  
- When a non-primitive is modified, the underlying data in the heap changes.  
- Since all references point to the same heap location, the update is reflected everywhere.  

Example:

```js
let arr = [1, 2];
let b = arr;
b.push(3);
console.log(arr); // [1, 2, 3] — both `arr` and `b` point to the same heap object
```

---

## Strings in JavaScript

- Strings are **primitives** and thus **immutable**.  
- Reassigning a string creates a **new memory allocation**.  
- If the new value is larger (e.g., replacing a small string with a much bigger one), the engine allocates new memory rather than trying to extend existing space.  
- Internally, JavaScript engines (like V8) may optimize this — in some cases, large strings can be allocated in the **heap** for efficiency.  

---

## Garbage Collection

- JavaScript uses **automatic garbage collection** (mainly reference-counting and reachability analysis).  
- If no variable references a memory location anymore, that memory is marked as free and can be reused.  

**Analogy:**  
Deleting a file doesn't instantly erase the bytes from disk.  
It simply removes the "path" to it. The space is treated as free and will be overwritten later.  

---

## Approximate Memory Split

For illustration: if a system has 4 GB RAM:  
- The **stack** might use only a few MBs (e.g., ~10 MB).  
- The **rest** is available for the **heap**.  

- **Stack** = references + primitives  
- **Heap** = actual objects and complex data  

---

## Summary

- **Primitives** → Stored in stack, immutable, reassignment creates new memory.  
- **Non-Primitives** → Stored in heap, mutable, references stored in stack.  
- **Strings** → Primitive, immutable, but may be heap-allocated depending on engine optimizations.  
- **Garbage Collector** → Frees unused memory automatically.