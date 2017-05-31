var fs = require('fs');
var request = require('request');
var readline = require('readline');
var sharp = require('sharp');

var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};

request.get(options, function(err, response, imageData) {
  sharp(imageData)
    .resize(240,240)
    .toFile('output.jpg', function(err) {
      if (err) {
      console.log('didnt work hommie');
      return;
    }
    console.log('resized');
    return;
    });
});
