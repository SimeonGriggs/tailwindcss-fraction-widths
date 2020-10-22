const fractionWidths = require('./index')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {},
  variants: {},
  plugins: [
    fractionWidths(16),
    fractionWidths([2,7]),
  ],
}
