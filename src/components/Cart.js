import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Button from './shared/Button/Button'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <span>Empty cart.</span>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <Button onClick={onCheckoutClicked}
        disabled={hasProducts ? false : true}>
        Checkout
      </Button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
