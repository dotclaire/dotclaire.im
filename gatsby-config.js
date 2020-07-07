/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-postcss"],
  siteMetadata: {
    title: "Claire Charalampidou",
    description: "Claire Charalampidou. Software Engineer",
    url: "https://www.dotclaire.im", // No trailing slash allowed!
    image: "./static/portrait.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@dotclaireim",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
  ],
}
