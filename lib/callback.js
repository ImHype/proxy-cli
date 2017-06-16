const httpProxy = require('http-proxy');
const getUpstream = require('./getUpstream');

const proxy = httpProxy.createProxyServer({
  ws: true,
  secure: false
});

const callback = function(req, res) {
  let target, poll;

  try {
    ({ target, poll } = getUpstream(req.headers.host));
  } catch(e) {
    res.end(`<pre>${e.stack}</pre>`);
  }
  
  if (target) {
    proxy.web(req, res, { target });
    poll();
  } else {
    res.end(`<h1>Proxy - CLI!</h1>`);
  }

  proxy.once('error', e => {
    res.end(`${e.stack}`);
  });
};

const upgradeCallback = function(req, socket, head) {
  let target, poll;

  try {
    ({ target, poll } = getUpstream(req.headers.host));
  } catch(e) {
    res.end(`<pre>${e.stack}</pre>`);
  }
  
  if (target) {
    proxy.ws(req, socket, head, { target });
    poll();
  }
};

exports.callback = callback;
exports.upgradeCallback = upgradeCallback;