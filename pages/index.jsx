import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'


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
              background: '#00838F',
              position: 'absolute',
              width: '100%',
              height: '500px',
              left: '0px',
              zIndex: '-1000',
              top: '56px',
            }}
          />
          <div className="hero-center">
            <div>
              <FlatButton
                label="DOCS"
                containerElement={<Link to={prefixLink('/docs/')} />}
              />
              <iframe
                className="github-btn"
                src="https://ghbtns.com/github-btn.html?user=alex285&repo=myGNOME&type=star&count=true&"
                frameBorder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  },
})

export default appIndex
