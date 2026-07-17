import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { defineConfig } from 'vite'

function portfolioAssets() {
  const assetRoot = join(process.cwd(), 'assets')
  const files = []

  const collect = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const filePath = join(directory, entry.name)
      if (entry.isDirectory()) collect(filePath)
      else files.push(filePath)
    }
  }

  return {
    name: 'portfolio-assets',
    buildStart() {
      collect(assetRoot)
    },
    generateBundle() {
      for (const filePath of files) {
        this.emitFile({
          type: 'asset',
          fileName: `assets/${relative(assetRoot, filePath).replaceAll('\\', '/')}`,
          source: readFileSync(filePath),
        })
      }
    },
  }
}

export default defineConfig({
  base: '/portfolio/',
  plugins: [portfolioAssets()],
})