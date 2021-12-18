import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import { getProductById } from '../actions'
import Icon from '../components/shared/Icon/Icon'
import ProductItemFull from '../components/lists/ProductItemFull'
import Comment from '../components/Comment'

const ProductView = ({ product, loading, getProductById }) => {

    const { id } = useParams()

    useEffect(() => getProductById(id), [])

    return (
        <div className="flex flex-col items-center my-16 px-8">
            <div className="w-full md:w-9/12 lg:w-9/12">
                <div className="flex items-center justify-center text-center">
                <span className="pl-2 text-xl mb-4">Product</span>
                </div>
            </div>
           {!loading ? (
                <div className="md:w-9/12 lg:w-9/12">
                    <div className="flex justify-center">
                        <ProductItemFull
                            product={product}
                            className="px-4 py-2 flex items-center mb-4"
                        />
                    </div>
                    <Comment productId={id} isCreate={true} refetch={() => getProductById(id)} />
                    {product.reviews && product.reviews.map((review, i) => (
                        <Comment
                            comment={review}
                            key={i}
                        />
                    ))}
                </div>
            ) : (
                <div><Icon name="spin" className="spinner" /></div>
            )}
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    loading: PropTypes.bool,
}

const mapStateToProps = ({ products }) => ({
    product: products.product,
    loading: products.loading,
})

export default connect(mapStateToProps, { getProductById })(ProductView)