const createHttpServer = require('./createHttpServer');
const path = require('path');
const {getConfig, setConfigFile} = require('./config');
const {callback, upgradeCallback} = require('./callback');

module.exports = function({ configFile, secure = false }) {
  setConfigFile(configFile);
  
  const { port = (secure ? 443: 80)} = getConfig();
  const server = createHttpServer({secure, callback, upgradeCallback});

  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};
