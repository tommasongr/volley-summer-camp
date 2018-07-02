import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Header from '../components/header'
import PostCardRight from '../components/post/PostCardRight'
import PostCardLeft from '../components/post/PostCardLeft'

export default class IndexPage extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        <Header/>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          if(i % 2 === 0) { //index is even
            return <PostCardRight key={node.id} post={node} />
          } else {
            return <PostCardLeft key={node.id} post={node} />
          }
        })}
      </div>
    )
  }
}

export const query = graphql`
  query SitePost {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "DD/MM/YYYY")
            published
            round
            frontImg {
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          html
          excerpt
        }
      }
    }
  }
`;