import React from 'react'
import {
  NavigationContext,
  StackNavigation,
  NavigationProvider,
} from '@expo/ex-navigation'
import { Provider } from 'react-redux'
import store from './state/store'
import Router from './Router'
import { withStyles } from './styles/ImdbSearch'

const navigationContext = new NavigationContext({
  router: Router,
  store,
})

const Root = () => (
  <Provider store={store}>
    <NavigationProvider context={navigationContext}>
      <StackNavigation
        initialRoute={Router.getRoute('initialRoute')}
      />
    </NavigationProvider>
  </Provider>
)

export default withStyles(() => ({}))(Root)
