import PropTypes from 'prop-types'
import { isRequired } from '../../utils'
import Input from '../shared/Input/Input'
import Button from '../shared/Button/Button'

const Product = ({ onProductSubmit }) => {

    const form = {
        name: '',
        price: '',
        quantity: ''
    }

    const handleSubmit = () => {
        if (isValidDTO()) {
            onProductSubmit(form) //onSubmit(form)
        }
    }

    const isValidDTO = () => {
        return isRequired(form.username) &&
        isRequired(form.name)
    }

    const setFieldValue = (type, value) => {
        form[type] = value
    }

    return (
        <div className="w-75">
        <div className="flex items-center">
            <div className="formField">
                <label className="formFieldLabel" htmlFor="name">Name</label>
                <div className="relative">
                    <Input name="name" onBlur={(val) => setFieldValue('name', val)} />
                </div>
                <div className="formFieldTip"></div>
            </div>

            <div className="formField">
                <label className="formFieldLabel" htmlFor="price">Price</label>
                <div className="relative">
                    <Input name="price" onBlur={(val) => setFieldValue('price', val)} />
                </div>
                <div className="formFieldTip"></div>
            </div>

            <div className="formField">
                <label className="formFieldLabel" htmlFor="quantity">Quantity</label>
                <div className="relative">
                    <Input name="quantity" onBlur={(val) => setFieldValue('quantity', val)} />
                </div>
                <div className="formFieldTip"></div>
            </div>
            <Button onClick={handleSubmit} disabled={isValidDTO()}>Add</Button>
        </div>
    </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

export default Product