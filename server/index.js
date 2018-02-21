require('isomorphic-unfetch');
require('./utils');

const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const compression = require('compression');

const { initializeRoutes } = require('./routes');
const { initializeRediBox } = require('./services/redibox');
const { initializeWaterline } = require('./services/waterline');

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

global.next = require('next')({ dev, dir: './src' });

(async () => {
  await next.prepare();
  next.server = express();

  // middleware
  next.server.use(compression({ threshold: 0 }));

  next.server.use(
    cors({
      origin:
        prettyHost.indexOf('http') !== -1 ? prettyHost : `http://${prettyHost}`,
      credentials: true,
    })
  );

  next.server.use(helmet());

  // internal services
  // await initializeWaterline();
  await initializeRediBox();
  await initializeRoutes();

  next.server.listen(port, host, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} | ${!dev ? 'prod' : ''}`);
  });

  // prevents hanging on restarts
  process.on('exit', () => {
    next.server.close();
  });
})();
