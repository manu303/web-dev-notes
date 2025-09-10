# JavaScript – Memory Concepts & Strings

## 1. Memory Concept Recap

### Primitive vs Non-Primitive Types
- **Primitive types** (numbers, strings, booleans, etc.) are **immutable** and stored directly in the **stack**.
- **Non-primitive types** (objects, arrays, functions) are stored as a **reference** in the stack, which points to the actual value in the **heap**.

### const Variables
- A `const` variable must be **declared and initialized** at the same time.
- You **cannot reassign** a new value to a `const` variable.
- For objects/arrays declared with `const`, you can still **mutate their internal values** (add, remove, modify properties) because the reference itself stays the same.
- But you **cannot assign** the variable to a completely new object — that would break the reference and throw an error.

## 2. Strings in JavaScript

### Declaration Methods
- **Double quotes**: `"Hello"`
- **Single quotes**: `'Hello'`
- **Backticks**: `` `Hello` `` – template literals (modern way)

Template literals allow embedding variables & expressions with `${}`:
```javascript
let name = "Manu";
console.log(`Hello, ${name}!`);
```

### Special Characters
- **New line**: `\n`
- **Escape character**: `\` – escapes the next character

### Accessing Characters
- Using **bracket notation**: `str[0]` (first char)
- Indexing starts at **0** from the start
- From the end: use negative indices with methods like `slice` (not bracket access)
- `charAt(index)` also returns a character

### Common String Methods

| Method | Description | Notes |
|--------|-------------|-------|
| `indexOf(substring)` | Index of first occurrence, or -1 if not found | Case-sensitive |
| `lastIndexOf(substring)` | Index of last occurrence | Case-sensitive |
| `includes(substring)` | Returns true or false if substring exists | |
| `slice(start, end)` | Returns substring from start to end (end not included) | Accepts negative indices |
| `substring(start, end)` | Similar to slice but does not accept negative indices | |
| `replace(search, newValue)` | Replaces first occurrence of search | |
| `replaceAll(search, newValue)` | Replaces all occurrences of search | |
| `trim()` | Removes whitespace from both ends | |
| `trimStart()` / `trimEnd()` | Remove whitespace only at start or end | |
| `toUpperCase()` | Converts to uppercase | |
| `toLowerCase()` | Converts to lowercase | |

### Creating Strings with new
You can create strings as objects:
```javascript
let strObj = new String("Hello");
console.log(typeof strObj); // "object"
```

Strings created with `new` are objects (stored in heap).

### Other Useful Properties & Methods
- **`.length`** → Returns string length
- **`.split(delimiter)`** → Splits a string into an array by the given delimiter:
```javascript
let words = "a,b,c".split(",");
console.log(words); // ["a","b","c"]
```

## 3. Quick Reference Table

| Feature | Example |
|---------|---------|
| Template literal | `` `Hi ${name}` `` |
| Escape newline | `"Line1\nLine2"` |
| Access char | `str[0]` / `str.charAt(0)` |
| Slice vs Substring | slice accepts negative indices; substring doesn't |
| Replace all occurrences | `replaceAll("x","y")` |
| Trim spaces | `trim()`, `trimStart()`, `trimEnd()` |
| Upper / Lower case | `toUpperCase()`, `toLowerCase()` |
| Split to array | `split(",")` |