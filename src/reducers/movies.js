import * as types from '../actions/types'

const movies = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_MOVIES_COMPLETE:
      return payload
    default:
      return state
  }
}

export default movies
