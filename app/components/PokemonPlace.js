import React, { PropTypes, Component } from 'react'

const K_WIDTH = 40
const K_HEIGHT = 40

function greatPlaceStyle (id) {
  return {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    backgroundSize: 'cover',
    backgroundImage: `url(/image/pokemon/${id}.png)`
  }
}

export default class PokemonPlace extends Component {
  render () {
    return (
      <div style={greatPlaceStyle(this.props.id)} />
    )
  }
}
PokemonPlace.propTypes = {
  id: PropTypes.string
}
PokemonPlace.defaultProps = {}
