# JavaScript Objects - Complete Guide

## What are Objects?

Objects in JavaScript are collections of key-value pairs that allow you to store and organize related data and functionality. They are one of the fundamental data types in JavaScript and are used extensively in real-world applications.

## Creating Objects

### 1. Object Literal Syntax (Most Common)

This is the simplest and most commonly used method to create objects:

```javascript
const obj = {
  0: 20,
  1: 50,
  2: 70,
  name: "rohit",
  account_balance: 420,
  gender: "Male",
  age: 30,
  "account number": 231230,
  undefined: 30,
  null: "mohan",
};

// Example: Car object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  isElectric: false,
};
```

### 2. Using the `new Object()` Constructor

```javascript
const person = new Object();

// Adding properties after creation
person.name = "Rohit";
person.age = 80;
person.gender = "Male";

// Alternative car example
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
```

### 3. Using Class Constructor (ES6+)

Classes provide a more structured way to create objects:

```javascript
class People {
  constructor(na, ag, gen) {
    this.name = na;
    this.age = ag;
    this.gender = gen;
  }
}

// Creating instances
let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Mohit", 30, "Female");
let per3 = new People("Aman", 21, "Male");

// Class example with Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const myCar = new Car("Ford", "Mustang", 2021);
```

## Accessing Object Properties

### 1. Dot Notation

```javascript
console.log(obj.gender); // "Male"
console.log(obj.name); // "rohit"
console.log(car.brand); // "Toyota"
```

### 2. Square Bracket Notation

```javascript
console.log(obj["account_balance"]); // 420
console.log(obj["account number"]); // 231230 (spaces in key)
console.log(obj["undefined"]); // 30
console.log(obj["null"]); // "mohan"
```

### 3. Special Cases

```javascript
// Numeric keys (automatically converted to strings)
console.log(obj["0"]); // 20
console.log(obj[1]); // 50
console.log(obj[2]); // 70

// Computed property names
const key1 = "name";
console.log(obj[key1]); // "rohit"
```

## Modifying Objects

### Adding Properties

```javascript
person.email = "rohit@example.com";
person["phone"] = "1234567890";
```

### Updating Properties

```javascript
person.name = "Mohit"; // Updates existing property
person["age"] = 25; // Updates using bracket notation
```

### Deleting Properties

```javascript
delete person.age; // Removes the age property
delete person["gender"]; // Removes using bracket notation
```

## Essential Object Methods

### 1. `Object.keys()` - Get All Property Names

```javascript
let obj = {
  name: "rohit",
  age: 30,
  account_balance: 420,
  gender: "male",
};

const keys = Object.keys(obj);
console.log(keys); // ["name", "age", "account_balance", "gender"]
```

### 2. `Object.values()` - Get All Property Values

```javascript
const values = Object.values(obj);
console.log(values); // ["rohit", 30, 420, "male"]
```

### 3. `Object.entries()` - Get Key-Value Pairs

```javascript
const entries = Object.entries(obj);
console.log(entries);
// [["name", "rohit"], ["age", 30], ["account_balance", 420], ["gender", "male"]]
```

### 4. `Object.assign()` - Merge Objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj4 = { e: 5, f: 6 };

// Method 1: Using Object.assign()
const merged = Object.assign({}, obj1, obj2, obj4);
console.log(merged); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

// Method 2: Using Spread Operator (ES6+)
const merged2 = { ...obj1, ...obj2, ...obj4 };
console.log(merged2); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

### 5. `Object.freeze()` - Prevent Modifications

```javascript
const frozenObj = Object.freeze({
  name: "John",
  age: 25,
});

frozenObj.age = 30; // This won't work
delete frozenObj.name; // This won't work
frozenObj.city = "NYC"; // This won't work
```

### 6. `Object.seal()` - Allow Modification but Prevent Addition/Deletion

```javascript
const sealedObj = Object.seal({
  name: "John",
  age: 25,
});

sealedObj.age = 30; // This works (modification allowed)
delete sealedObj.name; // This won't work (deletion prevented)
sealedObj.city = "NYC"; // This won't work (addition prevented)
```

## Advanced Concepts

### Nested Objects

```javascript
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "gaming", "coding"],
};

// Accessing nested properties
console.log(user.address.city); // "New York"
console.log(user.hobbies[0]); // "reading"
```

### Object Destructuring

```javascript
const person = {
  name: "Alice",
  age: 28,
  city: "Boston",
};

// Basic destructuring
const { name, age, city } = person;
console.log(name); // "Alice"

// Destructuring with different variable names
const { name: personName, age: personAge } = person;
console.log(personName); // "Alice"

// Nested destructuring
const user = {
  info: {
    name: "Bob",
    email: "bob@example.com",
  },
};

const {
  info: { name: userName, email },
} = user;
console.log(userName); // "Bob"
```

### Spread Operator with Objects

```javascript
const original = { a: 1, b: 2 };
const copy = { ...original }; // Shallow copy
const extended = { ...original, c: 3 }; // Copy and add new property
const overridden = { ...original, b: 99 }; // Copy and override property

console.log(copy); // {a: 1, b: 2}
console.log(extended); // {a: 1, b: 2, c: 3}
console.log(overridden); // {a: 1, b: 99}
```

## Key Points to Remember

1. **Property Names**: Can be strings, numbers, or symbols. Numbers are automatically converted to strings.

2. **Special Characters**: Use square brackets for property names with spaces or special characters.

3. **Dynamic Access**: Use square brackets when the property name is stored in a variable.

4. **Object Mutability**: Objects are mutable by default unless frozen or sealed.

5. **Reference Type**: Objects are passed by reference, not by value.

6. **Method vs Property**: Objects can contain both data (properties) and functions (methods).

## Common Use Cases

- **Data Storage**: Organizing related information
- **Configuration Objects**: Storing application settings
- **API Responses**: Handling JSON data from servers
- **State Management**: Managing application state
- **Modeling Real-World Entities**: Cars, users, products, etc.

Objects are fundamental to JavaScript programming and understanding them thoroughly will help you build more effective and organized code!
