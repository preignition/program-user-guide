## Introduction to Accessible Surveys free text field - a.k.a. Markdown

The Accessible Surveys free text field is a simple text field that allows you to enter text in a format called Markdown. Markdown is a simple way to format text that is easy to read and write; it is also a powerful format that allows you to create complex documents. 

This section is an introduction to what is possible to do with accessible surveys markdown editor. 

### How to write in Markdown

- **as text** Markdown relies on a few simple characters to format text. For example, to make a word bold, you simply surround it with two asterisks: `**bold**`. To make a word italic, you surround it with one asterisk: `**italic**`. In addition to simple formatting, you can set headings, create tables, add list or images with Markdown. Please check the [Markdown syntax](https://www.markdownguide.org/basic-syntax/) for more information. 

- **as HTML** Markdown also allows you to write HTML code directly. For example, to make a word bold, you can use the HTML tag `<strong>bold</strong>`. To make a word italic, you can use the HTML tag `<em>italic</em>`. Writing in HTML directly gives you a lot of control over your content and layout as any HTML tag is supported. Please check the [HTML syntax](https://www.w3schools.com/html/default.asp) for more information. 

- **with Convenient web-components** Accessible surveys adds a couple of convenient web-components that can be added to the markdown text. For example, it is possible to add a player to youtube video, or AccessibleSurveys.com accessibility menu, or tooltips. Detailed information about these components is available in the [markdown web-components section](./md-web-components.md).

### How to style in Markdown

Markdown allows you to style the content in different ways.

- **as inline CSS** Markdown allows you to add inline CSS to style the content. For example, to make a word bold and red, you can use the following syntax: `<span style="color:red; font-weight: bold;">bold</span>`. To make a word italic and blue, you can use the following syntax: `<span style="color:blue; font-style: italic;">italic</span>`. Please check the [CSS syntax](https://www.w3schools.com/css/default.asp) for more information.

Inline CSS is powerful, but can be time-consuming to write and check; for complex use-case, prefer the class an style approach described below, or use pre-defined convenience class.

In order to align colors with the current theme, AccessibleSurveys.com provides a series of css-tokens that can be used in CSS. For example, the following syntax `<span style="color:var(--color-primary)>I am always the same color of the theme color</span>` will make sure the color is coherent with the current theme. We encourage to use this approach over hard-coded colors. Available css-tokens are detailed in the [CSS tokens section](./md-css-tokens.md).

- **with class and style tag** A CSS class is a way to group HTML elements together to style them. For example, you can create a class called `bold` that makes the text bold. Then, you can apply this class to any HTML element to make it bold. For example, `<span class="bold">bold</span>`. Please check the [CSS class syntax](https://www.w3schools.com/css/css_howto.asp) for more information.

In this example, you would need to define the class `bold` in a `<style>` tag. For example adding this `<style>.bold { font-weight: bold; }</style>` in your markdown text would make the text bold.

AccessibleSurveys.com free text field comes with a series of pre-defined convenience class so that it is easier to style your content. This is especially useful for setting the layout of your text, for example, to create columns. Please check the [markdown convenience class section](./md-convenience-class.md) for more information.

### Show and hide section depending on the Accessibility Mode

You might want to display or hide some content depending on the accessibility mode. For example, you might want to display a video with subtitles in the accessibility mode, but not in the standard mode.

This is also possible and explained in the [markdown accessibility mode section](./md-accessibility-mode.md).

### Advanced Example

Here is an example of a markdown text that uses all the features described above:

```markdown
<style>
	.gap {
		gap: var(--space-medium);
	}
	.box {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
		padding: var(--space-medium);
		margin: var(--space-medium);
	}
</style>

# This is a title

<div class="layout horizontal wrap gap">
	<div class="flex show-when-signlanguage">
		This is displayed only in **sign language mode**.
	</div>
	<div class="flex show-when-easyread">
		This is displayed only in **easy read mode**.
	</div>
	<div class="flex-2">
		This is displayed in all modes. It is twice the width of the above elements
		
		### With a video:
		
		<lite-youtube id="xVytWVHX4N0"></lite-youtube>

		### And a styled box: 
		
		<div class="box">
			I am in a box
		</div>
	</div>
</div>

```

- the `style` tag is used to define the classes used in the markdown text
- the `#` is used to define a first-level title
- `layout horizontal wrap flex, flex-2` are pre-defined convenience class that sets the layout of the content
- `wrap` is a user defined class (defined in the `<style>` tag) that sets the gap between elements
- `box` is a user defined class (defined in the `<style>` tag) that sets colors and margins
- `show-when-signlanguage` and `show-when-easyread` are pre-defined convenience class that shows or hide the content depending on the accessibility mode
- `lite-youtube` is a web-component that displays a youtube video
- `div` is an HTML tag that creates a box

## More information

- [Convenient Class for Accessible Surveys Free Text Field](md-convenience-class.md)
- [CSS tokens available in Markdown Free Text](md-css-tokens.md)
- [Web-components available in Markdown Free Text](md-web-components.md)
- [Accessibility Modes](md-accessibility-mode.md)
