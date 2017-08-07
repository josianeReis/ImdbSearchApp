import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { css, withStyles } from '../styles/ImdbSearch'

class Header extends Component {
  render() {
    return (
      <View {...css(this.props.styles.containerHeader)}>
        <Text {...css(this.props.styles.textStyle)}> Filmes </Text>
      </View>
    )
  }
}

Header.propTypes = {
  styles: React.PropTypes.object.isRequired,
}

export default withStyles(({ color, fontSize, padding }) => ({
  containerHeader: {
    backgroundColor: color.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
}))(Header)
