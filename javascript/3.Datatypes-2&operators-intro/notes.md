# JavaScript Notes – Non Primitive Data Types, Type Conversion & Operators

---

## Non-Primitive Data Types in JavaScript

Previously, I learned about primitive data types. Now, moving to **non-primitive data types**, which mainly include:

### Array

- Used for storing multiple values in a single variable.
- In variables, we can store only one value, but in arrays, we can store many values.
- `typeof` an array returns `"object"` because behind the scenes, arrays are implemented as objects. (We’ll go deeper into this later.)
- Access values using **index** (position). Example:

```js
let arr = [10, 20, 30];
console.log(arr[1]); // 20
```

Limitation: In arrays, we must **remember** the index to access values.

### Object

- Stores values in ***key-value pairs***.

- Useful when we want to represent related information about a real-world entity.

- Unlike arrays, we don’t need to remember positions; instead, we use **keys**. **Keys provide context**.

Example:
```js
let person = {
  name: "John",
  age: 25,
  city: "New York"
};
console.log(person.name); // John
```
  
### Function

- Functions in JavaScript are also treated as **objects**, so they fall under non-primitive types.
- We can **store a function inside a variable**. This is not possible in many other languages.
- We use the `function` keyword (or arrow functions) to create and assign functions.
- Example:



```js
const greet = function() {
  console.log("Hello World");
};
greet();
```


---

## Type Conversion in JavaScript

JavaScript sometimes converts data types automatically (**type coercion**), but we can also do it manually.

### Number Conversion (`Number()`)

- `"123"` → `123`
- `"abc"` → `NaN` (Not a Number)
- `null` → `0`
- `undefined` → `NaN`
- `true` → `1`, `false` → `0`

### String Conversion (`String()`)

- Converts almost anything to string.
- Example:

```js
String(123); // "123"
String(true); // "true"
```


### Boolean Conversion (`Boolean()`)

- **Falsy values** (convert to `false`):
  - `0`, `""` (empty string), `null`, `undefined`, `NaN`
- **Truthy values** (convert to `true`):
  - Any non-zero number, non-empty string, objects, arrays, etc.

---

## Operators in JavaScript

### Arithmetic Operators

- `+` → Addition
- `-` → Subtraction
- `*` → Multiplication
- `/` → Division
- `%` → Modulus (remainder)

👉 Rule: Operators work **from left to right**. Multiplication and division (`* / %`) are evaluated before addition and subtraction (`+ -`).

To avoid confusion, always use parentheses `()` to control order. Example:

```js
let result = (10 + 2) * 5; // 60
```

### Assignment Operators

- `=` → Simple assignment
- `+=` → Add and assign
- `-=` → Subtract and assign
- `*=` → Multiply and assign
- `/=` → Divide and assign

Example:

```js
let x = 10;
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 6; // 4
```

## Summary

- Non-primitive data types → **Array, Object, Function**.
- Type conversion → Using `Number()`, `String()`, `Boolean()`. Remember **falsy** and **truthy** values.
- Operators → Learned **arithmetic** and **assignment** so far. Parentheses help in controlling operation precedence.
