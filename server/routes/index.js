/* eslint-disable global-require */

// TODO handle from node env?
const BRAND = 'cm';

module.exports = {
  /** ------------
   *     ROUTES
   *  ----------- */

  'get *': async (req, res) => {
    const url = req.params[0];

    if (url.includes('_next')) {
      return next.getRequestHandler()(req, res);
    }


    // TODO URL mapping to content slug
    if (url === '/') {

      return next.render(req, res, `/${BRAND}/templates/homepage`, {
        "slug": "homepage",
        "title": "Winner winner chicken dinner",
        "meta": JSON.parse("{\"template\":\"homepage\",\"block_hero\":{\"headline\":\"Homepage\",\"secondary\":\"Welcome to checkd media\"},\"block_about\":{\"cta\":\"Read More\",\"description\":\"established communities await your brand.\"},\"has_sub_pages\":false}"),
        "parent": 0
      });
    }

    if (url === 'news') {
      const news = await Content.findOne({id:562});
      const posts = await Content.find({ parent: 562});
console.log('NEWs')
      return next.render(req, res, `/${Brand}/templates/news`, {
        news,
        posts
      });
    }

    // 404 page
    return next.render(req, res, `/${BRAND}/http/404`);
  },

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
