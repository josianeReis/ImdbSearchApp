import { createNavigationEnabledStore } from '@expo/ex-navigation'
import { createStore, applyMiddleware } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/'

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})


const store = createStoreWithNavigation(
  rootReducer,
  applyMiddleware(
    reduxPackMiddleware,
    thunk),
)

export default store
