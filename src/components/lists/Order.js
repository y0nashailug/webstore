import React from 'react'
import PropTypes from 'prop-types'

const Order = ({ quantity, status, product }) => (
  <div className="flex w-full">
    <div className="mr-2 flex items-center w-full">
      <div className="text-lg">{product.name}</div>
      <div className="ml-auto flex flex-col">
        <div>
          <span className="text-13 mr-4">Quantity:</span> <span>{quantity}</span>
        </div>
        <div>
          <span className="text-13 mr-4">Price:</span>
          <span className="text-primary font-medium">&#36;{product.price}</span>
        </div>
      </div>
    </div>
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