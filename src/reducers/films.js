import * as types from '../actions/types'

const films = (state = {}, { type, payload }) => {
  switch (type) {
    case types.FILMS_LOAD_COMPLETE:
      return payload
    default:
      return state
  }
}

export default films
