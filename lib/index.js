const createHttpServer = require('./createHttpServer');
const path = require('path');
const {getConfig} = require('./config');
const watchConfig = require('./watchConfig');
const {callback, upgradeCallback} = require('./callback');

module.exports = function({ configFile, secure = false }) {
  watchConfig(configFile);
  
  const server = createHttpServer({secure, callback, upgradeCallback});

  const { port = (secure ? 443: 80)} = getConfig();

  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};
