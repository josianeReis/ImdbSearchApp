import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

import Card from '../ui/Card'
import SearchBar from '../ui/SearchBar'
import MovieService from '../services/MovieService'
import { fetchMovies } from '../actions/movies'

class _ListCard extends Component {
  constructor(props) {
    super(props)
    this.renderCards = this.renderCards.bind(this)
  }

  componentWillMount() {
    this.props.fetchMovies()
  }

  renderCards() {
    if (!this.props.movies) {
      return null
    }
    return (
      this.props.movies.map(movie => (
        <Card
          title={movie.title}
          voteAverage={movie.vote_average}
          popularity={movie.popularity.toFixed(2)}
          originalLanguage={movie.original_language}
          releaseDate={movie.release_date}
          description={movie.overview.substring(0, 60)}
          key={movie.id}
          movieId={movie.id}
          bannerMovie={movie.poster_path}
          bannerBackground={movie.poster_path}
          detailCard={false}
        />
      ))
    )
  }

  render() {
    return (
      <ScrollView
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps="never"
        vertical
        showsVerticalScrollIndicator={false}
        style={{ padding: 20, marginTop: 0 }}
      >
        {this.renderCards()}
      </ScrollView>
    )
  }
}

_ListCard.defaultProps = {
  movies: [],
}

_ListCard.propTypes = {
  fetchMovies: React.PropTypes.func.isRequired,
  movies: React.PropTypes.array,
}

const mapActionToProps = dispatch => ({
  fetchMovies() {
    dispatch(fetchMovies())
  },
})

const mapStateToProps = state => ({
  movies: state.movies,
})

const ListCard = connect(mapStateToProps, mapActionToProps)(_ListCard)
export default ListCard
