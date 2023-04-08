/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `NIC ICAZA`,
    subHeader: "Creativity in Data",
    description: `portfolio for austin, tx based creative data science professional, Nic Icaza.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
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
        icon: `src/assets/images/nicaza-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Eczar`,
            file: `https://fonts.googleapis.com/css2?family=Eczar:wght@400;600;700&display=swap`,
          },
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap`,
          },
          {
            name: `Caudex`,
            file: `https://fonts.googleapis.com/css2?family=Caudex:wght@400;600;700&display=swap`,
          },
        ],
      },
      
      
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NLWWNDD",

        includeInDevelopment: false,
  
        enableWebVitalsTracking: true,

      },
    },
  ],
}
