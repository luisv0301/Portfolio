require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Luis Vasquez portfolio",
    description:
      "I´ll help you to get the website you always wished for, let´s make it happen.",
    keyword: "portfolio, javascript, react, frontend",
    twitterUsername: "@luisv0301",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sn45qj23tkhf`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
