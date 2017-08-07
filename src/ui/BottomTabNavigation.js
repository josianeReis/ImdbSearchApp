import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native'
import { withNavigation } from '@expo/ex-navigation'
import Tabs from 'react-native-tabs'
import { css, withStyles } from '../styles/ImdbSearch'
import ImdbSearchIcons from '../assets/icons/ImdbSearchIcons'
import Router from '../Router'

@withNavigation
class BottomTabNavigation extends Component {
  render() {
    return (
      <View style={this.props.styles.containerTab} >
        <Tabs>
          <TouchableHighlight>
            <ImdbSearchIcons
              name="icon-movies"
              size={22}
              color="#000000"
              onPress={() => this.props.navigator.push(Router.getRoute('initialRoute'))}
            />
          </TouchableHighlight>

          <TouchableHighlight>
            <ImdbSearchIcons
              name="icon-favorite"
              size={22}
              color="#000000"
              onPress={() => this.props.navigator.push(Router.getRoute('favoriteMovies'))}
            />
          </TouchableHighlight>
        </Tabs>
      </View>
    )
  }
}

BottomTabNavigation.propTypes = {
  styles: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object,
}

export default withStyles(({ color }) => ({
  containerTab: {
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 12,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 1,
  },
  textStyle: {
    fontSize: 20,
  },
}))(BottomTabNavigation)
