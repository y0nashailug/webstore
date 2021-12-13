import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkout } from '../actions'
import { getCartProducts, getTotal } from '../store/reducers'
import Cart from './Cart'
import Button from './shared/Button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CartFixed = ({ products, total, checkout }) => {

    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleNavigate = () => {
        navigate('/store/checkout')
    }

    return (
        <div className="relative">
            <div className="mr-2 flex items-center">
                <Button onClick={handleToggle} icon="cart" iconSize={16} variant="transparent">
                    <span className="px-1 text-primary">({products.length})</span>
                </Button>
            </div>
            {toggle ? <div className="cart-container absolute right-0 z-20 mt-2 px-4 py-2 bg-white rounded-lg drop-shadow-md">
                <Cart
                    products={products}
                    total={total}
                    hasButton={true}
                    onCheckoutClicked={handleNavigate} />
            </div>: null}
      </div>
    )
}

CartFixed.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout }
)(CartFixed)
