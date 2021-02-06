require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Klein und Haarig Festival`,
    titleTemplate: "Klein und Haarig Festival",
    description: `Ein kleines Festival in Bad Wildbad vom 9. bis 11. Juli 2021`,
    author: `Bunte Platte e.V.`,
    url: `https://www.kleinundhaarig.de`,
    image: `/images/kuhthumbnail.jpg`,
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
