/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zubairstack.github.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}

