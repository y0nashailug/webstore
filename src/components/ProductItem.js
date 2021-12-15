import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductItem = ({ product, onAddToCart, className }) => {

    return (
      <div className={className}>
        <div className='flex flex-wrap items-center'>
            <ProductCard
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                category={product.category}
                onAddToCart={onAddToCart}
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