import { GET_ORDERS } from '../../constants'

const initialState = {
    orders: [],
    loading: true
}

const orders = (state = initialState, action ) => {
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default orders