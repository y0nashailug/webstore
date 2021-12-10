import AddProduct from '../components/forms/AddProduct'
import { connect } from 'react-redux'
import { addProduct } from '../actions'
import { useNavigate } from 'react-router-dom'

const AddProductContainer = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async product => {
        await dispatch(addProduct(product))
        navigate('/products')
    }

    return (<div>
        <AddProduct onProductSubmit={handleSubmit}/>
    </div>)
}

export default connect()(AddProductContainer)