/* eslint-disable global-require */

const types = ['post', 'page', 'category'];

const filter = {
  type: types,
  // status: 'publish', // TODO add back in when pages published.
};

module.exports = {
  /** ------------
   *     ROUTES
   *  ----------- */

  'get *': async (req, res) => {
    const url = req.params[0];
    const [, slug, childSlug, babySlug] = url.split('/');

    // allow next to handle it's own routes and assets
    if (slug === '_next' || slug.includes('.')) {
      return next.getRequestHandler()(req, res);
    }

    const promises = [];

    promises.push(Content.findOne({ slug: slug || 'homepage', ...filter }));

    if (childSlug)
      promises.push(Content.findOne({ slug: childSlug, ...filter }));

    if (babySlug) promises.push(Content.findOne({ slug: babySlug, ...filter }));

    const [error, contents] = await A2A(promises);
    if (error) {
      return next.render(req, res, `/${BRAND}/http/error`, error);
    }

    if (contents && contents[0]) {
      const { id, slug: contentSlug, meta } =
        contents[2] || contents[1] || contents[0];

      if (meta.template) {
        return next.render(
          req,
          res,
          `/${BRAND}/templates/${meta.template}`,
          contents[2] || contents[1] || contents[0]
        );
      }

      console.warn('-'.repeat(80));
      console.warn(
        ` -> FIXME: Template meta field missing for content '${id}' with slug '${contentSlug}'`
      );
      console.warn('-'.repeat(80));
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
