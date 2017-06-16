let config = {};
let configFile;

function getConfig() {
    try {
        delete require.cache[require.resolve(configFile)];
        return require(configFile);
    } catch(e) {
        throw e;
    }
}

function setConfigFile(cfgFile) {
    configFile = cfgFile;
}

exports.getConfig = getConfig;
exports.setConfigFile = setConfigFile;