import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './normalize.css'
import 'typeface-roboto'
import 'typeface-roboto-mono'
import './index.css'

import favicon from '../assets/summer_camp_2018_logo_favicon_192x192.png'

export default class Layout extends React.Component {
  render() {
    const { children, data } = this.props;
    return (
      <div style={{height: '100%', margin: '20px'}}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'author', content: 'Tommaso Negri'},
            { name: 'copyrigth', content: '© 2018 Tommaso Negri'}
          ]}
        >
        <link rel="icon" type="image/png" href={favicon} sizes="192x192"/>
        </Helmet>
        {children()}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
  }
`
