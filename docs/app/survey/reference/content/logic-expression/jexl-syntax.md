---
description: Reference for the Jexl expression language used by the form logic engine.
---

# Jexl Syntax Reference

Accessible Surveys relies on the [Jexl](https://www.npmjs.com/package/jexl) library to evaluate logic expressions safely and dynamically. This page provides a quick reference to Jexl's core syntax capabilities.

## Native Types

Jexl supports standard data types:

* **Booleans:** `true`, `false`
* **Strings:** `"Double quotes"` or `'Single quotes'`
* **Numerics:** Integers and floats (e.g., `6`, `-7.2`)
* **Objects:** `{key: "value"}`
* **Arrays:** `['element1', 'element2']`

## Operators

### Unary Operators

* **Negate (`!`):** Logical NOT (e.g., `!true` is `false`).

### Binary Operators

* **Arithmetic:** `+` (Addition/Concat), `-` (Subtraction), `*` (Multiplication), `/` (Division), `//` (Integer Division), `%` (Modulus), `^` (Power of).
* **Logical:** `&&` (AND), `||` (OR).

### Comparisons

* **Standard:** `==`, `!=`, `>`, `>=`, `<`, `<=`.
* **Membership (`in`):**
  * Checks for a substring: `"Cad" in "Ron Cadillac"` evaluates to `true`.
  * Checks for an array element: `"coarse" in ['fine', 'medium', 'coarse']` evaluates to `true`.
  * **Crucial for Group Questions:** Since Checkbox Group questions store answers in an array, you must use `in` to verify if a specific option is selected.
  * *Note:* Uses `==` internally, so it won't match objects by value (e.g., `{a: 'b'} in [{a: 'b'}]` is `false`).

## Ternary Operator

* **Standard:** `condition ? consequent : alternate` (e.g., `age > 62 ? "retired" : "working"`).
* **Elvis Operator (Short-hand):** `value ?: alternate` (returns `value` if truthy, otherwise `alternate`).

## Identifiers & Data Access
Jexl evaluates expressions against a context object (in this case, the respondent's answers).

* **Variables (Bound Fields):** Access context variables by name. In Accessible Surveys, these variables represent the specific survey questions or options you have bound to the expression (typically by dragging and dropping them into the logic editor).
* **Dot Notation:** Traverse objects (e.g., `person.firstName`).
* **Bracket Notation:** Dynamic property access or array indexing (e.g., `person["last" + "Name"]`, `answers[1]`).

## Collections & Filtering
You can filter arrays of objects using brackets and a leading dot for properties.

* **Filtering:** `employees[.first == 'Sterling']` returns an array of matching objects.
* **Chaining:** `employees[.age > 30][.age < 40]`

## Transforms & Functions

* **Transforms (`|`):** Pipe a value into a function.
  * Syntax: `value|transformName` or `value|transformName(arg1, arg2)`.
  * Example: `"hello"|upper`.
* **Functions:** Top-level functions.
  * Syntax: `functionName(arg1, arg2)`.
  * Example: `min(4, 2, 19)`.
