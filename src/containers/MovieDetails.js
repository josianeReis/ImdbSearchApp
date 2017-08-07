import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import _findIndex from 'lodash.findindex'
import ViewMoreText from 'react-native-view-more-text'
import ImdbSearchIcons from '../assets/icons/ImdbSearchIcons'

import { css, withStyles } from '../styles/ImdbSearch'
import Card from '../ui/Card'

class _MovieDetails extends Component {

  constructor(props) {
    super(props)
    this.renderMovieDetails = this.renderMovieDetails.bind(this)
  }

  renderMovieDetails() {
    return (
      <Card
        title={this.props.currentMovie.title}
        voteAverage={this.props.currentMovie.vote_average}
        popularity={this.props.currentMovie.popularity.toFixed(2)}
        originalLanguage={this.props.currentMovie.original_language}
        releaseDate={this.props.currentMovie.release_date}
        description={this.props.currentMovie.overview.substring(0, 60)}
        key={this.props.currentMovie.id}
        movieId={this.props.currentMovie.id}
        bannerMovie={this.props.currentMovie.poster_path}
        bannerBackground={this.props.currentMovie.backdrop_path}
        detailCard
      />
    )
  }

  renderViewMore(onPress) {
    return (
      <Text
        onPress={onPress}
        style={{ color: '#D50076' }}
      >Read more</Text>
    )
  }

  renderViewLess(onPress) {
    return (
      <Text
        onPress={onPress}
        style={{ color: '#D50076' }}
      >View less</Text>
    )
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigator.pop()}
          {...css(this.props.styles.iconBack)}
        >
          <ImdbSearchIcons
            name="icon-back"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
        <ScrollView
          keyboardDismissMode={'on-drag'}
          keyboardShouldPersistTaps="never"
          vertical
          showsVerticalScrollIndicator={false}
        >
          <View {...css(this.props.styles.contentBannerMovie)}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.currentMovie.backdrop_path}` }}
              style={{
                height: 200,
                width: 400,
              }}
            />
          </View>
          <View>
            {this.renderMovieDetails()}
          </View>
          <View {...css(this.props.styles.containerSinopseMovie)}>
            <ViewMoreText
              numberOfLines={7}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
            >
              <Text {...css(this.props.styles.contentSinopseMovie)}>
                {this.props.currentMovie.overview}</Text>
            </ViewMoreText>
          </View>
          <View {...css(this.props.styles.containerCredits)}>
            <View {...css(this.props.styles.contentCreditsTitle)}>
              <Text{...css(this.props.styles.creditsTitle)}>Director: </Text>
              <Text{...css(this.props.styles.creditsTitle)}>Writers: </Text>
              <Text{...css(this.props.styles.creditsTitle)}>Stars: </Text>
            </View>
            <View {...css(this.props.styles.contentCreditsInfo)}>
              <Text {...css(this.props.styles.creditsInfo)}>
                {this.props.currentMovie.directorName} </Text>
              <Text {...css(this.props.styles.creditsInfo)}>
                {this.props.currentMovie.wristersNames} </Text>
              <Text {...css(this.props.styles.creditsInfo)}>
                {this.props.currentMovie.stars} </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

_MovieDetails.defaultProps = {
  currentMovie: {},
}

_MovieDetails.propTypes = {
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

const MovieDetails = connect(mapStateToProps, null)(_MovieDetails)
export default withStyles(({ color, fontSize }) => ({
  contentBannerMovie: {
    flexDirection: 'row',
    height: 140,
    position: 'relative',
    top: 0,
    left: 0,
  },
  containerSinopseMovie: {
    padding: 20,
  },
  contentSinopseMovie: {
    fontSize: fontSize.f6,
    color: color.scorpion,
  },
  containerCredits: {
    flexDirection: 'row',
    padding: 10,
  },
  contentCreditsTitle: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  creditsTitle: {
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: fontSize.f8,
    color: color.scorpion,
  },
  contentCreditsInfo: {
    marginLeft: 10,
  },
  creditsInfo: {
    marginBottom: 3,
    fontSize: fontSize.f8,
    color: color.scorpion,
  },
  viewMoreAndLess: {
    fontSize: fontSize.f5,
    color: color.hippieBlue,
  },
  iconBack: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 10,
    backgroundColor: color.transparent,
  },
}))(MovieDetails)
