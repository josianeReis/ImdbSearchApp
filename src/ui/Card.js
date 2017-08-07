import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import { withNavigation } from '@expo/ex-navigation'
import store from 'react-native-simple-store'
import { css, withStyles } from '../styles/ImdbSearch'
import Router from '../Router'

const ICON_N_FAVORITE = require('../assets/img/iconLike.png')
const ICON_FAVORITE = require('../assets/img/iconLikeFull.png')
const ICON_LAUCHDATE = require('../assets/img/iconLauchDate.png')

@withNavigation
class Card extends Component {

  constructor(props) {
    super(props)

    this.renderDetailCard = this.renderDetailCard.bind(this)
    this.renderListCard = this.renderListCard.bind(this)
  }


  renderDetailCard() {
    return (
      <View {...css(this.props.styles.containerDetailCard)}>
        <View {...css(this.props.styles.containerDetailCardImg)}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.bannerMovie}` }}
            {...css(this.props.styles.bannerDetailMovie)}
          />
        </View>
        <View {...css(this.props.styles.containerDescriptionMovie)}>
          <View {...css(this.props.styles.containerDetailMovie)}>
            <Text {...css(this.props.styles.titleContentCard)}>{this.props.title}</Text>
            <Text {...css(this.props.styles.categoryMovie)}>Popularity:
            {this.props.popularity}</Text>
          </View>
          <View {...css(this.props.styles.contentRatingMovie)}>
            <Text {...css(this.props.styles.ratingMovie)}>{this.props.voteAverage}</Text>
            <Text {...css(this.props.styles.ratingMaxMovie)}>/10</Text>
          </View>
          <View {...css(this.props.styles.containerTecInfo)}>
            <View {...css(this.props.styles.containerLauchDate)}>
              <Image
                source={ICON_LAUCHDATE}
                {...css(this.props.styles.iconLauchDate)}
              />
              <Text {...css(this.props.styles.lauchDate)}>{this.props.releaseDate}</Text>
            </View>
            <View {...css(this.props.styles.containerFavorite)}>
              <TouchableOpacity >
                <Image
                  source={ICON_N_FAVORITE}
                  onPress={() => store.push('favoriteMoviesList', { movieId: this.props.movieId })}
                  {...css(this.props.styles.iconFavorite)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderListCard() {
    const shadowProps = (Platform.OS === 'android') ? this.props.styles.androidShadow : this.props.styles.iosShadow
    return (
      <TouchableHighlight
        onPress={() => this.props.navigator.push(Router.getRoute('movieDetails', { movieId: this.props.movieId }))}
      >
        <View {...css(this.props.styles.container, shadowProps)}>
          <View {...css(this.props.styles.containerImg)}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.bannerMovie}` }}
              {...css(this.props.styles.bannerMovie)}
            />
          </View>
          <View {...css(this.props.styles.containerDescriptionMovie)}>
            <View>
              <Text {...css(this.props.styles.titleContentCard)}>{this.props.title}</Text>
              <Text {...css(this.props.styles.categoryMovie)}>Popularity:
              { this.props.popularity}</Text>
            </View>
            <View {...css(this.props.styles.contentRatingMovie)}>
              <Text {...css(this.props.styles.ratingMovie)}>{this.props.voteAverage}</Text>
              <Text {...css(this.props.styles.ratingMaxMovie)}>/10</Text>
            </View>
            <View>
              <Text {...css(this.props.styles.descriptionTextCard)}>
                {this.props.description}...</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    if (this.props.detailCard) {
      return (
        this.renderDetailCard()
      )
    }
    return (
      this.renderListCard()
    )
  }
}

Card.defaultProps = {
  detailCard: false,
  description: '',
  releaseDate: '',
  lauchDate: '',
}

Card.propTypes = {
  styles: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  voteAverage: React.PropTypes.number.isRequired,
  releaseDate: React.PropTypes.string,
  lauchDate: React.PropTypes.string,
  description: React.PropTypes.string,
  bannerMovie: React.PropTypes.string.isRequired,
  detailCard: React.PropTypes.bool,
  movieId: React.PropTypes.number.isRequired,
  popularity: React.PropTypes.string.isRequired,
}

export default withStyles(({ padding, color, fontSize }) => ({
  containerDescriptionMovie: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 140,
    marginLeft: 10,
    borderRadius: 2,
    width: 195,
    paddingLeft: 7,
  },
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
    width: 100,
  },
  container: {
    padding: padding.pa16,
    backgroundColor: color.white,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 170,
    marginBottom: 10,
  },
  containerDetailCard: {
    padding: padding.pa16,
    backgroundColor: color.transparent,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 190,
    marginBottom: 12,
  },
  containerDetailCardImg: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 180,
    width: 120,
  },
  bannerDetailMovie: {
    height: 180,
    width: 120,
    borderRadius: 5,
  },
  categoryMovie: {
    fontSize: fontSize.f9,
    marginBottom: 5,
    color: color.scorpion,
  },
  containerTecInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  containerLauchDate: {
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row',
  },
  lauchDate: {
    fontSize: fontSize.f9,
    color: color.scorpion,
    marginTop: 2,
    marginLeft: 0,
  },
  containerFavorite: {
    marginLeft: 35,
    flexDirection: 'row',
    height: 30,
    width: 38,
    padding: 4,
  },
  bannerMovie: {
    height: 150,
    width: 100,
    borderRadius: 5,
  },
  ratingMovie: {
    fontSize: fontSize.f7,
    color: color.white,
  },
  ratingMaxMovie: {
    fontSize: fontSize.f8,
    color: color.white,
    marginTop: 1,
    marginLeft: 1,
  },
  iconDuration: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
  iconLauchDate: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
  iconFavorite: {
    height: 25,
    width: 25,
  },
  contentRatingMovie: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#BB4460',
    borderRadius: 8,
    marginBottom: 1,
    marginTop: 2,
    flexDirection: 'row',
  },
  fontFamily: {
    marginBottom: 5,
  },
  descriptionTextCard: {
    fontSize: fontSize.f7,
    color: color.scorpion,
    lineHeight: 16,
  },
  titleContentCard: {
    flexDirection: 'row',
    fontSize: fontSize.f4,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  containerDetailMovie: {
    marginTop: 35,
  },
  subtitleContentCard: {
    fontSize: fontSize.f9,
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
}))(Card)
