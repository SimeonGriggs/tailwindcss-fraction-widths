const fractionWidths = require('./index')

module.exports = {
  purge: [],
  theme: {},
  variants: {},
  plugins: [fractionWidths(16), fractionWidths([2, 7])],
}
