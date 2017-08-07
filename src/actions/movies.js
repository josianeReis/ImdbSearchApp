import { createAction } from 'redux-actions'
import * as types from './types'
import MovieService from '../services/MovieService'

export const fetchMovies = () => (
  (dispatch) => {
    MovieService
      .getListMovies()
      .then((data) => {
        if (data != null) {
          console.log(data)
          return dispatch(createAction(types.FETCH_MOVIES_COMPLETE)(data.items))
        }
        return dispatch(createAction(types.FETCH_MOVIES_ERROR)(data))
      })
  }
)
