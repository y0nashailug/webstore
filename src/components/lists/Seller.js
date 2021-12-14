import React from 'react'
import PropTypes from 'prop-types'

const Order = ({ name, className }) => (
  <div className={`flex ${className}`}>
    <div className="mr-2">{name}</div>
  </div>
)

Order.propTypes = {
  name: PropTypes.string.isRequired
}

export default Order