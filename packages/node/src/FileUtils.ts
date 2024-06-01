import fs from 'node:fs/promises'
import { FileUtilsBase } from '@tzmax/ocr-common'

export class FileUtils extends FileUtilsBase {
  static async read(path: string) {
    return await fs.readFile(path, 'utf8')
  }
}
