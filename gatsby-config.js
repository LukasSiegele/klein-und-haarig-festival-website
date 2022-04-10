require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Klein und Haarig`,
    titleTemplate: "Klein und Haarig",
    description: `Ein kleines Festival im Schwarzwald vom 15. bis 18. Juli 2022`,
    author: `Bunte Platte e.V.`,
    url: `https://www.kleinundhaarig.de`,
    image: `/images/Stairway.jpg`,
    twitterUsername: "@kleinundhaarig",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_API_TICKET, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}
