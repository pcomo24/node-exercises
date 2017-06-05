var request = require('request');
var fs = require('fs');
var completeMsg = 'it worked!';

//var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
//var filename = 'output.html';

function saveWebPage(url, fileNameOut, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(fileNameOut, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null, completeMsg);
    });
  });
};

//Extract a reusable function saveWebPage(url, filename, callback). You should be able to use the function like so:

saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', function(err) {
  if (err) {
    console.log('it didnt work :(');
    return;
  }
  console.log(completeMsg);
});
