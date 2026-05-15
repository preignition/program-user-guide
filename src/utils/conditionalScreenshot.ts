import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * Saves a screenshot buffer to disk only if the file doesn't exist or the content has changed.
 * @param outputPath The path to save the screenshot
 * @param buffer The screenshot buffer
 */
export function saveScreenshotIfChanged(outputPath: string, buffer: Buffer) {
  let shouldSave = true

  if (fs.existsSync(outputPath)) {
    const existingBuffer = fs.readFileSync(outputPath)
    if (buffer.equals(existingBuffer)) {
      shouldSave = false
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
