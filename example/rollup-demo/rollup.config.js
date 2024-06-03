import { defineConfig } from "rollup"
import generateIcon from "rollup-plugin-generate-icon"
import path from "path"

const config = defineConfig({
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
    }
  ],
  plugins: [
    generateIcon({
      logo: path.resolve(__dirname, "./public/icon.png"),
    }),
  ],
})

export default config
