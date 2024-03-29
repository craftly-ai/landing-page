let graphqlURL = `https://craftly.ai/craftly-wp/graphql`

module.exports = {
  pathPrefix: `/craftly-landing`,
  siteMetadata: {
    title: ``,
    description: ``,
    author: `Cai @ Craftly`,
    siteUrl: "https://craftly.ai",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-min.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: graphqlURL,
      },
    },
    //google gtag
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GTM-KSCL662"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: "blxa6i3j",
      },
    },
  ],
}
