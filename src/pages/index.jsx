import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LogoBig from '../assets/summer_camp_2018_logo_big.svg'

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 200px;

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

const IndexPage = () => (
  <PageContainer>
    <img src={LogoBig} alt="Summer Camp 2018 Logo"/>
    <div>
      <h1>Volley Summer Camp 2018</h1>
      <h3>La magia sta per cominciare</h3>
      <p id="counter"></p>
    </div>
  </PageContainer>
)

// Set the date we're counting down to
var countDownDate = new Date("July 2, 2018 10:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Pronti a Partire!";
  }
}, 1000);

export default IndexPage
