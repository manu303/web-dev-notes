# Introduction to JavaScript

JavaScript (JS) was created in just **10 days** by **Brendan Eich** in 1995. Its main purpose is to **add interactivity to websites**. Here's a brief history:

- Initially, **Netscape** introduced JavaScript in its browser.  
- **Microsoft** created a similar language called **JScript**, which led to the **browser wars** in the late 1990s.  
- **ECMA** (European Computer Manufacturers Association) standardized the language under the name **ECMAScript**.  
- Internet Explorer gave developers free access to many features, which contributed to Netscape losing dominance.  
- Netscape then **open-sourced its code**, leading to the creation of **Mozilla Firefox**.  
- Later, **Google Chrome** was launched, dominating the browser market. Every browser now has its own **JavaScript engine**; Chrome uses the **V8 engine**.  

Eventually, developers realized the **V8 engine could run outside the browser**, which led to the creation of **Node.js**. Node.js allows us to **install JavaScript and run it directly in environments like VSCode**, enabling server-side programming with JS.

---

## Variables in JavaScript

Variables are used to **store data**. JavaScript provides three ways to declare variables: `let`, `const`, and `var`.

### `let`
- Can be **declared first and initialized later**.  
- Has **block scope** (exists only within the block `{}` it is defined in).

```javascript
let name;      // declared
name = "Manu"; // initialized later

// const
// Represents a constant value.
// Must be initialized at the time of declaration.
// Cannot be reassigned after initialization.
// Has block scope like let
const pi = 3.14; // must initialize immediately

// var
// Older way to declare variables in JavaScript.
// Has function scope, not block scope.
// Can be redeclared and reassigned.
// Behavior is different from let and const and will be discussed in detail later
var age = 25;
age = 26; // reassigning works

