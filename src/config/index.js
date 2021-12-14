import { apiBaseUrl } from '../environment'

export const BASE_URL = `${apiBaseUrl}/api`
export const IMAGE_BASE_URL = `${apiBaseUrl}/api/uploads`

export const TOKEN_KEY = 'access_token'
export const REFRESH_TOKEN_KEY = 'refresh_token'
export const USER_KEY = '_u_k'

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
      url: 'auth/seller/register',
      method: 'POST'
    },
  },
  admin: {
    get: {
      url: 'admins',
      method: 'GET'
    },
    post: {
      url: 'auth/admin/Register',
      method: 'POST'
    },
  },
  buyers: {
    get: {
      url: 'buyers',
      method: 'GET'
    },
    post: {
      url: 'auth/register',
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

export const routes = [
  {
    id: 0,
    name: 'Add admin',
    path: '/store/add-admin',
    roles: ['admin']
  }, {
    id: 1,
    name: 'Products',
    path: '/store/products',
    roles: ['buyer', 'admin', 'seller']
  },
  {
    id: 2,
    name: 'sellers',
    path: '/store/sellers',
    roles: ['buyer', 'admin']
  },
]


export const routeAccess = {
  admin: [
    'add-admin',
    'login',
    'products',
    'sellers'
  ],
  buyer: [
    'dashboard',
    'login',
    'products',
    'sellers'
  ],
  seller: [
    'dashboard',
    'login',
    'products'
  ],
}