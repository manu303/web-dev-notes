# JavaScript Operators Notes

## Comparison Operators

In JavaScript, comparison operators are used to compare values.  

- `==` → **Loose equality**  
  - Compares values after converting them to the same type (type coercion).  
  - Example:  
    - `5 == "5"` → `true` (string `"5"` converted to number `5`).  

- `===` → **Strict equality**  
  - Compares both type **and** value.  
  - No type conversion.  
  - Example:  
    - `5 === "5"` → `false` (number vs string).  

### Special behavior with `null` and `undefined`
- `null == undefined` → `true`  
  - Loose equality considers them equal.  
- `null === undefined` → `false`  
  - Because their types differ (`null` is object, `undefined` is its own type).  
- `null == 0` → `false`  
- With numeric comparisons:  
  - `null > 0` → `false`  
  - `null < 0` → `false`  
  - `null >= 0` → `true` (`null` converts to `0`)  
  - `null <= 0` → `true`  
- `undefined` with any number → always `false` (cannot be reliably converted to a number).  

👉 **Main rule:**  
- Use `===` to avoid the traps of type coercion.  
- `==` is unpredictable in edge cases, especially with `null` and `undefined`.  

---

## Logical Operators

Logical operators work with **boolean values** (true/false).  
They are also **short-circuiting**, meaning they stop evaluating once the result is known.

- `&&` (AND)  
  - Returns `true` only if **both conditions** are true.  
  - If either one is false → whole expression is false.  
  - Example:  
    - `(5 > 2 && 10 > 5)` → `true`  
    - `(5 > 2 && 10 < 5)` → `false`  

- `||` (OR)  
  - Returns `true` if **at least one condition** is true.  
  - Only if both are false → result is false.  
  - Example:  
    - `(5 > 2 || 10 < 5)` → `true`  
    - `(2 > 5 || 10 < 5)` → `false`  

- `!` (NOT)  
  - Reverses the boolean value.  
  - Example:  
    - `!true` → `false`  
    - `!false` → `true`  

---

## Bitwise Operators

These operators work on the **binary (bit-level) representation** of numbers.  
Think of numbers as 32-bit sequences of `0`s and `1`s.

- `&` (AND)  
  - Bit is `1` only if **both bits** are `1`.  
  - Example:  
    - `5 & 3`  
    - `5` → `0101`  
    - `3` → `0011`  
    - Result → `0001` (decimal `1`).  

- `|` (OR)  
  - Bit is `1` if **at least one bit** is `1`.  
  - Example:  
    - `5 | 3`  
    - `0101`  
    - `0011`  
    - Result → `0111` (decimal `7`).  

- `^` (XOR → exclusive OR)  
  - Bit is `1` if the bits are **different**, `0` if they are the same.  
  - Example:  
    - `5 ^ 3`  
    - `0101`  
    - `0011`  
    - Result → `0110` (decimal `6`).  

- `~` (NOT)  
  - Flips every bit (0 → 1, 1 → 0).  
  - Uses **two’s complement**, so the result looks negative.  
  - Example: `~5` → `-6`.  

---

## Shift Operators

Shifts move the bits left or right.  

- `<<` (Left Shift)  
  - Moves all bits to the left, fills empty spots with `0`.  
  - Each shift left by 1 → multiplies the number by `2`.  
  - Example:  
    - `5 << 1` → `10` (5 * 2)  
    - `5 << 2` → `20` (5 * 4)  

- `>>` (Right Shift)  
  - Moves all bits to the right.  
  - Keeps the **sign bit** (so negative numbers stay negative).  
  - Each shift right by 1 → divides the number by `2` (rounds down).  
  - Example:  
    - `10 >> 1` → `5`  
    - `10 >> 2` → `2`  
    - `-10 >> 1` → `-5`  

---

## Gotchas (Tricky Cases to Remember)

- `null == undefined` → `true`, but `null === undefined` → `false`.  
- `null >= 0` → `true`, but `null > 0` → `false`.  
- `undefined` compared to any number → always `false`.  
- `NaN == NaN` → `false` (NaN is not equal to itself).  
- `true == 1` → `true`, but `true === 1` → `false`.  
- `false == 0` → `true`, but `false === 0` → `false`.  

---

## Quick Recap
- Prefer `===` over `==` to avoid unexpected type conversions.  
- Logical operators (`&&`, `||`, `!`) also **short-circuit**.  
- Bitwise operators deal with raw binary.  
- Shifts:  
  - `<<` = multiply by powers of 2.  
  - `>>` = divide by powers of 2 (preserves sign).  
- Gotchas exist → revise them before interviews.  
