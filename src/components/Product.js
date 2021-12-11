import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ id, price, quantity, name }) => (
  <div className="flex">
    <div className="items-center w-full my-1 flex">
      <div>{name}</div>  <div className="px-2 opacity-50">&#36;{price}</div>{quantity ? ` (${quantity})` : null}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  name: PropTypes.string
}

export default Product