import axios from 'axios'
import { tokenService } from './storageService'
import { BASE_URL } from '../config'

const loggerInterceptor = config => {
  /** Add logging here */
  return config;
}

const apiService = {
  interceptor: null, // Mark: - 401 interceptor

  init(baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setHeader() {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenService.getToken()}`
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  customRequest(data) {
    return axios(data)
  },

  getBaseUrl() {
    return BASE_URL
  },

  addInterceptor() {
    axios.interceptors.request.use(loggerInterceptor)
  },

  mount401Interceptor() {
    this.interceptor = axios.interceptors.response.use(
      response => response,
      async error => {
        if (error.status === 401 || error.message.indexOf(401) !== -1) {
          console.log('401: ', error.message.indexOf(401))
          //TODO: - Redux dispatch here.
        //   this.$store.dispatch('auth/logout')
        }
        // If error was not 401 just reject as is
        throw error
      },
    )
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this.interceptor)
  },
}

export default apiService
