import React from 'react'
import PropTypes from 'prop-types'

const ProductList  = ({ children }) => (<div>{children}</div>)

ProductList.propTypes = {
  children: PropTypes.node,
}

export default ProductList