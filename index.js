import plugin from 'tailwindcss/plugin'

/**
 * Returns tailwind-formatted grid widths
 * Example: gridWidths(2)
 * Returns: { 'w-1/2': '50%', 'w-2/2': '100%'}
 *
 * Or use an array!
 * Example: gridWidths([2,7,16])
 */
export const fractionWidths = (cols) =>
  plugin(({ addUtilities, e }) => {
    let columnSets = []

    if (Number.isInteger(cols)) {
      columnSets.push(cols)
    }

    if (Array.isArray(cols)) {
      columnSets = [...cols]
    }

    if (!columnSets.length) {
      return
    }

    const colsObj = {}

    columnSets.forEach((set) => {
      const colsArray = [...Array(set).keys()]

      colsArray.forEach((col) => {
        if (!Number.isInteger(col)) {
          return false
        }

        const colKey = `${col + 1}/${set}`
        const colWidth = (100 / set) * (col + 1)
        const colWidthRounded =
          colWidth % 1 === 0 ? colWidth : colWidth.toFixed(2)

        colsObj[`.${e(`w-${colKey}`)}`] = { width: `${colWidthRounded}%` }
      })
    })

    addUtilities(colsObj, ['responsive'])
  })


