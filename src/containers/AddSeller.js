import { connect } from 'react-redux'
import { addProduct } from '../actions'
import { useNavigate } from 'react-router-dom'

import Seller from '../components/forms/Seller'

const AddSeller = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async product => {
        await dispatch(addProduct(product))
        navigate('/store/sellers')
    }

    return (<div>
        <Seller onProductSubmit={handleSubmit}/>
    </div>)
}

export default connect()(AddSeller)