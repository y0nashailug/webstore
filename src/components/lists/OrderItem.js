import React from 'react'
import PropTypes from 'prop-types'
import Order from './Order'

const OrderItem = ({ order }) => {

    return (
        <Order
            name={order.name}
            total={order.total}
        />
    )
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired
}

export default OrderItem