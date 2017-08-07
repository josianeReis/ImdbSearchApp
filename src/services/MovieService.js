import api from './Api'

const MovieService = {
  async getListMovies() {
    const urlRequest = `/3/list/1?api_key=56875aaaee5d35075d28698622faa3ab`
    const response = await api.get(urlRequest)
    console.log(response)
    return response.data
  },
}

export default MovieService
