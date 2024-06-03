import sharp, { OutputInfo, FormatEnum } from "sharp"

async function sharp_resolver(
  file: string,
  size: number,
  format: keyof FormatEnum,
  grayscale: boolean,
): Promise<{
  data: Buffer
}> {
  const { data } = await sharp(file)
    .resize(size)
    .toFormat(format)
    .grayscale(grayscale)
    .toBuffer({ resolveWithObject: true })

  return { data }
}

export { sharp_resolver }

export type { OutputInfo, FormatEnum }
