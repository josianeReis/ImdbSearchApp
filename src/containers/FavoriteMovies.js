import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { css, withStyles } from '../styles/ImdbSearch'
import { connect } from 'react-redux'
import _findIndex from 'lodash.findindex'
import store from 'react-native-simple-store'
import DefaultTheme from '../styles/DefaultTheme'
import Card from '../ui/Card'
import BottomTabNavigation from '../ui/BottomTabNavigation'
import ImdbSearchIcons from '../assets/icons/ImdbSearchIcons'

const favoriteMovie = [{
  id: 1,
  title: 'Wonder Woman',
  score: 8.0,
  duration: '1:40:10',
  lauchDate: '17 June 2017',
  favorite: false,
  originalLanguage: 'En',
  description: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim. Diuretics paradis num copo é motivis de denguis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mim que vai caçá sua turmis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.',
  popularity: '101',
  image: '/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg',
  directorName: 'Fulano de tal',
  wristersNames: 'ciclano de tal',
  stars: 'Stars' },
{
  id: 2,
  title: 'Wonder Woman',
  score: 8.0,
  duration: '1:40:10',
  lauchDate: '17 June 2017',
  favorite: false,
  originalLanguage: 'En',
  description: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim. Diuretics paradis num copo é motivis de denguis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mim que vai caçá sua turmis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.',
  popularity: '101',
  image: '/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg',
  directorName: 'Fulano de tal',
  wristersNames: 'ciclano de tal',
  stars: 'Stars' },
{
  id: 3,
  title: 'Wonder Woman',
  score: 8.0,
  duration: '1:40:10',
  lauchDate: '17 June 2017',
  favorite: false,
  originalLanguage: 'En',
  description: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim. Diuretics paradis num copo é motivis de denguis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mim que vai caçá sua turmis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.',
  popularity: '101',
  image: '/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg',
  directorName: 'Fulano de tal',
  wristersNames: 'ciclano de tal',
  stars: 'Stars' },
{
  id: 4,
  title: 'Wonder Woman',
  score: 8.0,
  duration: '1:40:10',
  lauchDate: '17 June 2017',
  favorite: false,
  originalLanguage: 'En',
  description: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim. Diuretics paradis num copo é motivis de denguis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mim que vai caçá sua turmis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.',
  popularity: '101',
  image: '/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg',
  directorName: 'Fulano de tal',
  wristersNames: 'ciclano de tal',
  stars: 'Stars' }]

class _FavoriteMovies extends Component {

  static route = {
    navigationBar: {
      visible: true,
      backgroundColor: DefaultTheme.color.transparent,
    },
  }

  constructor(props) {
    super(props)
    this.renderFavoriteMovies = this.renderFavoriteMovies.bind(this)
  }

  getFavoriteMoviesList() {
    console.log(store.get('favoriteMoviesList'))
  }

  renderFavoriteMovies() {
    return (
      favoriteMovie.map(movie => (
        <Card
          title={movie.title}
          voteAverage={movie.score}
          popularity={movie.popularity}
          originalLanguage={movie.original_language}
          releaseDate={movie.lauchDate}
          description={movie.description.substring(0, 60)}
          key={movie.id}
          movieId={movie.id}
          bannerMovie={movie.image}
          detailCard={false}
        />
      ))
    )
  }

  render() {
    return (
      <View {...css(this.props.styles.container)}>
        <ScrollView
          keyboardDismissMode={'on-drag'}
          keyboardShouldPersistTaps="never"
          vertical
          showsVerticalScrollIndicator={false}
          style={{ padding: 20, marginTop: 0 }}
        >
          {this.renderFavoriteMovies()}
          {this.getFavoriteMoviesList()}
        </ScrollView>
      </View>
    )
  }
}

_FavoriteMovies.defaultProps = {
  currentMovie: {},
}

_FavoriteMovies.propTypes = {
  styles: React.PropTypes.object.isRequired,
  currentMovie: React.PropTypes.object,
  navigator: React.PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  const findCurrentMovie = _findIndex(
    state.movies, { id: ownProps.movieId },
  )
  return {
    currentMovie: state.movies[findCurrentMovie],
  }
}

const FavoriteMovies = connect(mapStateToProps, null)(_FavoriteMovies)
export default withStyles(({ color }) => ({
  container: {
    flex: 1,
    backgroundColor: '#DFDADB',
  },
  iconBack: {
    top: 15,
    left: 10,
    backgroundColor: '#000000',
  },
}))(FavoriteMovies)
