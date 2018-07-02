import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './normalize.css'
import 'typeface-roboto'
import 'typeface-roboto-mono'
import './index.css'

import favicon from '../assets/summer_camp_2018_logo_favicon_192x192.png'

import logoSVG from '../assets/summer_camp_2018_logo_big.svg'

import logoApple1 from '../assets/S-C-apple-icon-iphone-3x.png'
import logoApple2 from '../assets/S-C-apple-icon-iphone-2x.png'
import logoApple3 from '../assets/S-C-apple-icon-ipad-pro.png'
import logoApple4 from '../assets/S-C-apple-icon-ipad.png'

export default class Layout extends React.Component {
  render() {
    const { children, data } = this.props;
    return (
      <div style={{height: '100%'}}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'La magia è cominciata!' },
            { name: 'keywords', content: 'volley, summer, camp, 2018, photo, blog, volleyball, sea, sport, sand, ball' },
            { name: 'author', content: 'Tommaso Negri'},
            { name: 'copyrigth', content: '© 2018 Tommaso Negri'},
            { property: 'og:title', content: 'Volley Summer Camp 2018' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'Volley Summer Camp 2018' },
            { property: 'og:description', content: 'La magia è cominciata!' },
            { property: 'og:image', content: '' },
          ]}
        >
        <link rel="icon" type="image/png" href={favicon} sizes="192x192"/>

        <link rel="mask-icon" href={logoSVG} color="#fffff"/>

        <link rel="apple-touch-icon" sizes="180x180" href={logoApple1} />
        <link rel="apple-touch-icon" sizes="120x120" href={logoApple2} />
        <link rel="apple-touch-icon" sizes="167x167" href={logoApple3} />
        <link rel="apple-touch-icon" sizes="152x152" href={logoApple4} />
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
