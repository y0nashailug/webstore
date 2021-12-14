import { ADD_SELLER, GET_SELLERS } from '../../constants'

const initialState = {
    loading: true,
    sellers: []
}

const sellerReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SELLERS:
            return {
                ...state,
                loading: false,
                sellers: action.payload
            }
        case ADD_SELLER:
            return {
                ...state,
                sellers: [...state.sellers, action.payload],
                loading: false
            }
        default:
            return state
    }
}

export default sellerReducer