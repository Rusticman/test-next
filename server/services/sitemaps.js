const sitemap = require('sitemap');

const overrides = {
  homepage: '/',
};

// TODO caching
module.exports = {
  initializeSitemaps(host) {

    // init sitemap index
    const root = sitemap.buildSitemapIndex({
      urls: [
        `${host}/sitemap_pages.xml`,
        `${host}/sitemap_posts.xml`,
      ],
    });

    // Return the sitemap index
    next.server.get('/sitemap.xml', async (req, res) =>
      res.header('Content-Type', 'application/xml').send(root.toString())
    );

    // Page Sitemap
    // TODO - pages seem to be unpublished?
    next.server.get('/sitemap_pages.xml', async (req, res) => {
      try {
        const sm = sitemap.createSitemap({
          hostname: host,
          cacheTime: 600, // TODO
        });

        const pages = await Content.find({
          type: 'page',
          status: 'publish',
        });

        for (let i = 0, len = pages.length; i < len; i++) {
          const page = pages[i];

          let parentSlug = '/';

          if (page.parent) {
            const parent = await Content.findOne(page.parent);
            parentSlug = `/${parent.slug}`;
          }

          // TODO check: lib seems clever enough parse correct urls (e.g. ending //)
          sm.add({
            url: `${parentSlug}/${overrides[page.slug] || page.slug}`,
          });
        }

        return res.header('Content-Type', 'application/xml').send(sm.toString());
      } catch (e) {
        console.log(e);
        return res.status(500).end();
      }
    });

    // TODO
    next.server.get('/sitemap_posts.xml', async (req, res) => {
      try {
        const sm = sitemap.createSitemap({
          hostname: host,
          cacheTime: 600, // TODO
          urls: [{
            url: 'todo',
          }],
        });

        return res.header('Content-Type', 'application/xml').send(sm.toString());
      } catch (e) {
        console.log(e);
        return res.status(500).end();
      }
    });

    return Promise.resolve();

  }
};
