import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Button from './shared/Button/Button'

const ProductItem = ({ product, onAddToCart }) => {

    return (
        <div>
            <Product
                name={product.name}
                price={product.price}
                quantity={product.quantity}
            />
            <Button onClick={onAddToCart}>Add to cart</Button>
      </div>
    )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ProductItem