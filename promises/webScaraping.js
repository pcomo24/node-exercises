var request = require('request');
var rp = require('request-promise');
var fs = require('fs');
success = 'scraped!';


var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];
function scrapeEm() {
  for (var i = 0; i < urls.length; i++) {
    rp(urls[i])
      .then (function (htmlString) {
        fs.writeFile(i + '.html', htmlString)
      })
      .then (function () {
        console.log(success);
      })
      .catch(function (err) {
        console.log('nope!')
      });
  }
};
scrapeEm();
