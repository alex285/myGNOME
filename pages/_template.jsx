import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import includes from 'underscore.string/include'
import AppAppbar from '../components/AppAppbar'
import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'
import 'css/boxes.css'

// Customize theme a bit. Here for now
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { white, cyan500 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    textColor: white,
  },
  appBar: {
    height: 56,
    color: cyan500,
  },
})

const { rhythm, fontSizeToPx } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
