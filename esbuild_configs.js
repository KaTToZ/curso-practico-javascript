const esbuild = require('esbuild')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const sassPlugin = require("esbuild-plugin-sass");

esbuild.build({
  entryPoints: [
    'src/styles/imports.scss',
    'src/js/forms.js'
  ],
  bundle: true,
  splitting: true,
  outdir: 'dist',
  minify: true,
  format: 'esm',
  plugins: [ sassPlugin({
    rootDir: __dirname,
    async transform (source) {
      const { css } = await postcss([ autoprefixer ]).process(source)
      return css
    }
  }) ],
  publicPath: 'dist',
  loader: { '.png': 'file', '.ttf': 'file' },
  sourcemap: true,
  target: [
    'esnext'
  ]
})
  .catch((e) => console.error(e.message))
