import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ id, price, quantity, name }) => (
  <div className="flex">
    <div className="mr-2">{name} - &#36;{price}{quantity ? ` x ${quantity}` : null}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  name: PropTypes.string
}

export default Product