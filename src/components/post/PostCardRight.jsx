import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PostCardRightStyle = styled.div`
  width: 100%;
  max-width: 1050px;
  position: relative;
  margin: 50px auto;
  display: grid;

  .gatsby-image-outer-wrapper {
    width: 65%!important;
    justify-self: left;
  }

  .postCardText {
    position: absolute;
    max-width: 80%;
    justify-self: right;
    align-self: center;
    text-align: right;
    color: red;

    h2 {
      margin: 0;
      transition: 0.1s ease-in-out;
    }

    h4 {
      margin: 0.4em 0;
      transition: 0.1s ease-in-out;
    }

    h4:first-of-type {
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
    }

    p {
      margin: 0;
      width: 40%;
      float: right;
      transition: 0.1s ease-in-out;
    }
  }

  @media screen and (max-width: 1000px) {
    .postCardText {
      h2 {
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
        width: 55%;
      }
    }
  }

  @media screen and (max-width: 750px) {
    margin: 30px auto;

    .postCardText {
      h2 {
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
        width: 65%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    margin: 20px auto;

    .postCardText {
      h2 {
        font-size: 1.5em;
      }

      h4 {
        font-size: 0.6em;
      }
      
      h4:first-of-type {
        font-size: 0.6em;
      }

      p {
        font-size: 0.6em;
        width: 65%;
      }
    }
  }

  @media screen and (max-width: 375px) {
    margin: 15px auto;
    
    .postCardText {
      h2 {
        font-size: 1.5em;
      }

      h4 {
        font-size: 0.6em;
      }
      
      h4:first-of-type {
        font-size: 0.6em;
      }

      p {
        font-size: 0.6em;
        width: 80%;
      }
    }
  }
`;

const PostCardRightImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;

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

const PostCardRight = ({ post }) => (
  <Link to={post.fields.slug}>
    <PostCardRightStyle>
    <PostCardRightImg sizes={post.frontmatter.frontImg.childImageSharp.sizes} />
      <div className="postCardText">
        {post.frontmatter.round === 1 ?
          <h4>1° Turno</h4> : <h4>2° Turno</h4>
        }
        <h2>{post.frontmatter.date}</h2>
        <h4>{post.frontmatter.subtitle}</h4>
        <p>{post.excerpt}</p>
      </div>
    </PostCardRightStyle>
  </Link>
)

export default PostCardRight;