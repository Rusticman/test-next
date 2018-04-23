const { join } = require('path');

module.exports = {

  // content
  'get *': require('./content'),

  /** ------------
   *   INTERNALS
   *  ----------- */

  /**
   * Bootstraps all the routes defined above onto express router
   */
  initializeRoutes() {
    const routes = Object.entries(module.exports);

    for (let i = 0; i < routes.length; i++) {
      const [definition, handler] = routes[i];
      if (definition === 'initializeRoutes') continue;

      const [methodType, path] = definition.split(' ');

      if (typeof next.server[methodType] === 'function') {
        next.server[methodType](path, handler);
      } else {
        console.log(`Unknown http type '${methodType}' for route '${path}'.`);
      }
    }

    return Promise.resolve();
  },
};
