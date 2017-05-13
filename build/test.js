var fs = require('fs');
var generate = require('./generateColors');

var colors = generate("#212b31"); // blue grey
var colors = generate("#213130"); // green
var colors = generate("#212f31"); // cyan

var settings = {
  "workbench.colorCustomizations": colors
}

var json = JSON.stringify(settings, null, 2);

var path = '../.vscode/settings.json'

fs.writeFile(path, json, (err) => {
  if (err) throw err;
  console.log(`saved ${path}`);
});
