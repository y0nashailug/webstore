import { apiBaseUrl } from '../environment'

console.log(apiBaseUrl);

export const BASE_URL = `${apiBaseUrl}/api`

export const TOKEN_KEY = 'access_token';
export const USER_KEY = '_u_k';

export const routeAccess = {

};

export const APIS = (params) => ({
  login: 'auth/login',
})