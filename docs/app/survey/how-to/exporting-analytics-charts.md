---
description: How to export analytics charts from a survey
---

# Exporting Analytics Charts

::: warning
Exporting charts requires some technical knowledge and may not be suitable for all users. We will make this feature more user-friendly in the future.
:::

Charts in the analytics page uses [SVG (Scalable Vector Graphics)](https://developer.mozilla.org/en-US/docs/Web/SVG) format, which is a widely supported vector image format that can be easily exported and used in various applications. To export a chart, you can follow these steps:

- Right-click on the chart you want to export.
- Click `inspect` or `inspect element` (depending on your browser) to open the developer tools.
- In the developer tools, find the `<svg>` element that corresponds to the chart.
- Right-click on the `<svg>` element and select `Copy` > `Copy element`
- Open a text editor (like Notepad, VS Code, etc.) and paste the copied SVG code.
- Save the file with a `.svg` extension (e.g., `chart.svg`).

The exported SVG file can be opened with vector graphic editors (like Adobe Illustrator, Inkscape) or used in web projects. You can also convert the SVG file to other formats (like PNG, JPEG) using online converters or graphic editing software if needed.

You might need to add a namespace declaration to the SVG code for it to work properly. You can add the following line to the `<svg>` tag:

```xml
xmlns="http://www.w3.org/2000/svg"
```

It also possible that the legend of the chart appears as a black box in the exported SVG file. To fix this, you can add the following CSS rule to the `<style>` section of the SVG code:

```html
<style>
#legendRect {
  fill: white;
}
</style>
```

## Example of an SVG element with the namespace declaration:

Here, we have added the `xmlns` attribute to the `<svg>` tag and included the CSS rule to ensure the legend background is white:

```xml
<svg xmlns="http://www.w3.org/2000/svg" id="svg" part="svg">
  <style>
    #legendRect {
      fill: white;
    }
</style>
    <g transform="translate(40, 0)">
      <g id="slot-background" part="background">
      </g>
      <g id="slot-chart-content">
        <g id="slot-zoom">
          <g id="slot-chart" part="chart">
          <g id="drawable" slot-svg="slot-chart" class="drawable pie" transform="translate(97.5, 75)"><path class="pie selectable shape" d="M1.342,-74.988A75,75,0,0,1,65.612,36.332L42.874,23.204A48.75,48.75,0,0,0,1.342,-48.732Z" key="lMWTK6i6Zuk3x4d24xJa" fill="#4e79a7"></path><path class="pie selectable shape" d="M64.271,38.656A75,75,0,0,1,-64.271,38.656L-41.532,25.528A48.75,48.75,0,0,0,41.532,25.528Z" key="luWF9cH17XvYHwHcaMMV" fill="#f28e2c"></path><path class="pie selectable shape" d="M-65.612,36.332A75,75,0,0,1,-1.342,-74.988L-1.342,-48.732A48.75,48.75,0,0,0,-42.874,23.204Z" key="znSCbcfz2y4ppacwx3xQ" fill="#e15759"></path></g></g>
          <g id="slot-top-chart" part="chart"></g>
          <g id="slot-brush" part="brush"></g>
        </g>
        <g id="slot-axis" part="axis"></g>
      </g>
    </g>
    <g id="slot-legend" part="legend"><rect id="legendRect" fill="white" slot-svg="slot-legend" class="legend-rect" opacity="1" transform="translate(139.7958984375, 10)" width="146.05706787109375" height="62.76945495605469"></rect><g id="legend" part="legend" slot-svg="slot-legend" class="legend" opacity="1" transform="translate(144.7958984375,15)scale(0.7)"><g class="legendCells"><g class="cell" transform="translate(0, 0)"><rect class="swatch" height="15" width="15" style="fill: rgb(78, 121, 167);"></rect><text class="label" transform="translate( 25, 12.5)"><tspan x="0" dy="0em">No</tspan></text></g><g class="cell" transform="translate(0, 20.823530197143555)"><rect class="swatch" height="15" width="15" style="fill: rgb(242, 142, 44);"></rect><text class="label" transform="translate( 25, 12.5)"><tspan x="0" dy="0em">Don't know or prefer not</tspan><tspan x="0" dy="1.2em">to say</tspan></text></g><g class="cell" transform="translate(0, 60.847063064575195)"><rect class="swatch" height="15" width="15" style="fill: rgb(225, 87, 89);"></rect><text class="label" transform="translate( 25, 12.5)"><tspan x="0" dy="0em">Yes</tspan></text></g></g></g></g>
  </svg>
```

This renders as the following chart with a white background for the legend:

<figure>
  <img src="./assets/shared/export-chart.svg" alt="Exported SVG chart with white legend background">
  <figcaption>Exported SVG chart with white legend background</figcaption>
</figure>

:::tip
SVG is an open format - you can edit the exported SVG file with any text editor to customize it further, such as changing colors, adding labels, or modifying the layout. We recommend [`Inkscape`](https://inkscape.org/) for a free and user-friendly interface to edit SVG files without needing to write code.
:::
