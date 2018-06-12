import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../assets/summer_camp_2018_logo.svg'

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  background-color: rebeccapurple;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '1rem 0'
      }}
    >
      <Link to='/'
        style={{
          gridColumn: '2/3',
          width: '60%',
          alignSelf: 'center',
          justifySelf: 'center'
        }}
      >
        <img src={logo} alt="logo" style={{display: 'block'}}/>
      </Link>
    </div>
  </HeaderWrapper>
)

export default Header
