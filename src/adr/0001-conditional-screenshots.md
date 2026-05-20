# 1. Conditional Screenshots

Date: 2026-05-15 (Updated 2026-05-20)

## Status

Accepted (Updated with visual comparison)

## Context

We use Playwright to take screenshots of the application for our documentation. Previously, the test suite would blindly overwrite screenshot files on disk every time it ran. This caused several issues:

1. Unnecessary disk I/O, slowing down the test run.
2. Constant churn in Git (even if the images were visually identical, small metadata changes or timestamps might cause git to see them as modified).
3. Harder to review actual visual changes in pull requests.

We initially implemented an exact bit-by-bit comparison using `Buffer.equals()`. However, this proved too sensitive, capturing many "false positive" changes due to minor rendering differences (anti-aliasing, layout shifts, etc.) across different runs or environments.

## Decision

We updated the `saveScreenshotIfChanged` utility function to perform a visual comparison using `pixelmatch`. 

If an existing screenshot exists:
1. Both the existing file and the new buffer are decoded using `pngjs`.
2. If dimensions differ, the new screenshot is saved.
3. If dimensions match, `pixelmatch` compares the two images.
4. If the ratio of different pixels is below a threshold (default 0.05%), the new screenshot is discarded.
5. Otherwise, the new screenshot is saved.

### Why pixelmatch?

- **Tolerance**: It allows for sub-pixel differences and minor rendering variations that are invisible to the human eye.
- **Industry Standard**: Widely used for visual regression testing (including internally by Playwright's own assertion engine).
- **Control**: Allows us to tune the `threshold` (per-pixel sensitivity) and `pixelThreshold` (ratio of allowed different pixels).

## Consequences

### Positive

- Significantly reduced number of redundant screenshots saved to disk and Git.
- More stable documentation generation across different environments.
- Only meaningful visual changes trigger a Git update.

### Negative

- Slightly more overhead during documentation generation (decoding PNGs and running pixelmatch).
- Introduced two new devDependencies: `pixelmatch` and `pngjs`.
