import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link,   useMatch,
    useResolvedPath } from 'react-router-dom'
import { getUser, logout } from '../actions'
import PropTypes from 'prop-types'
import Avatar from "./shared/Avatar/Avatar"
import Icon from "./shared/Icon/Icon"
import DefaultProfile from '../assets/avatar.png'
import CartFixed from "./CartFixed"
import { routes, routeAccess } from '../config'

const Header = ({ user, onClick, dispatch }) => {

    const [userFetch, setterUser] = useState(false)
    useEffect(() => {
        dispatch(getUser())
        if (user) {
            setterUser(true)
        }
    }, [])

    const [filteredRoutes, setFilteredRoutes] = useState([])

    const handleLogout = () => {
        dispatch(logout())
        onClick()
    }

    useEffect(() => {
        if (userFetch) {
            const filtered = routes.filter(route => {
                if (route.roles.includes(user.roles[0].toLowerCase())) {
                  const metaName = route.path.split('/').slice(-1)[0]
                  return routeAccess[user.roles[0].toLowerCase()].includes(metaName)
                }
                return false
            })
            setFilteredRoutes(filtered)
        }
    }, [userFetch])

    // let resolved = useResolvedPath(to);
    // let match = useMatch({ path: resolved.pathname, end: true });

    return (<div className="w-full flex bg-backgroundLightest">
        <div className="flex items-center px-8 py-3 w-full">
            <div className="logo">
                <div className="text-primary logo-text font-medium flex items-center">
                    <Link to={'/store/products'} className="flex"><Icon name="cart" size={24} className="mr-3" /><span>Webstore</span></Link>
                </div>
            </div>
            <div className="flex ml-8">
                {filteredRoutes.map(route => <Link
                    className="mr-4"
                    key={route.id} to={route.path}>{route.name}</Link>)}
            </div>
            <div className="flex items-center ml-auto">
                <div>
                    <CartFixed />
                </div>
                <div className="h-full bg-backgroundLight" style={{ width: '2px' }}></div>
                <div className="text-15 mx-2">{user.name}</div>
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
        name: PropTypes.string,
        email: PropTypes.string,
        roles: PropTypes.array,
    }).isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(
    mapStateToProps,
)(Header);