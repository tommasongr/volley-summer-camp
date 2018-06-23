import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'
import PostCardRight from '../components/postCardRight'
import PostCardLeft from '../components/postCardLeft'

const IndexPage = ({ data }) => (
  <div>
    <Header/>
    {data.allMarkdownRemark.edges.reverse().map(({ node }, i) => {
        if(i % 2 === 0) { //index is even
            return <PostCardRight key={node.id} post={node} />
        } else {
          return <PostCardLeft key={node.id} post={node} />
        }
    })}
  </div>
)

export const query = graphql`
  query SitePost {
    allMarkdownRemark {
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
          }
          html
          excerpt
        }
      }
    }
  }
`;

export default IndexPage
