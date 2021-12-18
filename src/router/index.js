import { Navigate } from 'react-router-dom'
import Login from '../containers/common/Login'
import ProductContainer from '../containers/ProductContainer'
import CheckoutContainer from '../containers/CheckoutContainer'
import SellerContainer from '../containers/SellerContainer'
import BuyerContainer from '../containers/BuyerContainer'
import OrderContainer from '../containers/OrderContainer'
import CartContainer from '../containers/CartContainer'
import FollowingSellerContainer from '../containers/FollowingSellerContainer'
import AddBuyer from '../containers/AddBuyer'
import AddSeller from '../containers/AddSeller'
import AddProduct from '../containers/AddProduct'
import AddAdmin from '../containers/AddAdmin'
import Layout from '../containers/Layout'
import ProductView from '../containers/ProductView'

const routes = (loggedIn) => [
  {
    path: '/store',
    element: loggedIn ? <Layout />: <Navigate to="/login" />,
    children: [
      { path: 'products', element: <ProductContainer /> },
      { path: 'checkout', element: <CheckoutContainer /> },
      { path: 'sellers', element: <SellerContainer /> },
      { path: 'buyers', element: <BuyerContainer /> },
      { path: 'orders', element: <OrderContainer /> },
      { path: 'carts', element: <CartContainer /> },
      { path: 'following', element: <FollowingSellerContainer /> },
      { path: 'add-buyer', element: <AddBuyer /> },
      { path: 'add-seller', element: <AddSeller /> },
      { path: 'add-product', element: <AddProduct /> },
      { path: 'add-admin', element: <AddAdmin /> },
      { path: 'products/:id', element: <ProductView /> },
      { path: '', element: <Navigate to="/store/products" /> }
    ],
  }, {
    path: '/login',
    element: <Login />
  }, {
    path: '',
    element: loggedIn ? <Navigate to="/store" />: <Navigate to="/login" />,
  }
]

export default routes
