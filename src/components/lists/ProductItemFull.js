import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../ProductCard'

const ProductItemFull = ({ product, className }) => {

    return (
      <div className={className}>
        <div className='flex flex-wrap items-center'>
            <ProductCard
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                category={product.category}
                description={product.description}
            />
        </div>
      </div>
    )
}

ProductItemFull.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

export default ProductItemFull