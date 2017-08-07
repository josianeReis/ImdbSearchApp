import React, {
  Component,
} from 'react'
import {
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import {
  css,
  withStyles,
} from '../styles/ImdbSearch'
import ListCard from './ListCard'
import FavoriteMovies from './FavoriteMovies'
import ImdbSearchIcons from '../assets/icons/ImdbSearchIcons'
import DefaultTheme from '../styles/DefaultTheme'
import BottomTabNavigation from '../ui/BottomTabNavigation'
const BACKGROUND_IMG = require('../assets/img/imgBackground.png')

class InitialRoute extends Component {

  static route = {
    navigationBar: {
      visible: true,
      title: 'Filmes',
      backgroundColor: DefaultTheme.color.transparent,
      renderRight: () => (
        <TouchableOpacity
          style={{ padding: 10, marginRight: 10 }}
        >
          <ImdbSearchIcons
            name="icon-search"
            size={20}
            color="#000000"
          />
        </TouchableOpacity>
      ),
    },
  }

  constructor(props) {
    super(props)

    this.state = {
      title: 'ImdbSearch',
    }
  }
  render() {
    return (
      <View {...css(this.props.styles.container)}>
        <Image
          source={BACKGROUND_IMG}
          {...css(this.props.styles.imgBackground)}
        />
        <ListCard />
        <BottomTabNavigation />
      </View>
    )
  }
}

InitialRoute.propTypes = {
  styles: React.PropTypes.object.isRequired,
}

export default withStyles(({ color, fontSize }) => ({
  container: {
    flex: 1,
    backgroundColor: '#DFDADB',
  },
  title: {
    color: color.scorpion,
    fontSize: fontSize.f2,
    marginBottom: 30,
    marginTop: 50,
  },
  text: {
    color: color.black,
    fontSize: fontSize.f6,
    marginBottom: 10,
  },
  imgBackground: {
    height: 250,
    width: 400,
    position: 'absolute',
    top: 0,
    left: 0,
  },
}))(InitialRoute)
