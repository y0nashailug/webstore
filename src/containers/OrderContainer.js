import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import OrderList from '../components/lists/OrderList'
import OrderItem from '../components/lists/OrderItem'

const OrderContainer = ({ orders, loading }) => {

    return (
        <div>
            {!loading ? <OrderList>
                {orders.map(order => (
                    <OrderItem order={order} />
                ))}
            </OrderList>: <div>Loading...</div>}
        </div>
    )
}

OrderContainer.propTypes = {
    orders: PropTypes.shape({
        name: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired
    }).isRequired
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    loading: state.orders.loading
})

export default connect(mapStateToProps)(OrderContainer)