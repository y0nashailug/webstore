import React from 'react'
import PropTypes from 'prop-types'

const SellerList  = ({ children }) => (<div>{children}</div>)

SellerList.propTypes = {
  children: PropTypes.node,
}

export default SellerList