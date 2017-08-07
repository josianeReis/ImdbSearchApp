import { createAction } from 'redux-actions'
import * as types from './types'

export const fetchMovies = () => (
  (dispatch) => {
    MovieService
      .getListMovies()
      .then((data) => {
        if (data != null) {
          return dispatch(createAction(types.FETCH_MOVIES_COMPLETE)(data.items))
        }
        return dispatch(createAction(types.FETCH_MOVIES_ERROR)(data))
      })
  }
)
