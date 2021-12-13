import { connect } from 'react-redux'
import { addProduct } from '../actions'
import { useNavigate } from 'react-router-dom'

import Buyer from '../components/forms/Buyer'

const AddBuyer = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async product => {
        await dispatch(addProduct(product))
        navigate('/store/sellers')
    }

    return (<div>
        <Buyer onSubmit={handleSubmit}/>
    </div>)
}

export default connect()(AddBuyer)