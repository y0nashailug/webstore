import { GET_PRODUCTS, ADD_PRODUCT } from "../../constants"

const initialState = {
    loading: true,
    products: []
}

const products = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false
            }
        default:
            return state
    }
}

export const getProduct = (state, id) => state.products.find(product => product.id === id)

export default products