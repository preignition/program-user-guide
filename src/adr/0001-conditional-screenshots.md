# 1. Conditional Screenshots

Date: 2026-05-15

## Status

Accepted

## Context

We use Playwright to take screenshots of the application for our documentation. Previously, the test suite would blindly overwrite screenshot files on disk every time it ran. This caused several issues:

1. Unnecessary disk I/O, slowing down the test run.
2. Constant churn in Git (even if the images were visually identical, small metadata changes or timestamps might cause git to see them as modified).
3. Harder to review actual visual changes in pull requests.

We needed a way to only save screenshots when their content actually changed.

## Decision

We introduced a custom saveScreenshotIfChanged utility function. This function uses Node's native Buffer.equals() to perform a fast, bit-by-bit comparison between the newly captured screenshot buffer in memory and the existing file on disk.

We modified our takeAnnotatedScreenshot utility and the Context.screenshot() method to capture screenshots into buffers first, and then pass them through saveScreenshotIfChanged.

### Why Buffer.equals()?

- Zero dependencies: We don't need to add a heavyweight image comparison library like pixelmatch or looks-same just to check for exact equality.
- Speed: Bitwise comparison of buffers in memory is extremely fast.
- Simplicity: It's a straightforward check that doesn't require configuring tolerance thresholds.

## Consequences

### Positive

- Faster test runs when documentation hasn't changed.
- Reduced noise in Git commits.
- Cleaner pull requests (only actual visual changes show up).

### Negative

- Buffer.equals() is strict. It does not tolerate minor rendering differences (e.g., slight anti-aliasing variations across different OS platforms). If the tests are run on different operating systems, it might result in false positives (saving screenshots that look identical to the human eye). If this becomes a significant issue, we will need to re-evaluate and introduce a visual comparison library like pixelmatch.
