# JavaScript Essentials: Detailed Notes

These notes cover fundamental JavaScript concepts, including object copying, destructuring, methods, and prototypes. They are designed for easy understanding and future reference.

---

## 1. Object Copying Techniques

### 1.1 Shallow Copy
- Created using assignment or `Object.assign()`.
- Copies property references for nested objects, not clone them.

```js
let obj1 = { a: 1, b: 2 };
let obj2 = obj1; // Both variables reference the same object
obj2.a = 10;
console.log(obj2, obj1); // {a:10,b:2} {a:10,b:2}
```

- Using `Object.assign`:
```js
const user = { name: "Rohit", balance: 420, address: { pincode: 246149, city: "kotdwar" } };
const user2 = Object.assign({}, user);
user2.address.pincode = 321314;
console.log(user.address.pincode); // 321314
```
- **Key point:** Nested objects remain shared between original and copy.

### 1.2 Deep Copy
- Creates a completely independent clone, including nested objects.
- Via `structuredClone()` (modern browsers & Node v17+).

```js
let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj3, obj1); // {a:20,b:2} {a:10,b:2}
```

- **Alternative methods:**
  - `JSON.parse(JSON.stringify(obj))` (limitations: functions, `undefined`, symbols lost).
  - Recursive cloning functions or libraries like Lodash's `_.cloneDeep()`.

---

## 2. Object Destructuring

### 2.1 Basic Destructuring
- Extract properties from objects into variables:
```js
let obj = { name: "Rohit", money: 430, balance: 30, age: 20, aadhar: "hfdsiohsai" };
const { name, balance, age } = obj;
```

### 2.2 Renaming Variables
```js
const { name: full_name, balance: amount, age: userAge } = obj;
```

### 2.3 Rest Operator in Destructuring
- Collect remaining properties:
```js
const { name, age, ...rest } = obj;
console.log(rest); // { money:430, balance:30, aadhar:"hfdsiohsai" }
```

### 2.4 Nested Object Destructuring
```js
let obj = {
  name: "Rohit",
  age: 20,
  arr: [90,40,60,80],
  address: { pincode:246149, city:"Kotdwar", state:"uk" }
};
// Extract nested fields:
const { address: { pincode, city } } = obj;
const { arr: [firstElement] } = obj;
console.log(firstElement); // 90
```

---

## 3. Array Destructuring

- Basic:
```js
const arr = [3,2,1,5,10];
const [first, second] = arr; // 3,2
```
- Skipping elements:
```js
const [first,,third] = arr; // 3,1
```
- Rest operator:
```js
const [first, second, ...rest] = arr;
console.log(rest); // [1,5,10]
```

---

## 4. Object Methods and `this`

### 4.1 Defining Methods
- Functions inside objects:
```js
let user = {
  name: "Rohit",
  amount: 420,
  greet: function() { console.log("Hello Coder Army"); },
  meet: function() { return 20; }
};
```
- Invoking methods:
```js
user.greet(); // logs message
console.log(user.meet()); // 20
```

### 4.2 Built-in Methods and `toString()`
- All objects inherit methods from `Object.prototype`, e.g., `toString()`:
```js
let obj = { name:"Rohit", amount:420, greet: function(){ return 10; } };
console.log(obj.toString()); // "[object Object]"
```

---

## 5. Prototypes and Inheritance

### 5.1 Prototype Chain
- Every object has an internal `[[Prototype]]` reference (`__proto__`) pointing to its prototype.
- Chain ends at `null`:
```js
let arr = [10,20,30,40];
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__ === null); // true
```

### 5.2 Inheriting Properties
- Assign prototype manually:
```js
let user1 = { name: "Rohit", age: 20 };
let user2 = { amount:20, money:50 };
user2.__proto__ = user1;
console.log(user2.name); // "Rohit"
```
- **Best practice:** Use `Object.create()` or `class` syntax, avoid direct `__proto__` mutation.

