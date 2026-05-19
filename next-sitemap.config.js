/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zubaire.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}

