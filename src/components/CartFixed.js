import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkout } from '../actions'
import { getCartProducts, getTotal } from '../store/reducers'
import Icon from './shared/Icon/Icon'
import Cart from './Cart'

const CartTop = ({ products, total, checkout }) => {
    return (
        <div className="relative">
            <Icon name="cart" size={16} className="mr-2" />
            <div className="cart-container absolute right-0 z-20 mt-2 px-4 py-2 bg-white rounded-lg drop-shadow-md">
                <Cart
                    products={products}
                    total={total}
                    onCheckoutClicked={() => checkout(products)} />
            </div>
      </div>
    )
}

CartTop.propTypes = {
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
)(CartTop)
