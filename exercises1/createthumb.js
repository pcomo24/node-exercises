var fs = require('fs');
var gm = require('gm');
var request = require('request');
var completeMsg = 'it worked!';

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';

var requestOptions = {
  url: url,
  encoding: null
};

function downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback) {
  request.get(requestOptions, function(err, response, data) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, data, function(err) {
      if (err) {
        callback(err);
        return;
      }
      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, function(err) {
          if (err) {
            callback(err);
            return;
          }
          callback(null, completeMsg);
        });
    });
  });
}


//Extract a reusable function downloadAndCreateThumbnail(imageUrl, filename, thumbnailFilename, callback). You should be able to use the function like so:


downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
  if (err) {
    console.log("it didnt work");
    return;
  }
  console.log(completeMsg);
})
