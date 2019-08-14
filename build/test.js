var fs = require('fs');
var generate = require('./generateColors');

var colors = generate("#212b31"); // blue grey 203
// var colors = generate("#213130"); // green
// var colors = generate("#212f31"); // cyan
// var colors = generate("#2b2131"); // purple
// var colors = generate("#212531"); // blue
// var colors = generate("#312621"); // orange
// var colors = generate("#281e1b"); // orange
// var colors = generate("#212121"); // grey
// var colors = generate("#351e1d"); // red

var settings = {
  "workbench.colorCustomizations": colors
}

var json = JSON.stringify(settings, null, 2);

var path = '../.vscode/settings.json'

fs.writeFile(path, json, (err) => {
  if (err) throw err;
  console.log(`saved ${path}`);
});
