---
description: Reference guide for complex logic, binary operations, custom transforms, and the ternary operator.
---

# Advanced Logic Expressions

For highly dynamic forms, you can utilize advanced operators, custom transforms, and conditional evaluations.

## Binary Operators (Math)

The logic engine supports basic mathematical operations, which are useful for calculating scores, determining ages, or generating dynamic totals.

| Operation        | Symbol |
| ---------------- | ------ |
| Add, Concat      | `+`      |
| Subtract         | `-`      |
| Multiply         | `*`      |
| Divide           | `/`      |
| Divide and floor | `//`     |
| Modulus          | `%`      |
| Power of         | `^`      |

## The Ternary Operator

The ternary operator (or conditional operator) functions like an "if-else" statement within your expression. 

**Syntax:** `condition ? consequent : alternate`

1. The engine checks if the `condition` evaluates to a truthy value.
2. If true, it returns the `consequent`.
3. If false, it returns the `alternate`.

**Example:**
`age > 18 ? "Adult" : "Minor"`

You can chain ternary operators for more complex branching, though parentheses should be used to ensure clarity.

## Grouping with Parentheses

Parentheses `()` operate conventionally to modify the order of operations. Terms inside parentheses are evaluated first.

**Example:**
`(83 + 1) / 2` evaluates to `42`.

Parentheses are particularly useful when combined with the Negate (`!`) operator to invert a complex logic group:
`!( (age > 18) && (status == "active") )`

## Custom Transforms

Accessible Surveys adds custom transforms to the logic engine to simplify common expressions. Transforms are applied using the pipe operator `|`.

### The `length` Transform

The `length` transform computes the number of items in an array. This is exceptionally useful for validating checkbox groups or ordering questions.

**Syntax:** `[array]|length`

**Example: Limiting Checkbox Selections**
If you want to ensure a user selects no more than 2 options from a checkbox question, you can add this expression to the **validity logic**:
`answer|length <= 2`

**Example: Ensuring All Items are Ordered**
For an ordering question, you might require the user to order all items. The expression would check if the length of the sorted items matches the total number of options, or if it is completely empty (initially valid):
`answer|length == 5 || answer|length == 0`
