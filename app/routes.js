import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import MapPage from './containers/MapPage'
import StatsPage from './containers/StatsPage'

export default (
  <Route path="/" component={App}>
    <Route path="/map" component={MapPage} />
    <Route path="/stats" component={StatsPage} />
  </Route>
)
