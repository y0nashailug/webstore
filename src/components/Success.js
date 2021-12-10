import React from 'react'
import PropTypes from 'prop-types'

const Success  = ({ user }) => {
  return (
    <div>
      <h3>{user.username}</h3>
    </div>
  )
}

Success.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
}

export default Success