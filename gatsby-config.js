module.exports = {
  siteMetadata: {
    title: 'Volley Summer Camp 2018',
    basePath: 'https://volley-summer-camp.netlify.com'
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
              maxWidth: 2000,
              linkImagesToOriginal: true,
              backgroundColor: '#f7f7f7'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Volley Summer Camp",
        short_name: "Summer Camp",
        start_url: ".",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/summer_camp_2018_logo_512x512.jpg"
      }
    },
  ]
}
