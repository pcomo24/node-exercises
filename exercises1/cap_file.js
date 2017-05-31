var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('filename: ', function(fileName) {
  fs.readFile(fileName, function (err, buffer) {
    if (err) {
      console.log('no such file or directory: ' + fileName);
      return;
    }
    console.log(buffer.toString().toUpperCase());
  });
  rl.close();
});
