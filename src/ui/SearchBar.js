import React, { Component } from 'react'
import {
  Text,
  TextInput,
  Animated,
  View
} from 'react-native'
import { css, withStyles } from '../styles/ImdbSearch'

class SearchBar extends Component {
  render() {
    return (
      <View {...css(this.props.styles.containerSearchBar)}>
        <TextInput />
      </View>
    )
  }
}

SearchBar.propTypes = {
  styles: React.PropTypes.object.isRequired,
}

export default withStyles(({ padding, color }) => ({
  containerSearchBar: {
    padding: padding.pa16,
    backgroundColor: color.white,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 10,
  },
  fontFamily: {
    marginBottom: 5,
  },
  widthCard: {
    flexDirection: 'row',
  },
  iosShadow: {
    shadowColor: color.silver,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      x: 0,
      y: 0,
    },
  },
  androidShadow: {
    elevation: 1,
  },
}))(SearchBar)
