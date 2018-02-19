require('isomorphic-unfetch');
require('./utils');

const express = require('express');
const { initializeRoutes } = require('./routes');
const { initializeRediBox } = require('./services/redibox');
const { initializeWaterline } = require('./services/waterline');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

global.next = require('next')({ dev, dir: './src' });

(async () => {
  await next.prepare();
  next.server = express();

  // await initializeWaterline();
  await initializeRediBox();
  await initializeRoutes();

  next.server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} | ${!dev ? 'prod' : ''}`);
  });

  // prevents hanging on restarts
  process.on('exit', () => {
    next.server.close();
  });
})();
