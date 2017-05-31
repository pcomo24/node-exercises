var fs = require('fs');
var dns = require('dns');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Domain name: ', function(host) {
  dns.lookup(host, function(err, ip) {
    console.log('IP Address: ' + ip)
  });
  rl.close();
});
