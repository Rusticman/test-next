module.exports = async (req, res) => {
  const url = req.params[0];
  let [, slug, childSlug, babySlug] = url.split('/');

  // allow next to handle it's own routes and assets
  if (slug === '_next' || slug.includes('.')) {
    return next.getRequestHandler()(req, res);
  }
  if (!slug.length) slug = 'homepage';

  console.log('slug', slug);

  next.renderToHTML(
    req,
    res,
    `/cm/templates/${slug}`
  ).then(html => {
    return res.send(html);
  }).catch(err => res.send(err));
};
