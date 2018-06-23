module.exports = {
  siteMetadata: {
    title: 'Volley Summer Camp 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
