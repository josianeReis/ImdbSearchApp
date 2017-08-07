import store from 'react-native-simple-store'
import * as types from '../actions/types'

function saveFavoriteMovie(movie) {
  store.save('faviteList', movie)
  .catch(err => logError(err))
}

function deleteFavoriteMovie() {
  store.delete('user')
  .catch(err => logError(err))
}
