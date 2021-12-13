import { Outlet, useNavigate  } from 'react-router-dom'

import Header from '../components/Header'

const Layout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <div className="w-full">
            <div className="navigation">
                <div className="main-header flex flex-row h-full">
                    <Header onClick={handleLogout} />
                </div>
            </div>
            <div className="main-panel">
            <div className="content">
                <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout