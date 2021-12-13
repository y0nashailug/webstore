import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Checkout from '../components/forms/Checkout'
import Cart from '../components/Cart'
import { getTotal, getCartProducts } from '../store/reducers'

const CheckoutContainer = ({ products, total }) => {

    const handleSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="flex flex-wrap justify-center my-16 px-8">
            <div className="md:w-9/12 lg:w-6/12">
                <div className="flex">
                    <div className="mx-4">
                        <Checkout onSubmit={handleSubmit}/>
                    </div>
                    <div className="mx-4">
                        <Cart
                            products={products}
                            total={total}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

CheckoutContainer.propTypes = {
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

export default connect(mapStateToProps)(CheckoutContainer)