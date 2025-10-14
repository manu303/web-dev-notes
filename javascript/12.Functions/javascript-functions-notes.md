# JavaScript Functions - Complete Notes

## Table of Contents
1. [Introduction to Functions](#introduction-to-functions)
2. [Function Declaration](#function-declaration)
3. [Function Parameters and Arguments](#function-parameters-and-arguments)
4. [Return Statement](#return-statement)
5. [Function Expressions](#function-expressions)
6. [Arrow Functions](#arrow-functions)
7. [Spread and Rest Operators](#spread-and-rest-operators)
8. [Object Destructuring](#object-destructuring)
9. [Object Creation and Prototypes](#object-creation-and-prototypes)
10. [Key Concepts Summary](#key-concepts-summary)

---

## Introduction to Functions

Functions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs more modular and maintainable.

### Basic Function Syntax
```javascript
function functionName() {
    // code to be executed
}
```

---

## Function Declaration

### Basic Function Example
```javascript
function greet(){
    console.log("Hello Coder Army");
    console.log("Mein badiya hu");
    console.log("Aur Kya chal rha hai");
}

// Function call
greet();
```

**Key Points:**
- Functions are declared using the `function` keyword
- Function body is enclosed in curly braces `{}`
- Functions must be called to execute: `greet()`
- Can contain multiple statements

---

## Function Parameters and Arguments

### Parameters vs Arguments
- **Parameters**: Variables listed in the function definition
- **Arguments**: Actual values passed to the function when called

### Addition Function Example
```javascript
// Parameters: number1, number2
function sum(number1, number2){
    console.log(number1 + number2);
}

// Arguments: 3, 4 and 10, 15
sum(3, 4);    // Output: 7
sum(10, 15);  // Output: 25
```

**Benefits:**
- Makes functions flexible and reusable
- Same function can work with different values
- Reduces code duplication

---

## Return Statement

### Understanding Return
The `return` statement sends a value back from the function to where it was called.

### Multiplication Function Example
```javascript
function multiply(number1, number2) {
    return number1 * number2;  // Returns the result
}

let result = multiply(4, 5);  // result = 20
console.log(result);          // Output: 20
```

**Important Notes:**
- `return` statement stops function execution
- Code after `return` won't execute
- Functions without `return` return `undefined`

### Return vs Console.log
```javascript
// This prints but doesn't return
function multiply1(a, b) {
    console.log(a * b);  // Prints to console
}

// This returns a value
function multiply2(a, b) {
    return a * b;        // Returns value for use
}
```

---

## Function Expressions

### Anonymous Function Expression
```javascript
const fun = function(){
    console.log("Hello Coder Army");
    console.log("Mein toh badiya hu");
    return "Money";
    
    // This line won't execute (unreachable code)
    console.log("aur kya chal rha");
}

console.log(fun());  // Calls function and prints return value
```

**Key Differences:**
- Function expressions create functions as values
- Can be stored in variables
- Can be anonymous (no function name)
- Not hoisted like function declarations

---

## Arrow Functions

### Syntax Evolution
```javascript
// Traditional function
function sum(number1, number2) {
    return number1 + number2;
}

// Arrow function (full syntax)
const sum = (number1, number2) => {
    return number1 + number2;
}

// Arrow function (concise syntax)
const sum = (number1, number2) => number1 + number2;

console.log(sum(3, 4));  // Output: 7
```

### Single Parameter Arrow Function
```javascript
// Parentheses optional for single parameter
const cube = number => number * number * number;

console.log(cube(8));  // Output: 512
```

**Arrow Function Benefits:**
- Shorter syntax
- Implicit return for single expressions
- Lexical `this` binding (advanced topic)

---

## Spread and Rest Operators

### Understanding the Three Dots (`...`)

#### Spread Operator (Expanding)
```javascript
let arr = [2, 3, 4, 5];
let arr2 = [...arr];  // Creates a copy of arr

console.log(arr2);    // Output: [2, 3, 4, 5]
```

#### Rest Operator (Collecting)
```javascript
const sum = function(...numbers){
    console.log(numbers);  // numbers is an array
}

sum(2, 3, 4);           // Output: [2, 3, 4]
sum(4, 6, 1, 10, 13);   // Output: [4, 6, 1, 10, 13]
sum(2, 3);              // Output: [2, 3]
```

**Key Differences:**
- **Spread**: Expands an array/object into individual elements
- **Rest**: Collects multiple elements into an array
- Same syntax (`...`) but opposite purposes

---

## Object Destructuring

### Basic Object Destructuring
```javascript
let obj = {
    name: "Rohit",
    age: 30,
    amount: 420,
}

// Extract specific properties
const {name, amount} = obj;
console.log(name, amount);  // Output: Rohit 420
```

### Destructuring in Function Parameters
```javascript
// Method 1: Destructuring in parameter
function fun({name, amount}){
    console.log(name, amount);
}

fun(obj);  // Output: Rohit 420

// Method 2: Regular parameter
function love(obj1){
    console.log(obj1);  // Prints entire object
}

love(obj);
```

**Benefits:**
- Extract only needed properties
- Cleaner code
- Avoid repetitive `obj.property` syntax

---

## Object Creation and Prototypes

### Object.create() Method
```javascript
let obj1 = {
    a: 1,
    b: 2,
}

let obj2 = {
    c: 1,
    d: 2,
}

// Create obj2 with obj1 as prototype
obj2 = Object.create(obj1);

// Alternative way (not recommended)
// obj2.__proto__ = obj1;
```

**Understanding Prototypes:**
- `Object.create()` creates a new object with specified prototype
- Prototype chain allows property inheritance
- `obj2` can access properties from `obj1`
- Modern way to set up inheritance

---

## Key Concepts Summary

### Function Types Comparison
| Feature | Function Declaration | Function Expression | Arrow Function |
|---------|---------------------|-------------------|----------------|
| Syntax | `function name() {}` | `const name = function() {}` | `const name = () => {}` |
| Hoisting | Yes | No | No |
| `this` binding | Dynamic | Dynamic | Lexical |
| Best for | General use | When function is a value | Short functions |

### Important Concepts to Remember

1. **Pass by Value vs Pass by Reference** (Homework Topic)
   - Primitives (numbers, strings) are passed by value
   - Objects and arrays are passed by reference
   - Understanding this affects how functions modify data

2. **Function Scope**
   - Variables declared in functions are local
   - Parameters are local to the function
   - Functions can access outer scope variables

3. **Best Practices**
   - Use descriptive function names
   - Keep functions small and focused
   - Use arrow functions for simple operations
   - Use regular functions for complex logic
   - Always handle return values appropriately

### Next Steps for Learning
- Practice with different parameter combinations
- Experiment with nested functions
- Learn about callback functions
- Understand closures
- Explore higher-order functions (map, filter, reduce)

---

## Practice Exercises

Try these exercises to reinforce your learning:

1. Create a function that takes three numbers and returns the largest one
2. Write an arrow function that checks if a number is even or odd
3. Create a function that uses rest parameters to find the sum of any number of arguments
4. Practice object destructuring with nested objects
5. Experiment with Object.create() to understand prototypal inheritance

Remember: The best way to learn functions is by writing and experimenting with code!