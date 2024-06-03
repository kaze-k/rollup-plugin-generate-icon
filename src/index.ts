import { Plugin, PluginContext } from "rollup"
import { FormatEnum, sharp_resolver } from "./utils"
import path from "path"

interface GenerateIconOptions {
  logo: string
  dir?: string
  size?: number | number[]
  format?: keyof FormatEnum
  grayscale?: boolean
  imgName?: string
}

interface GenerateIconResult {
  name: string
  data: Buffer
}

function generateIconPlugin(options: GenerateIconOptions): Plugin {
  const {
    logo,
    dir = "icons",
    size = [16, 32, 48, 64, 128],
    format = "png",
    grayscale = false,
    imgName = "icon",
  } = options

  const getSizes: () => number[] = (): number[] => (Array.isArray(size) ? size : [size])

  async function generateBundle(this: PluginContext): Promise<void> {
    const sizes: number[] = getSizes()
    const promises: Promise<GenerateIconResult[]> = Promise.all(
      sizes.map(
        async (
          size: number,
        ): Promise<{
          name: string
          data: Buffer
        }> => {
          const { data } = await sharp_resolver(logo, size, format, grayscale)
          const name: string = sizes.length === 1 ? `${imgName}.${format}` : `${imgName}-${size}.${format}`
          return { name, data }
        },
      ),
    )
    await promises.then((results: GenerateIconResult[]): void => {
      results.forEach((result: GenerateIconResult): void => {
        const { name, data } = result
        const filename: string = path.join(dir, name)
        this.emitFile({
          type: "asset",
          name: name,
          fileName: filename,
          source: data,
        })
      })
    })
  }

  return {
    name: "rollup-plugin-generate-icon",
    generateBundle: generateBundle,
  }
}

export default generateIconPlugin
