require('isomorphic-unfetch');
require('./utils');

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const multipart = require('connect-multiparty');

const { initializeRoutes } = require('./routes');
const { initializeRediBox } = require('./services/redibox');
const { initializeWaterline } = require('./services/waterline');

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

global.PORT = port;
global.HOST = prettyHost;
global.dev = process.env.NODE_ENV !== 'production';
global.next = require('next')({ dev, dir: './src' });

global.DOMAIN_ROOT = HOST === 'localhost' ? `${HOST}:${PORT}` : `${HOST}`;

(async () => {
  await next.prepare();
  next.server = express();

  // middleware
  next.server.use(
    cors({
      origin:
        prettyHost.indexOf('http') !== -1 ? prettyHost : `http://${prettyHost}`,
      credentials: true,
    })
  );

  // parse application/json
  next.server.use(bodyParser.json());

  // multipart forms
  next.server.use(multipart());

  // parse application/x-www-form-urlencoded
  next.server.use(bodyParser.urlencoded({ extended: false }));

  if (!dev) next.server.use(compression({ threshold: 0 }));

  // internal services
  await initializeWaterline();
  await initializeRediBox();
  await initializeRoutes();

  next.server.listen(port, host, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} | ${!dev ? 'prod' : ''}`);
  });

  // prevents hanging on restarts
  process.on('exit', () => {
    Log.info('Shutting down, goodbye :(');
  });
})();
