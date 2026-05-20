# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by the VitePress documentation engine itself (this is used for writing *these* docs, rather than the Markdown used in the actual Survey App).

::: info
If you are looking for documentation on how Markdown is used within the Accessible Surveys application, please see:

* [Explanation: Using Markdown](./app/survey/explanation/using-markdown.md)
* [How-to: Providing Rich Formatting](./app/survey/how-to/providing-rich-formatting.md)
* [Reference: Markdown Syntax & Extensions](./app/survey/reference/content/markdown/index.md)
* [Shared Component: Rich Text Editor](./components/md-editor.md)
:::

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
