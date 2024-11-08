# Accessibility Modes

You might want to display or hide some content depending on the accessibility mode. For example, you might want to display a video with subtitles in the accessibility mode, but not in the standard mode.

The mechanism is based on specifying a [css class](https://developer.mozilla.org/en-US/docs/Web/CSS/Class\_selectors) to the item requiring dynamic display capabilities.

## this os a new para

blabla

{% embed url="https://youtu.be/videoid?autoplay=1&modestbranding=1&loop=1" %}
alt text
{% endembed %}
this is the text 



For instance a paragraph to be displayed only when easyread is on should be written as:

```html
<p class="show-when-easyread">This paragraph is visible in Easy Read mode only</p>
```

This approach works for any HTML tags allowed in the application ([native html tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) allowed by default, and [additional convenience web-components](web-components-available-in-markdown-free-text.md)).

The syntax of the class name is: class="{`state`}-when-{`accessibityOption`}"

Where, allowed `accessibilityOptions` are `signlanguage`, `readaloud` or `easyread`; allowed state values are `show` or `hide`.

Examples:

* the class name `hide-when-easyread` will hide the item when `easyread` is on for a specific users
* the class name `show-when-readaoud` will show the item when the user has its readaloud switched on.
