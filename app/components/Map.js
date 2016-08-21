import React, {PropTypes, Component} from 'react'

import GoogleMap from 'google-map-react'
import PokemonPlace from './PokemonPlace'

export default class Map extends Component {

  render () {
    return (
      <div style={{height: '500px'}}>
        <GoogleMap
          bootstrapURLKeys={{
            key: this.props.apiKey,
            language: 'ru'
          }}
          center={this.props.center}
          zoom={this.props.zoom}>
          <PokemonPlace lat={59.955413} lng={30.337844} text={'A'} />
          <PokemonPlace {...this.props.greatPlaceCoords} text={'B'} />
        </GoogleMap>
      </div>
    )
  }
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  apiKey: PropTypes.string,
  greatPlaceCoords: PropTypes.any
}

Map.defaultProps = {
  center: [59.938043, 30.337157],
  zoom: 9,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
}
