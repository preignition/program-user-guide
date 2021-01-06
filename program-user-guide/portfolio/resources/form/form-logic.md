---
description: How to use Form logic to dynamically show or hide part of a form
---

# Logic

A `Logic` tab appears under `advanced mode`  for `Page`, `Section` and `Question`

Under this tab, it is possible to write logical expression that will control survey attributes while users fill in the form. 

For `Pages` and `Sections`, form logic is used to control whether a page or a section is visible or hidden. For `Questions`,  `required`, `invalid` and `read-only` attributes can be evaluated similarly, in addition to `hidden` attribute.

The form engine dynamically evaluates the value of a logical expression and assignes it to its bound attribute. For example when an expression evaluates to `true` for a `hidden` attribute, the relevant form item will be hidden. 

### How to write a logical expression

Logical expression are mathematical expressions written in the context of the form data. Most of the time, you wish to instruct the form engine to hide a specific field when some conditions are met. 

For instance in the figure below, a section will be hidden when the answer to `what do you prefer` question is `apple` and the answer to the question `estimate your cost` is higher to 50. The value of the expression depends on answer to the two questions  `what do you prefer` and  `estimate your cost` . When the expression evaluates to true, the section is hidden. It is shown otherwise.

![Screenshot of a logical expression. ](../../../../.gitbook/assets/image%20%28229%29.png)



To bring questions into the expression builder, you need to drag the specific question item from the structure grid and drop it into the expression field. 

To bring answers of choice-based questions into the expression builder, do the same with question options from the structure grid. 

The rest of the expression \(logic like equal `==` or not equal `!=`\) is then typed as usual with the keyboard. 

 

{% hint style="info" %}
Use `!=` instead of `== for` hidden expression.

If you want to initially hide an item \(and only show it when the user has answered a specific question\), construct your expression with `!=`. 

The reason is that "answer to question A == 1" will always be `false` when question A is not filled in. As we hide the field only when the result of the expression it true, this field will initially be displayed.
{% endhint %}

![Example of hiding a field even when &quot;At which level does ...&quot; is not filled in.](../../../../.gitbook/assets/image%20%28228%29.png)

### How to test logical expression

A test toggle button can be activated to render all questions concerned by the expression. You can then answer the questions and check the value of the expression. 

Logic expressions are also evaluated when user tests the for itself. 

### Trick for writing complex logic

It is easier to think in terms of when an item should be displayed rather than when it should be hidden.

![A more complex expression](../../../../.gitbook/assets/image%20%28239%29.png)

For instance, the above expression reads as:

it is **displayed** when \(`if you agree to complete` is **true** `AND` \(`where you attending college` is **yes** `OR` `Do you have school-age children` is **yes**\)\).

Then invert the expression \( !\(`expression`\) \) to hide it for the same configuration.

### Syntax

The expression builder relies on [jexel](https://www.npmjs.com/package/jexl)  and use the same syntax. 

The Following operators are available.

#### Unary Operators

| Operation | Symbol |
| :--- | :--- |
| Negate | ! |

#### Binary Operators

| Operation | Symbol |
| :--- | :--- |
| Add, Concat | + |
| Subtract | - |
| Multiply | \* |
| Divide | / |
| Divide and floor | // |
| Modulus | % |
| Power of | ^ |
| Logical AND | && |
| Logical OR | \|\| |

#### Comparisons

| Comparison | Symbol |
| :--- | :--- |
| Equal | == |
| Not equal | != |
| Greater than | &gt; |
| Greater than or equal | &gt;= |
| Less than | &lt; |
| Less than or equal | &lt;= |
| Element in array or string | in |

**A note about in**

The `in` operator can be used to check for a substring: `"Cad" in "Ron Cadillac"`, and it can be used to check for an array element: `"coarse" in ['fine', 'medium', 'coarse']`. However, the `==` operator is used behind-the-scenes to search arrays, so it should not be used with arrays of objects. The following expression returns false: `{a: 'b'} in [{a: 'b'}]`.

#### Ternary operator

Conditional expressions check to see if the first segment evaluates to a truthy value. If so, the consequent segment is evaluated. Otherwise, the alternate is. If the consequent section is missing, the test result itself will be used instead.

| Expression | Result |
| :--- | :--- |
| "" ? "Full" : "Empty" | Empty |
| "foo" in "foobar" ? "Yes" : "No" | Yes |
| {agent: "Archer"}.agent ?: "Kane" | Archer |

#### Native Types

| Type | Examples |
| :--- | :--- |
| Booleans | `true`, `false` |
| Strings | "Hello "user"", 'Hey there!' |
| Numerics | 6, -7.2, 5, -3.14159 |
| Objects | {hello: "world!"} |
| Arrays | \['hello', 'world!'\] |

#### Groups

Parentheses work just how you'd expect them to:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Expression</th>
      <th style="text-align:left">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">(83 + 1) / 2</td>
      <td style="text-align:left">42</td>
    </tr>
    <tr>
      <td style="text-align:left">1 &lt; 3 &amp;&amp; (4 &gt; 2 || 2 &gt; 4)</td>
      <td style="text-align:left">
        <p></p>
        <p><code>true</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>



