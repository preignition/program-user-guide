# Convenient Class for Accessible Surveys Free Text Field

Convention class are a convenient way to style your content. They are especially useful for setting the layout of your text, for example, to create columns.

## Layout

The layout system is based on [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). 

CSS Flexbox is a layout system that allows you to arrange elements in a flexible way and adapt to different screen size. It is especially useful to create responsive layouts.

The following classes are available:

| Class | Description | Example     |
| ----- | ----------- | ----------- |
| layout | Set Flex layout to a container | `<div class="layout"></div>` |
| horizontal | Set row flex direction | `<div class="layout horizontal"></div>` |
| vertical | Set column flex direction | `<div class="layout vertical"></div>` |
| wrap | [Wrap content](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#multi-line_flex_containers_with_flex-wrap)  | `<div class="layout wrap"></div>` |
| no-wrap | [Prevent Wrap content](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#multi-line_flex_containers_with_flex-wrap)  | `<div class="layout no-wrap"></div>` |
| center-center | Center content | `<div class="layout center-center"></div>` |
| center-justify | Center and justify content | `<div class="layout center-center"></div>` |


## Layout Factors

| Class | Description | Example     |
| ----- | ----------- | ----------- |
| flex | Set Flex factor 1 to the element | `<div class="layout"><div class="flex"></div></div>` |
| flex-2 | Set Flex factor 2 to the element | `<div class="layout"><div class="flex-2"></div></div>` |
| flex-3 | Set Flex factor 3 to the element | |
| flex-4 | Set Flex factor 4 to the element | |
