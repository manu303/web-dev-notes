# Numbers and Math in JavaScript (Nexus Course Notes)

## Numbers

- **Primitive numbers** can be created simply by assigning a value:
  ```js
  let x = 42;
  ```
  This creates a primitive number stored on the stack.

- **Number objects** can also be created with the `new` keyword:
  ```js
  let y = new Number(42);
  ```
  This creates a Number object (type = `"object"`) on the heap.

- **Equality checks:**
  - When you compare a primitive number with a Number object, the object is converted to a primitive, so the comparison by value works:
    ```js
    42 == new Number(42); // true
    ```
  - When you compare two different Number objects, they are compared by reference, not by value:
    ```js
    new Number(42) === new Number(42); // false
    ```

### Useful Number Methods
- `toFixed(n)`: returns the number with `n` digits after the decimal point.
- `toPrecision(n)`: returns the number with `n` total significant digits.
- `toExponential(n)`: returns the number in exponential notation with `n` digits after the decimal point.
- `toString()`: converts the number to a string.
- `valueOf()`: returns the primitive number value from a Number object.

## Math

- **Constants:**
  - `Math.PI`
  - `Math.E`
  - `Math.LN10`  
  (and many others, like `Math.LN2`, `Math.SQRT2`)

- **Random Numbers:**
  - `Math.random()` generates a floating-point number in the range `[0, 1)`.
  - Multiply by a range to scale it, use `Math.floor()` to get an integer.
  - General formula to get a random integer between `min` and `max` (inclusive):
    ```js
    Math.floor(Math.random() * (max - min + 1) + min);
    ```

  Example for a dice roll (Ludo game, 1–6):
  ```js
  const dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  console.log(dice); // 1 to 6
  ```
