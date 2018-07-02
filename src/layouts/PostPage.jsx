import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import get from 'lodash/get'
import ReactDisqusThread from 'react-disqus-thread'

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
    transition: 0.1s ease-in-out;
  }

  .postPageText {
    margin-top: 50px;
    transition: 0.1s ease-in-out;

    h1 {
      margin: 0;
      transition: 0.1s ease-in-out;
    }

    h4 {
      transition: 0.1s ease-in-out;
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
      transition: 0.1s ease-in-out;
      .gatsby-resp-image-link {
        margin-bottom: 30px;
      }
      .gatsby-resp-image-background-image {
        padding-top: 56.25%;
        padding-bottom: 0 !important;
      }
    }
  }

  @media screen and (max-width: 570px) {
    .returnButton {
      font-size: 1em;
      margin-top: 10px;
    }
    .postPageText {
      margin-top: 30px;

      h1 {
        font-size: 3.5em;
      }

      h4 {
        font-size: 1em;
      }

      h4:first-of-type {
        font-size: 1em;
      }

      p {
        font-size: 1em;
        margin-top: 30px;

        .gatsby-resp-image-link {
          margin-bottom: 20px;
        }
      }

      p:nth-of-type(odd) {
        width: 90%;
        margin-bottom: 0;
        margin-top: 30px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .returnButton {
      font-size: 0.8em;
      margin-top: 10px;
    }
    .postPageText {
      margin-top: 20px;

      h1 {
        font-size: 2.5em;
      }

      h4 {
        font-size: 0.8em;
      }

      h4:first-of-type {
        font-size: 0.8em;
      }

      p {
        font-size: 0.8em;
        margin-top: 20px;

        .gatsby-resp-image-link {
          margin-bottom: 10px;
        }
      }

      p:nth-of-type(odd) {
        width: 90%;
        margin-bottom: 0;
        margin-top: 20px;
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
    // console.log(data.markdownRemark.fields.slug)

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const fullPath = get(this.props, 'data.site.siteMetadata.basePath') + get(this.props, 'data.markdownRemark.fields.slug')
    const postTitle = data.markdownRemark.frontmatter.title | siteTitle

    return (
      <PostPageStyle>
        <Link to="/" className="returnButton">Indietro /></Link>
      
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
        <ReactDisqusThread
          shortname={'volley-summer-camp'}
          identifier={data.markdownRemark.frontmatter.id}
          title={`${data.markdownRemark.frontmatter.title} | ${siteTitle}`}
          url={fullPath}
          onNewComment={this.handleNewComment}
		    style={{marginTop: '50px'}}/>
      </PostPageStyle>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        basePath
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      fields {
        slug
      }
      frontmatter {
        title
        id
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