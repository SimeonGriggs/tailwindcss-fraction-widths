# Tailwind CSS fraction width classes

Everyone knows _16_ column grids rule. Now you can get them quickly.

```
npm install tailwindcss-fraction-widths
```

Then update your `tailwind.config.js` to use the plugin, passing in your desired number of columns as a Number, or array of Numbers.

```js
// tailwind.config.js
const fractionWidths = require("./index");

module.exports = {
  // ... all other settings
  plugins: [
    // Will add .w-1/16, .w-2/16, etc
    fractionWidths(16),

    // Will add .w-1/2, .w-2/2, .w-1/7, etc
    fractionWidths([2, 7]),
  ],
};
```

- By [Simeon Griggs](https://simeongriggs.dev/)
