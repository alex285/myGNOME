import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import RecomendedGuides from 'components/RecomendedGuides'


const appIndex = React.createClass({
  statics: {
    metadata () {
      return {
        title: 'MyGNOME',
      }
    },
  },

  render () {
    return (
      <DocumentTitle title={`${appIndex.metadata().title} | ${config.siteTitle}`}>
        <div>
          <div
            style={{
              background: 'linear-gradient(#0097A7,#00BCD4)',
              position: 'absolute',
              width: '100%',
              height: '480px',
              left: '0px',
              zIndex: '-1000',
              top: '56px',
            }}
          />
          <div className="hero-center">
            <div>
              <img
                role="presentation"
                src="logo.png"
              />
            </div>
            <div>
              <span className="slogan">
                One Customization Place <br />
                For GNOME
              </span>
            </div>
            <div className="hero-btns">
              <RaisedButton
                secondary={true}
                label="DOCS"
                containerElement={<Link to={prefixLink('/docs/')} />}
              />
              <iframe
                className="github-btn"
                src="https://ghbtns.com/github-btn.html?user=alex285&repo=myGNOME&type=star&count=true"
                frameBorder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
          </div>
          <RecomendedGuides />
        </div>
      </DocumentTitle>
    )
  },
})

export default appIndex
