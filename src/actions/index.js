import * as types from '../constants'
import apiRequest from '../services/apiRequest'
import { userInfoService } from '../services/storageService'
import { userService } from '../services/userService'
import { APIS } from '../config'

export const userAction = userInfo => ({
    type: types.USER_LOGGED_IN,
    payload: userInfo
})

const getProducts = products => ({
    type: types.GET_PRODUCTS,
    payload: products
})

export const getAllProducts = () => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.products.get,
        data: {}
    })
    dispatch(getProducts(data))
}

export const getAllReviews = () => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.reviews.get,
        data: {}
    })
    dispatch({
        type: types.GET_REVIEWS,
        payload: data
    })
}

export const approveReview = (id) => async dispatch => {
    console.log(id)
    const { data } = await apiRequest.request({
        ...APIS.reviews.put(id),
        data: {}
    })
    // dispatch({
    //     type: types.GET_REVIEWS,
    //     payload: data
    // })
}

export const getProductById = (id) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.products.getById(id),
        data: {}
    })
    dispatch({
        type: types.GET_PRODUCT,
        payload: data
    })
}

export const getUser = () => async dispatch => {
    const user = userInfoService.getUser()
    if (user && Object.keys(user).length) {
        dispatch(userAction(user))
    } else {
        // Get data from backend if user is not already logged in
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: types.USER_LOGGED_LOGOUT
    })
}

export const checkout = (products) => (dispatch, getState) => {
    const { cart } = getState()
    //TODO: - send the cart and products to the backend
    dispatch({
      type: types.CHECKOUT_REQUEST,
    })
}

export const addToCart = (id) => (dispatch, getState) => {
    dispatch({
        type: types.ADD_TO_CART,
        payload: id
    })
}

export const loginAction = (userInfo) => async dispatch => {
    const { user } = await userService.login(userInfo)
    dispatch(userAction(user))
}

export const addProduct = (product) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.products.post,
        data: product
    })
    dispatch({
        type: types.ADD_PRODUCT,
        payload: data
    })
}

export const addSeller = (seller) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.sellers.post,
        data: seller
    })
    dispatch({
        type: types.ADD_SELLER,
        payload: data,
    })
}

export const addAdmin = (seller) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.admin.post,
        data: seller
    })
    dispatch({
        type: types.ADD_SELLER,
        payload: data,
    })
}

export const addBuyer = (buyer) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.buyers.post,
        data: buyer
    })
    dispatch({
        type: types.ADD_BUYER,
        payload: data,
    })
}

export const addOrder = (order) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.orders.post,
        data: order
    })
    dispatch({
        type: types.ADD_ORDER,
        payload: data,
    })
}

export const addReview = (id, review) => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.reviews.addReview(id),
        data: review
    })
    dispatch({
        type: types.ADD_REVIEW,
        payload: data,
    })
}


export const getAllSellers = () => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.sellers.get,
        data: {}
    })
    dispatch({
        type: types.GET_SELLERS,
        payload: data
    })
}


export const getFollowingSellers = () => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.buyers.followingGet,
        data: {}
    })
    dispatch({
        type: types.GET_SELLERS,
        payload: data
    })
}

export const getAllBuyers = () => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.buyers.get,
        data: {}
    })
    dispatch({
        type: types.GET_BUYERS,
        payload: data
    })
}

export const getAllOrders = () => async dispatch => {
    const { data } = await apiRequest.request({
        ...APIS.orders.get,
        data: {}
    })
    dispatch({
        type: types.GET_ORDERS,
        payload: data
    })
}

export const addFollow = (data) => async dispatch => {
    await apiRequest.request({
        ...APIS.buyers.addFollow,
        data,
    })
}


export const approveSeller = (id) => async dispatch => {
    await apiRequest.request({
        ...APIS.sellers.approveSeller(id),
        data: {}
    })
}

export const unFollow = (data) => async dispatch => {
    await apiRequest.request({
        ...APIS.buyers.unFollow,
        data,
    })
}

export const cancelOrder = async(id) => {
    return await apiRequest.request({
        ...APIS.orders.cancelOrder(id),
        data: {}
    })
}

export const changeOrderStatus = async(id, data) => {
    return await apiRequest.request({
        ...APIS.orders.changeOrderStatus(id),
        data
    })
}