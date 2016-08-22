import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Map from '../components/Map'

class MapPage extends Component {
  render () {
    return (
      <div>
        <Map apiKey={this.props.gmapApiKey} />
      </div>
    )
  }
}

MapPage.propTypes = {
  gmapApiKey: PropTypes.string
}

function mapStateToProps (state) {
  return {
    gmapApiKey: state.config.gmapApiKey
  }
}

export default connect(mapStateToProps)(MapPage)
