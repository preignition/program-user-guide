---
description: Learn how to upload, manage, and use images in your survey.
---

# How to add images to the image library

The **Image Library** provides a centralized repository for managing visual assets—such as Easy Read illustrations, organization logos, and explanatory diagrams—used throughout your survey. An image must first be added to the Image Library before it can be assigned to questions.

## Step 1: Navigate to the Image Library

From the Survey Builder drawer, select **Image Library** (located after **Localize**).

<figure>
  <img src="./assets/adding-images-to-library/step-1-image-library.png" alt="Image Library menu button">
  <figcaption>Click the 'Image Library' button in the builder drawer.</figcaption>
</figure>

## Step 2: Upload your images and media

Click **Upload Images ...** to select media from your device.

<figure>
  <img src="./assets/adding-images-to-library/step-2-upload-image.png" alt="Upload Images button">
  <figcaption>Click the 'Upload Images' button to add files from your computer.</figcaption>
</figure>

::: tip Media Format & Size Guidelines

- **Supported Formats:** Images (PNG, JPG, SVG, WebP, GIF) and videos (MP4, WebM).
- **Maximum File Size:** Up to **5 MB** per file (`5,000,000` bytes).
- **Aspect Ratio:** Square images (1:1 ratio) or 4:3 ratios work best alongside questions and Easy Read cards.
:::

## Step 3: Manage your uploaded images

Uploaded images appear in the media gallery. You can click an image to preview it in high resolution, download it back to your computer, or delete it from the library.

## Step 4: Use images in your survey questions

Once uploaded to the library, you can use your images in two primary ways:

### 1. Easy Read Illustrations

1. Navigate to **Build → Compose**.
2. Switch on **Easy Read Mode** in the bottom toolbar.
3. Select any question or section, click **Add Media for Easyread Mode**, and pick the image from your uploaded library.

### 2. Embedded in Question Content & Text Pages
In any question description or text block, use the rich text editor's image insertion tool or standard Markdown syntax:

```md
![Explanatory Diagram](https://example.org/images/diagram.png)
```

## Related Content

- [Image Library Reference](../reference/build/image-library.md) — Technical specifications and limits
- [Using Easy Read How-to Guide](./use-easy-read.md) — Attaching illustrations to Easy Read questions
- [Markdown Web Components Reference](../reference/content/markdown/available-web-components.md) — Formatting and embedding media
