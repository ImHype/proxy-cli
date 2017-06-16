const chokidar = require('chokidar');
const {setConfig} = require('./config');

function watchConfig(configFile) {
  loadConfig(configFile);
  chokidar
    .watch(configFile, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    })
    .on('change', () => loadConfig(configFile));
}

function loadConfig(configFile) {
  try {
    setConfig(require(configFile));
    console.log('Loaded config success!');
  } catch (e) {
    console.log(e);
  }
}

module.exports = watchConfig;
