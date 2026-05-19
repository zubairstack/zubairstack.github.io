/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://izubaire.github.io',
  generateRobotsTxt: true,
  output: 'export',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}

