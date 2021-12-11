import React from 'react'
import PropTypes from 'prop-types'

const OrderList  = ({ children }) => (<div>{children}</div>)

OrderList.propTypes = {
  children: PropTypes.node,
}

export default OrderList