const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts' 
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }, i) => {
        let colorTmp = "";
        if(i % 2 === 0) {
          colorTmp = 'red'
        } else {
          colorTmp = 'blue'
        }
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/layouts/PostPage.jsx'),
          context: {
            slug: node.fields.slug,
            color: colorTmp
          },
        })
      })
      resolve();
    })
  })
}