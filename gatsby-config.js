module.exports = {
  siteMetadata: {
    title: "Jorge Blog",
    body: {
      content: "Some SEO content"}
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark"
  ],
};
