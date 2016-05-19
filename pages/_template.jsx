import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import AppAppbar from '../scripts/AppAppbar'


import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'
import 'css/boxes.css'

const { rhythm, fontSizeToPx } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const linksActive = includes(this.props.location.pathname, '/links/')

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppAppbar />
          <Container
            style={{
              maxWidth: 1200,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
              paddingTop: 0,
            }}
          >
            <div
              style={{
                paddingTop: 100, /* For the fixed bar */
              }}
            >
            </div>
            {this.props.children}
          </Container>
        </div>
      </MuiThemeProvider>
    )
  },
})
