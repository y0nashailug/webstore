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
    <div className="flex flex-col items-center my-16 px-8">
      <div className="w-full md:w-9/12 lg:w-9/12">
        <div className="flex items-center justify-center text-center">
          <span className="pl-2 text-xl mb-4">Orders</span>
        </div>
      </div>
      {!loading ? (
        <div className="md:w-9/12 lg:w-9/12">
          <OrderList>
            <div className="flex flex-wrap">
              {orders.length ? orders.map((order, i) => (
                <div key={i} className="flex flex-col w-full">
                  <div className="mb-2 text-13">{order.orderDate}</div>
                  <div className="card mb-4 py-2 px-4 flex flex-col w-full">
                      {order.orderItems.map((item, j) => (
                        <div key={j}>
                          <OrderItem
                              order={item}
                              key={i}
                              className="px-4 py-2 flex items-center mb-4"
                          />
                        </div>
                      ))}
              </div></div>)): <div className="text-center w-full text-15">No order to show</div>}
            </div>
          </OrderList>
        </div>
      ) : (
        <div><Icon name="spin" className="spinner" /></div>
      )}
    </div>
    )
}

OrderContainer.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.string.isRequired,
        orderDate: PropTypes.string.isRequired,
    })).isRequired
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    loading: state.orders.loading
})

export default connect(mapStateToProps, { getAllOrders })(OrderContainer)