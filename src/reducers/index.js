import { NavigationReducer } from '@expo/ex-navigation'
import { combineReducers } from 'redux'
import movies from './movies'

export default combineReducers({
  navigation: NavigationReducer,
  movies,
})
