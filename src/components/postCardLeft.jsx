import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostCardLeftStyle = styled.div`
  width: 100%;
  max-width: 1050px;
  position: relative;
  margin: 50px auto;
  display: grid;

  .postCardImg {
    width: 65%;
    background-image: url("https://source.unsplash.com/collection/190727");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    justify-self: right;
  }

  .postCardImg::before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
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

const PostCardLeft = ({ post }) => (
  <Link to={post.fields.slug}>
    <PostCardLeftStyle>
      <div className="postCardImg"></div>
      <div className="postCardText">
        <h2>{post.frontmatter.date}</h2>
        <h4>{post.frontmatter.subtitle}</h4>
        <p>{post.excerpt}</p>
      </div>
    </PostCardLeftStyle>
  </Link>
)

export default PostCardLeft
