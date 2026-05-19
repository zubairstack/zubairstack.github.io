/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://izubaire.github.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}

