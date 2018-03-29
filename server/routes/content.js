const types = ['post', 'page', 'category'];

const filter = {
  type: types,
  // status: 'publish', // TODO add back in when pages published.
};

module.exports = async (req, res) => {
  const url = req.params[0];
  const [, slug, childSlug, babySlug] = url.split('/');

  // allow next to handle it's own routes and assets
  if (slug === '_next' || slug.includes('.')) {
    return next.getRequestHandler()(req, res);
  }

  const cacheKey = `cache:/${BRAND}/${slug ||
    'homepage'}/${childSlug}/${babySlug}${BUILD_ID}`;

  // check redis cache first
  const [getCacheError, cachedHtml] = await A2A(Cache.get(cacheKey));
  if (!dev && !getCacheError && cachedHtml) {
    res.setHeader('x-cache', 'HIT');
    res.send(cachedHtml);
    return undefined;
  }
  res.setHeader('x-cache', 'MISS');
  if (dev) console.log(`Cache skipped for key ${cacheKey} as we're in DEV.`);
  if (getCacheError) console.error(getCacheError);

  // get slug(s) content records
  const promises = [];
  promises.push(Content.findOne({ slug: slug || 'homepage', ...filter }));
  if (childSlug) promises.push(Content.findOne({ slug: childSlug, ...filter }));
  if (babySlug) promises.push(Content.findOne({ slug: babySlug, ...filter }));

  const [getContentError, contents] = await A2A(promises);
  if (getContentError) {
    console.error(getContentError);
    console.dir(getContentError)
    return next.render(req, res, `/${BRAND}/http/error`, getContentError);
  }

  if (contents && contents[0]) {
    const { id, slug: contentSlug, meta } =
      contents[2] || contents[1] || contents[0];

    if (meta.template) {
      const [renderError, html] = await A2A(
        next.renderToHTML(
          req,
          res,
          `/${BRAND}/templates/${meta.template}`,
          contents[2] || contents[1] || contents[0]
        )
      );

      if (renderError) {
        console.error(renderError);
        console.dir(renderError)
        return next.render(req, res, `/${BRAND}/http/error`, renderError);
      }

      // TODO cache set to 1 hour for now - should probably be 4 hours and auto delete items on update in CMS
      if (!getCacheError) await A2A(Cache.set(cacheKey, html, 3600));

      return res.send(html);
    }

    console.warn('-'.repeat(80));
    console.warn(
      ` -> FIXME: Template meta field missing for content '${id}' with slug '${contentSlug}'`
    );
    console.warn('-'.repeat(80));
  }
  // 404 page
  return next.render(req, res, `/${BRAND}/http/404`);
};
