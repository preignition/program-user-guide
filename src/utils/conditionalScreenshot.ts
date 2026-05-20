import * as fs from 'node:fs'
import * as path from 'node:path'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

/**
 * Saves a screenshot buffer to disk only if the file doesn't exist or the content has changed significantly.
 * @param outputPath The path to save the screenshot
 * @param buffer The screenshot buffer
 * @param threshold The threshold for pixel comparison (0 to 1). Default is 0.1.
 * @param pixelThreshold The ratio of allowed different pixels. Default is 0.01 (1%).
 */
export function saveScreenshotIfChanged(outputPath: string, buffer: Buffer, threshold = 0.15, pixelThreshold = 0.01) {
  let shouldSave = true

  if (fs.existsSync(outputPath)) {
    const existingBuffer = fs.readFileSync(outputPath)
    if (buffer.equals(existingBuffer)) {
      shouldSave = false
    } else {
      try {
        const img1 = PNG.sync.read(existingBuffer)
        const img2 = PNG.sync.read(buffer)

        if (img1.width === img2.width && img1.height === img2.height) {
          const numDiffPixels = pixelmatch(
            img1.data,
            img2.data,
            undefined,
            img1.width,
            img1.height,
            { threshold }
          )

          const diffRatio = numDiffPixels / (img1.width * img1.height)
          if (diffRatio < pixelThreshold) {
            shouldSave = false
          }
        }
      } catch (e) {
        // If decoding fails, we should probably save the new one
        console.error(`Failed to compare screenshots for ${outputPath}:`, e)
      }
    }
  }

  if (shouldSave) {
    const dir = path.dirname(outputPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(outputPath, buffer)
  }
}
