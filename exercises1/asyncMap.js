var fs = require('fs');
var async = require('async');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var content = 'Hello, World!'

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

async.map(filenames, makeFiles, function(err) {
  console.log('files written.')
})
function makeFiles () {
  filenames.forEach(function (element, index, array) {
    fs.writeFile(element, content, function (err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
};
makeFiles();
