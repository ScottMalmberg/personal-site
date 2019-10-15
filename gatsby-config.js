/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Scott Malmberg | Front-End Developer`,
  },
  plugins: [`gatsby-plugin-sass`,`gatsby-plugin-react-helmet`, `gatsby-plugin-robots-txt`, `gatsby-plugin-sitemap`, {
    resolve: `gatsby-plugin-google-analytics`,
      options: {
         trackingId: `UA-88039298-1`,
      }
    },
    {
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './public/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }],
}
