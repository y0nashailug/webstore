import { GET_REVIEWS, ADD_REVIEW } from "../../constants"

const initialState = {
    loading: true,
    reviews: [],
}

const reviews = (state = initialState, action) => {
    switch(action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                loading: false
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
                loading: false
            }
        default:
            return state
    }
}

export default reviews