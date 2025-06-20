const fs = require("fs");
const path = require("path");

function generateI18nPages() {
  const pagesDirectory = path.join(__dirname, "src/pages");
  const files = fs.readdirSync(pagesDirectory);

  return files
    .filter(file => file.endsWith(".js")) // Only .js pages
    .map(file => {
      let route = file.replace(".js", "");

      // Special case for index.js
      if (route === "index") {
        route = "";
      }

      // Special case for dynamic routes like [id].js
      if (route.startsWith("product")) {
        return { matchPath: "/:lang?/product/:id", languages: ["en", "de"] };
      }

      return { matchPath: `/:lang?/${route}`, languages: ["en", "de"] };
    });
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `festivalImages`,
        path: `${__dirname}/static/images/festival2025`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`de`, `en`],
        defaultLanguage: `de`, // OG: de
        siteUrl: `https://www.kleinundhaarig.de`,
        trailingSlash: "always", // normalerweise an
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: ".", // Enable dot notation for nested translation keys
          nsSeparator: false, 
        },
        pages: generateI18nPages(),
      },
    },
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
};