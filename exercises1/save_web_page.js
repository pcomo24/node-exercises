var errorMessage = 'no such file or directory: ';
var fs = require('fs');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('URL: ', function(webPage) {
  request.get(webPage, function(err, resp, html) {
    if (err) {
      console.log('webpage doesn\'t exist');
      rl.close();
      return;
    }
    console.log('got webpage html');
    rl.question('save to file: ', function(fileName) {
      fs.writeFile(fileName, html, function(err) {
        if (err) {
          console.log(errorMessage + fileName);
          rl.close();
          return;
        }
        console.log('Saved to file ' + fileName);
        rl.close();
      });
    });
  });
});
