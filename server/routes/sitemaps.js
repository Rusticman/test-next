const sitemap = require('sitemap');

const PAGE_SIZE = 100;
const OVERRIDES = {
  homepage: '/',
};

module.exports = {
  /**
   * Generates the root sitemap at /sitemap.xml with links to other site maps.
   *
   * @param req
   * @param res
   * @return {Promise.<void>}
   */
  async root(req, res) {
    const cacheKey = `sitemap:/${BRAND}/${DOMAIN_ROOT}/sitemap.xml`;

    // check redis cache first
    const [getCacheError, cachedXML] = await A2A(Cache.get(cacheKey));
    if (!getCacheError && cachedXML) {
      return res.header('Content-Type', 'application/xml').send(cachedXML);
    }

    const [pagesError, pagesCount] = await A2A(
      Content.count({
        type: 'page',
        status: 'publish',
      })
    );
    if (pagesError) return res.status(500).send('Database error.');

    const [postsError, postsCount] = await A2A(
      Content.count({
        type: 'post',
        status: 'publish',
      })
    );
    if (postsError) return res.code(500).send('Database error.');

    // build site map
    const root = sitemap.buildSitemapIndex({
      urls: [
        ...new Array(Math.ceil(pagesCount / PAGE_SIZE))
          .fill(0)
          .map((v, i) => `${DOMAIN_ROOT}/sitemap_pages_${i + 1}.xml`),
        ...new Array(Math.ceil(postsCount / PAGE_SIZE))
          .fill(0)
          .map((v, i) => `${DOMAIN_ROOT}/sitemap_posts_${i + 1}.xml`),
      ],
    });

    // generate the xml output
    const xmlString = root.toString();

    // 12 hour cache - ignore cache errors for fall through
    if (!getCacheError) await A2A(Cache.set(cacheKey, xmlString, 43200));

    return res.header('Content-Type', 'application/xml').send(xmlString);
  },

  /**
   * Generates the paged version of the sitemap for 'pages' content.
   *
   * @param req
   * @param res
   * @return {Promise.<void>}
   */
  async pages(req, res) {
    const page = parseInt(req.params, 10);
    if (Number.isNaN(page)) return res.status(400).send('Invalid page number.');

    const sm = sitemap.createSitemap({
      hostname: DOMAIN_ROOT,
    });

    // TODO

    sm.add({
      url: `FOOBAR`,
    });

    // 24 hour cache = 86400
    return res.header('Content-Type', 'application/xml').send(sm.toString());
  },

  /**
   * Generates the paged version of the sitemap for 'posts' content.
   *
   * @param req
   * @param res
   * @return {Promise.<void>}
   */
  async posts(req, res) {
    const page = parseInt(req.params, 10);
    if (Number.isNaN(page)) return res.status(400).send('Invalid page number.');

    const sm = sitemap.createSitemap({
      hostname: DOMAIN_ROOT,
    });

    // TODO

    sm.add({
      url: `FOOBAR`,
    });

    // 24 hour cache = 86400
    return res.header('Content-Type', 'application/xml').send(sm.toString());
  },
};
