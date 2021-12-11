import { Route, Routes, useNavigate  } from 'react-router-dom';

import Login from './common/Login';
import Success from './Success';
import ProductContainer from './ProductContainer';
import CartContainer from './CartContainer';
import AddProduct from './AddProduct'
import SellerContainer from './SellerContainer'
import BuyerContainer from './BuyerContainer'
import OrderContainer from './OrderContainer'
import AddSeller from './AddSeller'
import AddBuyer from './AddBuyer'
import Header from '../components/Header'

const Layout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <div className="w-full">
            <div className="navigation">
                <div className="main-header flex flex-row overflow-hidden h-full">
                    <Header onClick={handleLogout} />
                </div>
            </div>
            <div className="main-panel">
            <div className="content">
                <div className="container-fluid">
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/success" element={<Success />} />
                        <Route exact path="/products" element={<ProductContainer />} />
                        <Route exact path="/carts" element={<CartContainer />} />
                        <Route exact path="/add-product" element={<AddProduct />} />
                        <Route exact path="/add-seller" element={<AddSeller />} />
                        <Route exact path="/add-buyer" element={<AddBuyer />} />
                        <Route exact path="/sellers" element={<SellerContainer />} />
                        <Route exact path="/buyers" element={<BuyerContainer />} />
                        <Route exact path="/orders" element={<OrderContainer />} />
                    </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout