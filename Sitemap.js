const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: 'https://t-bas.github.io' });
  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

  smStream.pipe(writeStream);

  // Add your routes here (without the hash `#/`)
  const pages = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/eng', changefreq: 'monthly', priority: 1.0 },

    { url: '/aboutTbas', changefreq: 'monthly', priority: 0.8 },
    { url: '/eng/aboutTbas', changefreq: 'monthly', priority: 0.5 },

    { url: '/inPerson', changefreq: 'monthly', priority: 0.9 },
    { url: '/eng/inPerson', changefreq: 'monthly', priority: 0.6 },

    { url: '/online', changefreq: 'monthly', priority: 0.9 },
    { url: '/eng/online', changefreq: 'monthly', priority: 0.6 },

    { url: '/tutors', changefreq: 'monthly', priority: 0.8 },
    { url: '/eng/tutors', changefreq: 'monthly', priority: 0.5 },

    { url: '/feedback', changefreq: 'monthly', priority: 0.8 },
    { url: '/eng/feedback', changefreq: 'monthly', priority: 0.5 },

    { url: '/faq', changefreq: 'monthly', priority: 0.8 },
    { url: '/eng/faq', changefreq: 'monthly', priority: 0.5 },

    { url: '/access', changefreq: 'monthly', priority: 0.8 },
    { url: '/eng/access', changefreq: 'monthly', priority: 0.5 },

    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/eng/contact', changefreq: 'monthly', priority: 0.6 },

    { url: '/apply', changefreq: 'monthly', priority: 0.9 },
    { url: '/eng/apply', changefreq: 'monthly', priority: 0.6 }
  ];

  pages.forEach(page => {
    smStream.write(page);
  });

  smStream.end();

  await streamToPromise(smStream);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap();
