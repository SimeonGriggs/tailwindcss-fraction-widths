import plugin from "tailwindcss/plugin";
import { RecursiveKeyValuePair } from "tailwindcss/types/config";

/** @public */
export type FractionWidthsConfig = number | number[];

/**
 * @public
 * Returns tailwind-formatted grid widths  
 * Example: `gridWidths(2)`  
 * Returns: `{ 'w-1/2': '50%', 'w-2/2': '100%'}`
 *
 * Or use an array to generate multiple sets of widths
 * Example: `gridWidths([2, 7, 16])`
 */
export const fractionWidths = (config: FractionWidthsConfig) =>
  plugin(({ addUtilities, e }) => {
    let columnSets: number[] = [];

    if (Array.isArray(config)) {
      columnSets = [...config];
    } else if (Number.isInteger(config)) {
      columnSets.push(config);
    }

    if (!columnSets.length) {
      throw new Error(`Invalid config passed to fractionWidths()`);
    }

    if (!columnSets.every((set) => Number.isInteger(set))) {
      throw new Error(`Invalid config passed to fractionWidths()`);
    }

    const colsObj: RecursiveKeyValuePair = {};

    columnSets.forEach((set) => {
      const colsArray = [...Array(set).keys()];

      colsArray.forEach((col) => {
        const colKey = `${col + 1}/${set}`;
        const colWidth = (100 / set) * (col + 1);
        const colWidthRounded =
          colWidth % 1 === 0 ? colWidth : colWidth.toFixed(2);

        colsObj[`.${e(`w-${colKey}`)}`] = { width: `${colWidthRounded}%` };
      });
    });

    addUtilities(colsObj);
  });
