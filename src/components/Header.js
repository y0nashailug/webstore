import { useEffect } from "react"
import { connect } from "react-redux"
import { getUser, logout } from '../actions'
import PropTypes from 'prop-types'
import Avatar from "./shared/Avatar/Avatar"
import Icon from "./shared/Icon/Icon"
import DefaultProfile from '../assets/avatar.png'
import CartFixed from "./CartFixed"

const Header = ({ user, onClick, dispatch }) => {

    useEffect(() => dispatch(getUser()), [])
    
    const handleLogout = () => {
        dispatch(logout())
        onClick()
    }

    return (<div className="w-full flex bg-backgroundLightest">
        <div className="flex items-center px-8 py-3 w-full">
            <div className="logo">
                <div className="text-primary logo-text font-medium flex items-center">
                <Icon name="cart" size={24} className="mr-3" /><span>Webstore</span></div>
            </div>
            <div className="flex items-center ml-auto">
                <div>
                    <CartFixed />
                </div>
                <div className="h-full bg-backgroundLight" style={{ width: '2px' }}></div>
                <div className="text-15 mx-2">{user.username}</div>
                <div className="itemIcon mx-2 flex">
                    <Avatar avatarUrl={DefaultProfile} className="shadow-outline-white" size={28} />
                </div>
                <div className="mx-2">
                    <Icon name="logout" className="cursor-pointer text-primary" size={16} onClick={handleLogout}/>
                </div>
            </div>
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