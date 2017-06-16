const config = require('./config');

function getUpstream(host) {
  let _location;
  const proxyConfig = config.getConfig();

  proxyConfig.locations.forEach(location => {
    if (location.host === host) {
      _location = location;
    }
  });

  let upstream = _location? _location.upstream: void 0;

  if (upstream === void 0) {
    upstream = [];
  }

  if (!Array.isArray(upstream)) {
    upstream = [upstream];
  }

  const target = upstream.pop();

  return {
    target,
    poll() {
      if (target) {
        upstream.unshift(target);
      }
    }
  };
}

module.exports = getUpstream;