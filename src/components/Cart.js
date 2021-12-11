import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Button from './shared/Button/Button'

const Cart  = ({ products, total, onCheckoutClicked, className }) => {
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
    <span className="text-13">Your cart is empty.</span>
  )

  return (
    <div className={className}>
      <div className="text-15 text-textLight py-2">Your shopping cart</div>
      <div className="py-1">{nodes}</div>
      {hasProducts ? <p>Total: &#36;{total}</p>: null}
      {hasProducts ? <Button className="w-full mt-2" variant="empty" onClick={onCheckoutClicked}
        disabled={hasProducts ? false : true}>
        Checkout
      </Button>: null}
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
