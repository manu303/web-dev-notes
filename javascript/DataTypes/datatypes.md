# JavaScript Data Types (Nexus Course Notes)

In JavaScript, data types are divided into **primitive** and **non-primitive**.  
For now, I focused on the **primitive data types**:

- **Number**
- **String**
- **Boolean**
- **Null**
- **Undefined**
- **Symbol**
- **BigInt**

---

## Number

In JavaScript, `Number` can represent both integers and floating-point numbers.  
Unlike some other languages (like C++ or Java) where you have `int`, `float`, `double`, etc., JavaScript just has one `Number` type.

JavaScript is **dynamically typed**, so we don’t even need to mention the type explicitly.

---

## String

A `String` is simply a collection of characters enclosed in single (`'`) or double (`"`) quotes.

---

## Boolean

A `Boolean` has only two values: `true` or `false`.

---

## Undefined

`undefined` is a special placeholder.  
If we declare a variable but don’t assign any value, JavaScript automatically sets it to `undefined`.

---

## Null

If we want to intentionally represent “nothing,” we use `null`.

⚠️ **Interesting quirk:**  
`typeof null` returns `"object"` instead of `"null"`.  
This is actually a **bug** from the early days of JavaScript (it was created in just 10 days). The bug was never fixed to avoid breaking legacy codebases.

---

## BigInt

When we need to store really large integers beyond the safe integer limit, we use **BigInt**.  
We just add `n` at the end of a number so the JS engine treats it as a BigInt:

```js
let big = 123456789012345678901234567890n;

# Symbol

`Symbol` is another primitive type in JavaScript, used for **unique identifiers**.
(It will be studied in more detail later.)

---

# How Numbers Are Stored in JavaScript

Numbers in JS follow the **IEEE 754 double-precision (64-bit floating point)** standard.

The 64 bits are split like this:

- **1 bit** → Sign bit (`0` for positive, `1` for negative)
- **11 bits** → Exponent
- **52 bits** → Mantissa (fractional part)

---

## Process

1. Convert the number to binary.
2. Normalize it so there’s only one digit before the decimal point.
   Example: `1.xxxxx * 2^power`
3. Store the values:
   - **Sign bit** → First bit
   - **Exponent** → Next 11 bits (with a bias of `+1023`)
   - **Mantissa** → Remaining 52 bits

---

## Why the Safe Integer Limit Exists

- The mantissa effectively allows **53 bits of precision**
  (52 bits stored + 1 implied leading bit).
- That’s why the maximum safe integer in JavaScript is: 2^53 - 1

- Any integer larger than this can’t be represented safely with `Number`.
- This is where **BigInt** comes in.

---

# Summary

- JavaScript has fewer data type distinctions compared to other languages.
- `Number` is powerful but limited by 64-bit floating point representation.
- `BigInt` helps when numbers exceed the safe integer range.
- `null` returning `"object"` is a known bug.
- JavaScript’s **dynamic typing** makes coding flexible but can also hide tricky bugs.

```
