import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'


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
          <h1>Hello,</h1>
          <p>
          There is nothing to see here yet! Please jump on {<Link to={prefixLink('/docs/')} >DOCS</Link>}
          </p>
        </div>
      </DocumentTitle>
    )
  },
})

export default appIndex
