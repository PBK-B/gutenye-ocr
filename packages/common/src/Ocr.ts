import type { ModelCreateOptions, OcrDetectOptions } from '#common/types'
import { Detection, Recognition } from './models'

export class Ocr {
  static async create(options: ModelCreateOptions = {}) {
    const detection = await Detection.create(options)
    const recognition = await Recognition.create(options)
    return new Ocr({ detection, recognition })
  }

  #detection: Detection
  #recognition: Recognition

  constructor({
    detection,
    recognition,
  }: {
    detection: Detection
    recognition: Recognition
  }) {
    this.#detection = detection
    this.#recognition = recognition
  }

  async detect(image: string, options: OcrDetectOptions = {}) {
    const lineImages = await this.#detection.run(image, options.detectionOptions ?? {})
    const texts = await this.#recognition.run(lineImages,  options.recognitionOptions ?? {})
    return texts
  }
}
