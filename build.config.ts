import { BuildConfig, defineBuildConfig } from "unbuild"

const config: BuildConfig[] = defineBuildConfig({
  entries: ["./src/index.ts"],
  outDir: "dist",
  declaration: true,
  rollup: {
    emitCJS: true,
  }
})

export default config