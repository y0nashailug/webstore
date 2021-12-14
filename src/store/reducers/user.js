import { USER_LOGGED_IN, USER_LOGGED_LOGOUT } from '../../constants'
import { tokenService, userInfoService } from '../../services/storageService'
import apiService from '../../services/apiService'
const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return Object.assign({}, state, action.payload)
        case USER_LOGGED_LOGOUT:
            tokenService.removeToken();
            tokenService.removeRefreshToken();
            userInfoService.removeUser()
            apiService.removeHeader()
            return {};
        default:
            return state
    }
}

export default userReducer