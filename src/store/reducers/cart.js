import { ADD_TO_CART, CHECKOUT_REQUEST } from '../../constants'
  
  const initialState = {
    addedIds: [],
    quantityById: {}
  }
  
  const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        if (state.indexOf(action.payload) !== -1) {
          return state
        }
        return [ ...state, action.payload ]
      default:
        return state
    }
  }
  
  const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const id = action.payload
        //TODO: - check if the quantity
        return {
          ...state,
          [id]: (state[id] || 0) + 1
        }
      default:
        return state
    }
  }
  
  export const getQuantity = (state, id) => state.quantityById[id] || 0
  
  export const getAddedIds = state => state.addedIds
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case CHECKOUT_REQUEST:
        return initialState
      default:
        return {
          addedIds: addedIds(state.addedIds, action),
          quantityById: quantityById(state.quantityById, action)
        }
    }
  }
  
  export default cart
  