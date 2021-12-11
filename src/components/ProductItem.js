import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Icon from './shared/Icon/Icon'

const ProductItem = ({ product, onAddToCart, className }) => {

    return (
      <div className={className}>
        <div className='flex flex-wrap container items-center'>
            <Product
                name={product.name}
                price={product.price}
                quantity={product.quantity}
            />
            <Icon
                className="text-textLight cursor-pointer ml-4"
                size={20}
                name="cart"
                onClick={onAddToCart}
                title='Add to cart'
              />
        </div>
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