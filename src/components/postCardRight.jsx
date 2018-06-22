import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostCardRightStyle = styled.div`
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

export default class PostCardRight extends Component {
  render() {
    return (
      <Link to="/post">
        <PostCardRightStyle>
          <div className="postCardImg"></div>
          <div className="postCardText">
            <h2>23/07/2018</h2>
            <h4>1^ Uscita</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus esse ab debitis placeat adipisci eveniet magni, consequuntur fugiat? Dolorem, quaerat labore. Consectetur quo voluptates maiores temporibus officia, at pariatur.</p>
          </div>
        </PostCardRightStyle>
      </Link>
    )
  }
}
