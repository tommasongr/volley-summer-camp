import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Page404Style = styled.div`
  height: calc(100vh - 80px);
  border: solid 20px #F7F7F7;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 50px;
    display: grid;
    justify-items: center;

    h1 {
      margin: 0;
      font-size: 10em;
    }

    p {
      margin: 20px 0;
      margin-bottom: 30px;
    }

    .returnButton {
      font-weight: 500;
      color: red;
      font-family: 'Roboto Mono', monospace;
      display: inline-block;
      font-size: 1.2em;
      letter-spacing: 0.3px;
      margin: 0;
    }
  }
`;

const NotFoundPage = () => (
  <Page404Style>
    <div>
      <h1>404</h1>
      <p>Sei atterrato su un indirizzo che non esiste... la tristezza.</p>
      <Link to="/"><span className="returnButton">Torna alla Home /></span></Link>
    </div>
  </Page404Style>
)

export default NotFoundPage
