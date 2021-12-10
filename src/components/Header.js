import { useEffect } from "react"
import { connect } from "react-redux"
import { getUser, logout } from '../actions'
import PropTypes from 'prop-types'

const Header = ({ user, getUser, logout }) => {
    useEffect(() => getUser(), [])

    return (<div>
        Hello, <span>{user.username}</span> <button onClick={logout}>logout</button>
        </div>)
}

Header.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string
    }).isRequired
}

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);