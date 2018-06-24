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
    width: 50%;
    justify-self: right;
    align-self: center;
    text-align: right;
    color: red;

    h2 {
      margin: 0
    }

    h4 {
      margin: 0.4em 0;
    }

    p {
      margin: 0;
      width: 65%;
      float: right;
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
        <h2>{post.frontmatter.date}</h2>
        <h4>{post.frontmatter.subtitle}</h4>
        <p>{post.excerpt}</p>
      </div>
    </PostCardRightStyle>
  </Link>
)

export default PostCardRight;