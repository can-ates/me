require("dotenv").config()

const {GATSBY_ANALYTICS} = process.env

module.exports = {
  siteMetadata: {
    title: 'Junior Full Stack Software Developer',
    description: `I'm a Junior Full Stack Software Developer based in Ankara, Turkey. I enjoy creating dynamic web applications, and I'm React enthusiast.`,
    author: `@Mutlu Can Ates`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: GATSBY_ANALYTICS,
        head: true,
        
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `datas`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `developer`,
        short_name: `web`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/developer.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-styled-components",
      options: {},
    },
  ],
}
