import * as ActionTypes from '../actions/config'

const config = (state = {}, action = {}) => {
  switch (action.type) {
    case ActionTypes.CHANGE_API_KEY:
      return Object.assign({}, state, {
        gmapApiKey: action.key
      })
    default:
      return state
  }
}

export default config
