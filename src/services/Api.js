import { create } from 'apisauce'

const api = create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Accept: 'application/json',
  },
})

export default api
