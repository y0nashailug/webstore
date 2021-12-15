import React from 'react'
import PropTypes from 'prop-types'
import Order from './Order'

const OrderItem = ({ order }) => {

    return (
        <Order
            quantity={order.quantity}
            status={order.status}
            product={order.product}
        />
    )
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    product: PropTypes.shape({
      price: PropTypes.number,
      quantity: PropTypes.number,
      name: PropTypes.string
    }).isRequired,
  }).isRequired
}

export default OrderItem