module.exports = {
  siteUrl: process.env.SITE_URL || 'https://portfolio-tahaarshad.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
