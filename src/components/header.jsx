import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LogoBig from '../assets/summer_camp_2018_logo_big.svg'

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 200px;
  border: solid 20px #F7F7F7;
  height: calc(100vh - 80px);
  color: rgba(0, 0, 0, 0.87);
  transition: 0.1s ease-in-out;

  img {
    display: block;
    width: 45%;
    align-self: center;
    justify-self: center;
    padding-bottom: 50px;
    cursor: default;
    transition: 0.1s ease-in-out;
  }

  div {
    max-width: 500px;
    justify-self: center;
    h1 {
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
      text-align: center;
      font-size: 1.5rem;
      margin: 0;
      transition: 0.1s ease-in-out;
    }
    h3 {
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
      text-align: center;
      font-size: 1.1rem;
      margin: 0;
      margin-top: 10px;
      transition: 0.1s ease-in-out;
    }
    p {
      margin-top: 50px;
      text-align: center;
      font-size: 1.5rem;
      color: #ff2727;
      font-weight: 500;
      font-family: 'Roboto Mono', monospace;
      transition: 0.1s ease-in-out;
    }
  }

  @media screen and (max-width: 1240px) {
    img {
      width: 55%
    }
  } 

  @media screen and (max-width: 1000px) {
    img {
      width: 65%
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 90%
    }

    div {
      h1 {
        font-size: 1.3rem;
      }
      h3 {
        font-size: 1rem
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 570px) {
    border: solid 15px #F7F7F7;
    height: calc(100vh - 50px);
    img {
      width: 80%
    }

    div {
      h1 {
        font-size: 1.2rem;
      }
      h3 {
        font-size: 0.9rem
      }
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    border: solid 10px #F7F7F7;
    height: calc(100vh - 40px);
    img {
      width: 80%
    }

    div {
      margin: 0 10px;
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <PageContainer>
        <img src={LogoBig} alt="Summer Camp 2018 Logo"/>
        <div>
          <h1>Volley Summer Camp 2018</h1>
          <h3>La magia sta per cominciare</h3>
          <p>Blog Template di Prova</p>
        </div>
      </PageContainer>
    )
  }
}
