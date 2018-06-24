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

    p {
      width: 90%;
      margin-bottom: 0;
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
          <h1>{data.markdownRemark.frontmatter.date}</h1>
          <h4>{data.markdownRemark.frontmatter.subtitle}</h4>
          <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
          />
        </div>
        <PostPageImgContainer />
      </PostPageStyle>
    )
  }
}

const PostPageImgContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
  margin-bottom: 30px;

  div {
    width: 100%;
    display: block;
    background-image: url("https://source.unsplash.com/collection/190727");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  div::before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
`;

const PostPageImgContainer = () => (
  <PostPageImgContainerStyle>
    <Link to=""><div></div></Link>
    <Link to=""><div></div></Link>
    <Link to=""><div></div></Link>
  </PostPageImgContainerStyle>
)

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        subtitle
        date(formatString: "DD/MM/YYYY")
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