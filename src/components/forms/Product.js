import { useRef } from "react"
import PropTypes from 'prop-types'

const Product = ({ onProductSubmit }) => {

    const formRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault()
        // dispatch()
        const product = {
            name: formRef.current.name.value,
            price: formRef.current.price.value,
            quantity: formRef.current.quantity.value
        }

        onProductSubmit(product)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input name="name" type="text" placeholder="Name" />
                <input name="price" type="text" placeholder="Price" />
                <input name="quantity" type="text" placeholder="Quantity" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

export default Product