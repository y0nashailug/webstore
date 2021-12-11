import { apiBaseUrl } from '../environment'

export const BASE_URL = `${apiBaseUrl}/api`

export const TOKEN_KEY = 'access_token';
export const USER_KEY = '_u_k';

export const routeAccess = {}

export const APIS = {
  login: {
    url: 'auth/login',
    method: 'POST'
  },
  products: {
    get: {
      url: 'products',
      method: 'GET'
    },
    post: {
      url: 'products',
      method: 'POST'
    },
  },
  sellers: {
    get: {
      url: 'sellers',
      method: 'GET'
    },
    post: {
      url: 'sellers',
      method: 'POST'
    },
  },
  buyers: {
    get: {
      url: 'buyers',
      method: 'GET'
    },
    post: {
      url: 'buyers',
      method: 'POST'
    },
  },
  orders: {
    get: {
      url: 'orders',
      method: 'GET'
    }
  },
}