import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as dayjs from 'dayjs'

import OrderList from '../components/lists/OrderList'
import OrderItem from '../components/lists/OrderItem'
import { getAllOrders, cancelOrder, changeOrderStatus } from '../actions'
import Icon from '../components/shared/Icon/Icon'
import Button from '../components/shared/Button/Button'
import Macbook from '../assets/macbook.jpg'
import { userInfoService } from '../services/storageService'

const OrderContainer = ({ orders, loading, getAllOrders }) => {

    const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false)
    const [statusUpdated, setStatusUpdated] = useState('')

    useEffect(() => getAllOrders(), [statusUpdated])

    const handleCancelOrder = async(id) => {
      await cancelOrder(id)
      setStatusUpdated('CANCELLED')
    }

    const handleChangeOrderStatus = async(id, status) => {
      setToggleDropDownMenu(false)
      await changeOrderStatus(id, { status })
      setStatusUpdated(status)
    }

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
                  <div className="flex relative mb-2">
                    <div className="mb-2 text-13 items-center flex">
                      <div className="text-13 mr-4 text-primary font-bold">{order.status}</div>
                      {dayjs(order.orderDate).format("MM-DD-YYYY")}
                    </div>

                    <div className="flex ml-auto items-center">
                      <Button variant="empty" icon="chevron-down" onClick={() => setToggleDropDownMenu(!toggleDropDownMenu) }>Change order status</Button>
                    </div>
                    {toggleDropDownMenu ? 
                      <div>
                        <button className="fixed top-0 left-0 right-0 bottom-0 z-1 w-full"
                         onClick={() => setToggleDropDownMenu(false) }></button>
                        <div className="cart-container cart-min absolute right-0 z-20 mt-2 px-4 py-2 bg-white rounded-lg drop-shadow-md flex flex-col">
                            <Button variant="empty" onClick={() => handleCancelOrder(order.id)}>Cancel Order</Button>
                            <Button variant="empty" onClick={() => handleChangeOrderStatus(order.id, 'ACCEPTED')}>Accept order</Button>
                            <Button variant="empty" onClick={() => handleChangeOrderStatus(order.id, 'SHIPPED')}>Shipped</Button>
                            <Button variant="empty" onClick={() => handleChangeOrderStatus(order.id, 'ONTHEWAY')}>On the way</Button>
                            <Button variant="empty" onClick={() => handleChangeOrderStatus(order.id, 'DELIVERED')}>Delivered</Button>
                        </div>
                      </div>
                     : null }
                  </div>
                  
                  <div className="card mb-4 py-2 px-4 flex flex-col w-full">
                      {order.orderItems.map((item, j) => (
                        <div key={j} className="flex items-center">
                            <div className="mr-8">
                              <div style={{ 
                                  background: `url(${Macbook})`,
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  height: '60px',
                                  width: '60px'
                              }}></div>
                          </div>
                          <OrderItem
                              order={item}
                              key={i}
                              className="px-4 py-2 flex items-center mb-4"
                          />
                        </div>
                      ))}
              </div>
              </div>)): <div className="text-center w-full text-15">No order to show</div>}
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