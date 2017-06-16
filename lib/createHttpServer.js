const http = require('http');
const path = require('path');
const fs = require('fs');
const https = require('https');


function createHttpServer({ secure, callback , upgradeCallback}) {
  const server = secure
    ? https.createServer(
        {
          key: fs.readFileSync(
            path.resolve(__dirname, '..', 'certificate', 'localhost.key')
          ),
          cert: fs.readFileSync(
            path.resolve(__dirname, '..', 'certificate', 'localhost.crt')
          )
        },
        callback
      )
    : http.createServer(callback);
  server.on('upgrade', upgradeCallback);
  return server;
}

module.exports = createHttpServer;