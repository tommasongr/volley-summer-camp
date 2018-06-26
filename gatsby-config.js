module.exports = {
  siteMetadata: {
    title: 'Volley Summer Camp 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/assets/images/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 3000,
            }
          }
        ]
      }
    },
  ]
}
