import fs from 'node:fs/promises'
import BaseOcr, { registerBackend, type ModelCreateOptions } from '@tzmax/ocr-common'
import { splitIntoLineImages } from '@tzmax/ocr-common/splitIntoLineImages'
import defaultModels from '@tzmax/ocr-models/node'
import { InferenceSession } from 'onnxruntime-node'
import { FileUtils } from './FileUtils'
import { ImageRaw } from './ImageRaw'

registerBackend({
  FileUtils,
  ImageRaw,
  InferenceSession,
  splitIntoLineImages,
  defaultModels: defaultModels as any,
})

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Ocr extends BaseOcr {
  static async create(options: ModelCreateOptions = {}) {
    const ocr = await BaseOcr.create(options)
    if (options.debugOutputDir) {
      await fs.mkdir(options.debugOutputDir, { recursive: true })
    }
    return ocr
  }
}

export * from '@tzmax/ocr-common'

export default Ocr
