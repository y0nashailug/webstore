import { ADD_BUYER, GET_BUYERS } from '../../constants'

const initialState = {
    loading: true,
    buyers: []
}

const buyerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_BUYER:
            return {
                ...state,
                loading: false,
                buyers: action.payload
            }
        case GET_BUYERS:
            return {
                ...state,
                buyers: [...state.buyers, action.payload],
                loading: false
            };
        default:
            return state
    }
}

export default buyerReducer