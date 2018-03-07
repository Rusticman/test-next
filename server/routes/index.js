const { join } = require('path');

module.exports = {
  /** ------------
   *     ROUTES
   *  ----------- */
  'get /robots.txt': (req, res) =>
    next.serveStatic(
      req,
      res,
      join(__dirname, '../../src/static', `/robots.txt`)
    ),

  // site maps
  'get /sitemap.xml': require('./sitemaps').root,
  'get /sitemap_pages_:page.xml': require('./sitemaps').pages,
  'get /sitemap_posts_:page.xml': require('./sitemaps').posts,

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
