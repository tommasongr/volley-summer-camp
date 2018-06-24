import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PostCardLeftStyle = styled.div`
  width: 100%;
  max-width: 1050px;
  position: relative;
  margin: 50px auto;
  display: grid;

  .gatsby-image-outer-wrapper {
    width: 65%!important;
    justify-self: right;
  }

  .postCardText {
    position: absolute;
    width: 50%;
    justify-self: left;
    align-self: center;
    text-align: left;
    color: blue;

    h2 {
      margin: 0;
    }

    h4 {
      margin: 0.4em 0;
    }

    p {
      margin: 0;
      width: 65%;
      float: left;
    }
  }
`;

const PostCardLeftImg = styled(Img)`
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

const PostCardLeft = ({ post }) => (
  <Link to={post.fields.slug}>
    <PostCardLeftStyle>
      <PostCardLeftImg sizes={post.frontmatter.frontImg.childImageSharp.sizes} />

      <div className="postCardText">
        <h2>{post.frontmatter.date}</h2>
        <h4>{post.frontmatter.subtitle}</h4>
        <p>{post.excerpt}</p>
      </div>
    </PostCardLeftStyle>
  </Link>
)

export default PostCardLeft
