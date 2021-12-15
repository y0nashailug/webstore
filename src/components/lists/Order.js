import React from 'react'
import PropTypes from 'prop-types'

const Order = ({ quantity, status, product }) => (
  <div className="flex">
    <div className="mr-2"> {product.name} - &#36;{product.price} - {quantity} {status}</div>
  </div>
)

Order.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.shape({
    price: PropTypes.number,
    quantity: PropTypes.number,
    name: PropTypes.string
  }).isRequired,
  status: PropTypes.string,
}

export default Order