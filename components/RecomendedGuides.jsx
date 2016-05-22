import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';

const styles = {
  recomendedGuides: {
    marginTop: '220px',
  },
  boxes: {
    height: 170,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    background: '#3A474C',
    padding: '20px',
  },
  divider: {
    marginTop: '20px',
    marginBottom: '10px',
  },
}

class RecomendedGuides extends React.Component {

  render () {
    return (
      <div style={styles.recomendedGuides}>
        <h1>Recomended Guides</h1>
        <div>
          <Paper style={styles.boxes} zDepth={4}>
            <i className="fa fa-terminal fa-4x" aria-hidden="true"></i>
            <Divider style={styles.divider} />
            <div>
              <FlatButton
                label="Terminal"
                containerElement={<Link to={prefixLink('/docs/terminal/')} />}
              />
            </div>
          </Paper>
          <Paper style={styles.boxes} zDepth={4}>
            <i className="fa fa-linux fa-4x" aria-hidden="true"></i>
            <Divider style={styles.divider} />
            <div>
              <FlatButton
                label="Linux Systems"
                containerElement={<Link to={prefixLink('/docs/linux/')} />}
              />
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}

export default RecomendedGuides
