const { resolve } = require('path')
const { readdirSync } = require('fs')
const { defineConfig } = require('vite')
// import { rollupImportMapPlugin } from "rollup-plugin-import-map"
import watch from 'rollup-plugin-watch'

import { imports } from './import-map.json'

const inputFiles = readdirSync('src').filter(file => {
  if (file.endsWith('.d.ts')) return false

  return file.endsWith('.ts')
}).map(file => resolve(__dirname, `src/${file}`))

module.exports = defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: inputFiles,
      // plugins: [
      //   {
      //     name: 'watcha',
      //     async buildStart() {
      //       readdirSync('src').filter(file => {
      //         if (file.endsWith('.d.ts')) return false
            
      //         return file.endsWith('.ts')
      //       }).map(file => resolve(__dirname, `src/${file}`)).forEach(file => this.addWatchFile(file))
      //     }
      //   }
      // ]
    },
    watch: {}
  },
  resolve: {
    alias: imports
  }
})
