import { createRouter } from '@expo/ex-navigation'
import InitialRoute from './containers/InitialRoute'
import MovieDetails from './containers/MovieDetails'
import FavoriteMovies from './containers/FavoriteMovies'
import ListCard from './containers/ListCard'

const Router = createRouter(() => ({
  initialRoute: () => InitialRoute,
  movieDetails: () => MovieDetails,
  favoriteMovies: () => FavoriteMovies,
}))

export default Router
