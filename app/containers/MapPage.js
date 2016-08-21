import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Map from '../components/Map'

class App extends Component {

  render () {
    return (
      <div>
        <Map apiKey="key" />
      </div>
    )
  }
}

App.propTypes = {
  gmapApiKey: PropTypes.string
}

function mapStateToProps (state) {
  return {
    gmapApiKey: state.gmapApiKey
  }
}

export default connect(mapStateToProps)(App)
