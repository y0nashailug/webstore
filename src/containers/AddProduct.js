import Product from '../components/forms/Product'
import { connect } from 'react-redux'
import { addProduct } from '../actions'
import { useNavigate } from 'react-router-dom'

const AddProductContainer = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async product => {
        await dispatch(addProduct(product))
        navigate('/store/products')
    }

    return (<div>
        <Product onProductSubmit={handleSubmit}/>
    </div>)
}

export default connect()(AddProductContainer)