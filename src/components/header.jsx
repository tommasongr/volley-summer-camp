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

  img {
    display: block;
    width: 45%;
    align-self: center;
    justify-self: center;
    padding-bottom: 50px;
    cursor: default;
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
  }

  div {
    max-width: 500px;
    justify-self: center;
    h1 {
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
      font-size: 1.5rem;
      margin: 0;

    }
    h3 {
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
      font-size: 1.1rem;
      margin: 0;
      margin-top: 10px;
    }
    p {
      margin-top: 50px;
      text-align: center;
      font-size: 1.5rem;
      color: #ff2727;
      font-weight: 500;
      font-family: 'Roboto Mono', monospace
    }
  }
`;

const Header = () => (
  <PageContainer>
    <img src={LogoBig} alt="Summer Camp 2018 Logo"/>
    <div>
      <h1>Volley Summer Camp 2018</h1>
      <h3>La magia sta per cominciare</h3>
      <p>Ciaooo</p>
    </div>
  </PageContainer>
)

export default Header
