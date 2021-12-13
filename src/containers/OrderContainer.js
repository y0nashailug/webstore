import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import OrderList from '../components/lists/OrderList'
import OrderItem from '../components/lists/OrderItem'
import { getAllOrders } from '../actions'
import Icon from '../components/shared/Icon/Icon'

const OrderContainer = ({ orders, loading, getAllOrders }) => {

    useEffect(() => getAllOrders(), [])

    return (
        <div>
            <div>
                <h3>Orders</h3>
            </div>
            {!loading ? <OrderList>
                {orders.map(order => (
                    <OrderItem order={order} />
                ))}
            </OrderList>: <div><Icon name="spin" className="spinner" /></div>}
        </div>
    )
}

OrderContainer.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    loading: state.orders.loading
})

const mapDispatchToProps = (dispatch) => ({
    getAllOrders: () => dispatch(getAllOrders)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)