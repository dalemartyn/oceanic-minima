const fs = require('fs');

const theme = {
  colors: require('./generateColors')(),
  tokenColors: require('../themes/oceanic-charcoal.json').tokenColors
};

const json = JSON.stringify(theme, null, 2);

const path = '../themes/oceanic-minima-color-theme.json';

fs.writeFile(path, json, (err) => {
  if (err) throw err;
  console.log(`saved ${path}`);
});
