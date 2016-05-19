import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

injectTapEventPlugin()

const styles = {
  myAppBar: {
    position: 'fixed',
    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.30)',
    background: '#2196F3',
  },
  myLink: {
    color: 'white',
  },
  myLogoSpace: {
    marginLeft: '100px',
  },
}

class AppAppbar extends React.Component {

  render () {
    return (
      <AppBar
        className="my-appbar"
        style={styles.myAppBar}
        iconElementLeft={
          <div>
            <FlatButton
              style={styles.myLink}
              label="myGNOME"
              containerElement={<Link to={prefixLink('/')} />}
            />
            <span style={styles.myLogoSpace} >
              <FlatButton
                style={styles.myLink}
                label="Docs"
                containerElement={<Link to={prefixLink('/docs/')} />}
              />
              <FlatButton
                style={styles.myLink}
                label="Explore"
                containerElement={<Link to={prefixLink('/explore/')} />}
              />
            </span>
          </div>
        }
        iconElementRight={
          <div>
            <FlatButton
              style={styles.myLink}
              label="GITHUB"
              containerElement={<a href="https://github.com/alex285/myGNOME" />}
            />
          </div>
        }
      />
    )
  }
}

export default AppAppbar
