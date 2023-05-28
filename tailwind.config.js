// eslint-disable-next-line @typescript-eslint/no-var-requires
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
  theme: {},
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi'])
    })],
  content: [
    '/components/**/*.{vue,js,ts}',
    '/layouts/**/*.vue',
    '/pages/**/*.vue',
    '/composables/**/*.{js,ts}',
    '/plugins/**/*.{js,ts}',
    '/utils/**/*.{js,ts}',
    '/App.{js,ts,vue}',
    '/app.{js,ts,vue}',
    '/Error.{js,ts,vue}',
    '/error.{js,ts,vue}',
    '/app.config.{js,ts}'
  ]
}
