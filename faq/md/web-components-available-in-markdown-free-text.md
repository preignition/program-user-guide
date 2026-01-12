# Web-components available in Markdown Free Text

This document describes the web components that can be used in the free text field of AccessibleSurveys.com.

{% hint style="success" %}
Web component tag **MUST** be closed:

This will work:

```html
<lapp-youtube videoid="videoid"></lapp-youtube>
```

This will not work:

```html
<lapp-youtube videoid="videoid">
```
{% endhint %}

### Tooltips

#### pwi-tooltip

An element for displaying tooltip. Tooltip provide additional content when focused or hovered.

**Example**

```html
Here is a tooltip example: <pwi-tooltip message="this is the tooltip" position="bottom">hover me</pwi-tooltip>
```

Produces:

> <img src="../../.gitbook/assets/tooltip-hover.png" alt="tooltip example" data-size="original">

When a user over the tooltip with or activate it :

> <img src="../../.gitbook/assets/tooltip.png" alt="tooltip example" data-size="original">

**Properties**

| Property      | Attribute     | Type      | Default | Description                                                                                                                             |
| ------------- | ------------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `container`   | `container`   | `object`  |         | the `container` used to decide how to position tooltip before opening.                                                                  |
| `fireonclick` | `fireonclick` | `boolean` |         | When true, activate tooltip on click event (and not just on hover)                                                                      |
| `heading`     | `heading`     | `string`  |         | Tooltip title.                                                                                                                          |
| `message`     | `message`     | `string`  |         | message appearing when tooltip is active                                                                                                |
| `noIcon`      | `noIcon`      | `boolean` | false   | Do not display the `info` icon top right of tooltip when true                                                                           |
| `opened`      |               | `boolean` | false   |                                                                                                                                         |
| `position`    | `position`    | `string`  |         | <p>Placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip<br>inside of the viewport {'top'</p> |
| `skipFocus`   | `skipFocus`   | `boolean` |         | <p>tooltip is not activatable by tap if true.<br>To use for instance when sloted element is a button (which will receive focus)</p>     |
| `tipwidth`    | `tipwidth`    | `string`  | 200     | Wdth of the tooltip - overrides css properties.                                                                                         |

### pwi-form-tooltip

Tooltips to be user in forms. It allows to display glossary definition for complex terms used in the form.

#### Example

Usually, only `term` property should be used:

```html
<pwi-form-tooltip term="complexterm">Explain a complex term</pwi-form-tooltip>
```

Produces:

> <img src="../../.gitbook/assets/tooltip-complex.png" alt="tooltip example" data-size="original">

#### Properties

| Property         | Attribute        | Type      | Default                      | Description                                                                                                                                                                           |
| ---------------- | ---------------- | --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appName`        | `app-name`       | `string`  |                              | `appName`                                                                                                                                                                             |
| `container`      | `container`      | `object`  |                              | the `container` used to decide how to position tooltip before opening.                                                                                                                |
| `fireonclick`    | `fireonclick`    | `boolean` |                              | When true, activate tooltip on click event (and not just on hover)                                                                                                                    |
| `heading`        | `heading`        | `string`  |                              | Tooltip title.                                                                                                                                                                        |
| `loadingMessage` | `loadingMessage` | `string`  | "loading remote tooltip ..." | <p><code>loadingMessage</code> message appearing before<br>remote content was loaded</p>                                                                                              |
| `message`        | `message`        | `string`  |                              | message appearing when tooltip is active                                                                                                                                              |
| `noIcon`         | `noIcon`         | `boolean` | false                        | Do not display the `info` icon top right of tooltip when true                                                                                                                         |
| `opened`         |                  | `boolean` | false                        |                                                                                                                                                                                       |
| `path`           | `path`           | `string`  |                              | `path` database path                                                                                                                                                                  |
| `position`       | `position`       | `string`  |                              | <p>Placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip<br>inside of the viewport {'top'</p>                                               |
| `resource`       | `resource`       | `object`  |                              | <p><code>resource</code> the resource object to get<br>context from. It can be a form or a section.<br>For editor shall not set this propery as it is handled by the application.</p> |
| `skipFocus`      | `skipFocus`      | `boolean` | true                         | <p>tooltip is not actiabtable by tap if true.<br>To use for instance when sloted element is a button (which will receive focus)</p>                                                   |
| `term`           | `term`           | `string`  |                              | `term` the term id to get tooltip for                                                                                                                                                 |
| `tipwidth`       | `tipwidth`       | `string`  | 200                          | Wdth of the tooltip - overrides css properties.                                                                                                                                       |

## Guidance - `<pfo-survey-guidance>`

### pfo-guidance

An element displaying Guidance on how to use iData and how to till out forms.

Guidance appear in the active application language.

#### Example

```html
<pfo-guidance></pfo-guidance>
```

will display iData Form guidance.

### pfo-guidance-video

An element displaying a video on on how to use iData and how to till out forms.

The video adapts to active language

#### Example

```html
<pfo-guidance-video></pfo-guidance-video>
```

will display iData Form guidance.

## Icons

It is sometime helpful to add icons directly in the text. [Material icons](https://fonts.google.com/icons) are available through the following syntax:

```html
<lapp-icon>info</lapp-icon>
```

Produces:

> <img src="../../.gitbook/assets/icon.png" alt="icon example" data-size="original">

## Video - `<lapp-youtube>` or `<lite-youtube>`

The element for rendering youtube video is [lite-youtube ](https://github.com/paulirish/lite-youtube-embed). We deploy an alternative version of this element called `lapp-youtube` that adds default parameters for allowing to pause videos when necessary, and display videos from the same channel when the video is finished.

Prefer using `lapp-youtube` over `lite-youtube` as default parameters are added for you.

#### Properties

| Name        | Description                  | Default |
| ----------- | ---------------------------- | ------- |
| `videoid`   | The YouTube videoid          | \`\`    |
| `playlabel` | label for the play button    | `Play`  |
| `params`    | Set YouTube query parameters | \`\`    |

#### Example

Use any [YouTube Embedded Players and Player Parameters](https://developers.google.com/youtube/player_parameters) you like. For `lite-youtube` We recommend setting `rel` to `0` as below to avoid showing unrelated video after the video was just played. Those parameters are added by default in `lapp-youtube`.

```html
<lapp-youtube videoid="xVytWVHX4N0"></lapp-youtube>
```

Or, using the `lite-youtube` element:

```html
<lapp-youtube videoid="xVytWVHX4N0" param="rel=0&enablejsapi=1"></lapp-youtube>
```

## Accessibility

### a11y-menu

A menu for accessibility settings. It allows to activate, deactivate or change settings for application theme and contrast, text size, easyread or simplified interface.

In context of forms or survey, it also display readaloud and Internation Sign settings.

#### Example

```html
<a11y-menu context="survey"></a11y-menu>
```

produces:

> <img src="../../.gitbook/assets/menu (1).png" alt="tooltip example" data-size="original">

#### Properties

| Property  | Attribute | Type     | Description                                                                                                                                                                                                              |
| --------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | `context` | `string` | <p>used to show or hide specific accessibility items depending on application context.<br>For instance, <code>readaloud</code>. <code>international sign</code> are visible only when context = <code>survey</code>.</p> |

### a11y-dialog-button

A Button opening the application's accessibility menu.

It renders with `open accessibility settings` label and an accessibility Icon

#### Example

`<a11y-dialog-button outlined></a11y-dialog-button>`

Produces:

> <img src="../../.gitbook/assets/button.png" alt="accessibility dialog button example" data-size="original">

#### Properties

| Property     | Attribute    | Type      | Description                                                |
| ------------ | ------------ | --------- | ---------------------------------------------------------- |
| `outlined`   | `outlined`   | `boolean` | Creates an outlined button that is flush with the surface. |
| `unelevated` | `unelevated` | `boolean` | Creates a contained button that is flush with the surface. |

_`a11y-dialog-button` was previously `pfo-accessibility-settings`, which is now deprecated_

### Individual accessibility controls

Individual controls exists for each accessibility settings. We recommend the use of `<a11y-menu context=form></a11y-menu>` in forms as it is more compact.

However there are cases where it makes sense to introduce each accessibility controls individually.

| Control                                   | Description                                       | Example                                                                 |
| ----------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| `<a11y-easyread></a11y-easyread>`         | On/Off easyread accessibility settings            | ![pfo-accessibility-easyread example](../../.gitbook/assets/t1.png)     |
| `<a11y-readaloud></a11y-readaloud>`       | On/Off readaloud accessibility settings           | ![pfo-accessibility-readaloud example](../../.gitbook/assets/t2.png)    |
| `<a11y-signlanguage></a11y-signlanguage>` | On/Off International Sign (IS) accessibility mode | ![pfo-accessibility-signlanguage example](../../.gitbook/assets/t3.png) |
| `<a11y-theme></a11y-theme>`               | Display a list of available themes                | ![pfo-accessibility-theme example](../../.gitbook/assets/t4.png)        |
| `<a11y-font></a11y-font>`                 | set font size                                     | ![pfo-accessibility-font example](../../.gitbook/assets/t5.png)         |
