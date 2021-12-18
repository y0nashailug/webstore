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
    getById: (id) => ({
      url: `products/${id}`,
      method: 'GET'
    })
  },
  sellers: {
    get: {
      url: 'user/regulate/sellers',
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
      url: 'api/user/regulate/admin/register',
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
    followingGet: {
      url: 'following',
      method: 'GET'
    },
    addFollow: {
      url: 'following',
      method: 'POST'
    },
    unFollow: {
      url: 'following/unfollow',
      method: 'POST'
    }
  },
  orders: {
    get: {
      url: 'orders',
      method: 'GET'
    },
    post: {
      url: 'orders',
      method: 'POST'
    },
    cancelOrder: (id) => ({
      url: `orders/${id}/cancel`,
      method: 'POST'
    }),
    changeOrderStatus: (id) => ({
      url: `orders/${id}/status`,
      method: 'POST'
    }),
  },
  reviews: {
    get: {
      url: 'reviews',
      method: 'GET'
    },
    post: {
      url: 'reviews',
      method: 'POST'
    },
    put: (id) => ({
      url: `reviews/${id}`,
      method: 'PUT'
    }),
    addReview: (id) => ({
      url: `products/${id}/reviews`,
      method: 'POST'
    })
  },
}

export const routes = [
  {
    id: 0,
    name: 'Add admin',
    path: '/store/add-admin',
    roles: ['role_admin']
  }, {
    id: 1,
    name: 'Products',
    path: '/store/products',
    roles: ['role_buyer', 'role_admin', 'role_seller']
  }, {
    id: 2,
    name: 'Sellers',
    path: '/store/sellers',
    roles: ['role_buyer', 'role_admin']
  }, {
    id: 3,
    name: 'Add product',
    path: '/store/add-product',
    roles: ['role_seller']
  }, {
    id: 4,
    name: 'Following',
    path: '/store/following',
    roles: ['role_buyer']
  },
  {
    id: 5,
    name: 'Orders',
    path: '/store/orders',
    roles: ['role_buyer', 'role_seller']
  },
  {
    id: 6,
    name: 'Reviews',
    path: '/store/reviews',
    roles: ['role_admin']
  },
]