import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header'
import PostCardRight from '../components/postCardRight'
import PostCardLeft from '../components/postCardLeft'

const IndexPage = () => (
  <div>
    <Header/>
    <PostCardRight/>
    <PostCardLeft/>
    <PostCardRight/>
    <PostCardLeft/>
  </div>
)

export default IndexPage
