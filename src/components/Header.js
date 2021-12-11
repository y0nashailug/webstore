import { useEffect } from "react"
import { connect } from "react-redux"
import { getUser, logout } from '../actions'
import PropTypes from 'prop-types'
import Avatar from "./shared/Avatar/Avatar"
import Icon from "./shared/Icon/Icon"
import DefaultProfile from '../assets/avatar.png'

const Header = ({ user, onClick, dispatch }) => {

    useEffect(() => dispatch(getUser()), [])
    
    const handleLogout = () => {
        dispatch(logout())
        onClick()
    }

    return (<div className="w-full flex bg-backgroundLightest">
        <div className="flex ml-auto items-center p-3">
            <div className="text-15">{user.username}</div>
            <div className="itemIcon mx-4 flex">
                <Avatar avatarUrl={DefaultProfile} className="shadow-outline-white" size={28} />
            </div>
            <div><Icon name="logout" className="cursor-pointer text-primary" size={16} onClick={handleLogout}/></div>
        </div>
    </div>)
}

Header.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string
    }).isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(
    mapStateToProps,
)(Header);