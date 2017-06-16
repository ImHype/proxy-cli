let config = {};

function setConfig(cfg) {
    config = cfg;
}


function getConfig() {
    return config;
}

exports.getConfig = getConfig;
exports.setConfig = setConfig;