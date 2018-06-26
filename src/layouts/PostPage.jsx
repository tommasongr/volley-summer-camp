import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PostPageStyle = styled.div`
  max-width: 1050px;
  margin: 0 auto;

  .returnButton {
    font-weight: 500;
    color: #5050506e;
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 20px;
    display: inline-block;
    font-size: 1.2em;
    letter-spacing: 0.3px;
  }

  .postPageText {
    margin-top: 50px;

    h1 {
      margin: 0;
    }

    h4:first-of-type {
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
    }

    p:nth-of-type(odd) {
      width: 90%;
      margin-bottom: 0;
      margin-top: 50px;
    }

    p:first-of-type {
      margin-top: 0;
    }

    p {
      margin-top: 50px;
      .gatsby-resp-image-link {
        margin-bottom: 30px;
      }
      .gatsby-resp-image-background-image {
        padding-top: 56.25%;
        padding-bottom: 0 !important;
      }
    }
  }
`;

const PostFrontImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  div {
    padding-top: 56.25%;
    padding-bottom: 0 !important;
  }

  & > img {
    height: none !importat;
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;'
  }
`;

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const textColor = this.props.pathContext.color;
    return (
      <PostPageStyle>
        <Link to="/" className="returnButton">Return /></Link>
      
        <PostFrontImg sizes={data.markdownRemark.frontmatter.frontImg.childImageSharp.sizes} />

        <div className="postPageText" style={{color: textColor}}>
          {data.markdownRemark.frontmatter.round === 1 ?
            <h4>1° Turno</h4> : <h4>2° Turno</h4>
          }
          <h1>{data.markdownRemark.frontmatter.date}</h1>
          <h4>{data.markdownRemark.frontmatter.subtitle}</h4>
          <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
          />
        </div>
      </PostPageStyle>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        subtitle
        date(formatString: "DD/MM/YYYY")
        round
        frontImg {
          childImageSharp {
            sizes(maxWidth: 3000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      html
      excerpt
    }
  }
`;