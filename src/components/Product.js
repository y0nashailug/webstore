import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, name }) => (
  <div className="flex">
    <div className="items-center w-full my-1">
      <div className="whitespace-nowrap">{name}</div>
      <div className="">
        <div className="flex items-center">
          <span className="text-13">Price</span><div className="px-2 opacity-50">&#36;{price}</div>
        </div>
        <div className="flex items-center">
          <span className="text-13">Quantity</span><div className="px-2 opacity-50">{quantity ? ` ${quantity}` : null}</div>
        </div>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  name: PropTypes.string
}

export default Product