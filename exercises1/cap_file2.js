var errorMessage = 'no such file or directory: ';
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input file: ', function(fileNameIn) {
  fs.readFile(fileNameIn, function (err, buffer) {
    if (err) {
      console.log(errorMessage + fileNameIn);
      rl.close();
      return;
    }
    var contents = buffer.toString().toUpperCase();
    rl.question('output file: ', function(fileNameOut) {
      fs.writeFile(fileNameOut, contents, function(err) {
        if (err) {
          console.log(errorMessage + fileNameOut);
          rl.close();
          return;
        }
        console.log('wrote to file: ' + fileNameOut);
        rl.close();
      });
    });
  });
});
