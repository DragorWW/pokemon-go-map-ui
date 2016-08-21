import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Map from '../components/Map'

class MapPage extends Component {
  render () {
    return (
      <div>
        <Map apiKey="key" />
      </div>
    )
  }
}

MapPage.propTypes = {
  gmapApiKey: PropTypes.string
}

function mapStateToProps (state) {
  return {
    gmapApiKey: state.gmapApiKey
  }
}

export default connect(mapStateToProps)(MapPage)
