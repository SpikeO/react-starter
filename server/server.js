import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import httpProxy from 'http-proxy';
import cookie from 'react-cookie';

import {UserModel} from './schemas';


import webpackConfig from '../webpack.config.js';
import config from '../src/config';

const compiler = webpack(webpackConfig);
const app = express();
const targetUrl = `http://${config.apiHost}:${config.apiPort}/api`;

const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  changeOrigin: true
});
app.use(express.static(`${__dirname}/www`));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

// Proxy to API server
app.use('/api', (req, res) => {
  cookie.plugToRequest(req, res);
  proxy.web(req, res, { target: targetUrl });
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  const json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/mongo', (req, res) => {
  const testUser = UserModel.find(function(err, doc) {
    res.send(doc);
  });
});

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../www/index.html'));
});
