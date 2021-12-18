import { connect } from "react-redux"
import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { getAllProducts, addToCart } from "../actions"
import ProductList from "../components/ProductList"
import ProductItem from "../components/ProductItem"
import Icon from '../components/shared/Icon/Icon'
import { useNavigate } from "react-router-dom"

const ProductContainer = ({ products, loading, getAllProducts, addToCart }) => {
  
  useEffect(() => getAllProducts(), [])
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/store/products/${id}`)
  }

  return (
    <div className="flex flex-col items-center my-16 px-8">
      <div className="w-full md:w-9/12 lg:w-9/12">
        <div className="flex items-center justify-center text-center">
          <span className="pl-2 text-xl mb-4">Products</span>
        </div>
      </div>
      {!loading ? (
        <div className="md:w-9/12 lg:w-9/12">
          <ProductList>
            <div className="flex flex-wrap">
              {products.length ? products.map((product, i) => (
                <div
                  key={i}
                  className="cursor-pointer">
                  <ProductItem
                    product={product}
                    onAddToCart={() => addToCart(product.id)}
                    onView={() => handleNavigate(product.id)}
                    className="px-4 py-2 flex items-center mb-4"
                  />
                </div>
              )): <div className="text-center w-full text-15">No product to show</div>}
            </div>
          </ProductList>
        </div>
      ) : (
        <div><Icon name="spin" className="spinner" /></div>
      )}
    </div>
  )
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool,
  addToCart: PropTypes.func,
}

const mapStateToProps = ({ products }) => ({
  products: products.products,
  loading: products.loading,
})

export default connect(mapStateToProps, { getAllProducts, addToCart })(
  ProductContainer
)