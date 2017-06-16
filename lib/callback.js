const httpProxy = require('http-proxy');
const getUpstream = require('./getUpstream');

const proxy = httpProxy.createProxyServer({
  ws: true,
  secure: false
});

const callback = function(req, res) {
  const { target, poll } = getUpstream(req.headers.host);

  if (target) {
    proxy.web(req, res, { target });
    poll();
  } else {
    res.end(`<h1>
      404 Not Found!
    </h1>`);
  }

  proxy.once('error', e => {
    console.log(e);
    res.end(`${e.stack}`);
  });
};

const upgradeCallback = function(req, socket, head) {
  const { target, poll } = getUpstream(req.headers.host);
  if (target) {
    proxy.ws(req, socket, head, { target });
    poll();
  }
};

exports.callback = callback;
exports.upgradeCallback = upgradeCallback;