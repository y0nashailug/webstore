import React from 'react'
import PropTypes from 'prop-types'

const Order = ({ total, name }) => (
  <div className="flex">
    <div className="mr-2">{name} - &#36;{total}</div>
  </div>
)

Order.propTypes = {
  total: PropTypes.number,
  name: PropTypes.string
}

export default Order