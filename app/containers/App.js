import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

function mapStateToProps (state, ownProps) {
  return {
  }
}

export default connect(mapStateToProps)(App)
