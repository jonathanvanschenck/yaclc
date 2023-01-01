# Yaclc
Yet another command line colorizer

A no-nonsense, no-dependancy, simple ANSI escape code injector function to make colorizing your command line outputs easy.

## Installation
```bash
npm install yaclc
```

## Usage
Check out the [full API](./API.md), or run the example script to see what your terminal supports:
```bash
node demo.js
```

Here's a few ideas of what you can do:
```js
const { f } = require("yaclc");

console.log("Print "+f("In color", { color:"red" }));
console.log("Print "+f("hex color", { color:"#ff2219" }));
console.log("Print "+f("bold and underlined", { bold:true, underlined:true }));
```

## Future Plans
 [ ] Support nested formatting that doesn't totally override
