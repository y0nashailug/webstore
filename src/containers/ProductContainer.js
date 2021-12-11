import { connect } from "react-redux"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

import { getAllProducts, addToCart } from "../actions"
import ProductList from "../components/ProductList"
import ProductItem from "../components/ProductItem"
import Button from '../components/shared/Button/Button'

const ProductContainer = ({ products, loading, getAllProducts, addToCart }) => {
  
  useEffect(() => getAllProducts(), [])
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div>
      <div>
        <h3>Products</h3>
      </div>
      {!loading ? (
        <div>
          <ProductList>
            {products.map((product) => (
              <ProductItem
                product={product}
                onAddToCart={() => addToCart(product.id)}
                key={product.id}
              />
            ))}
          </ProductList>
          <Button onClick={() => handleNavigate("/carts")}>go to cart</Button>
        </div>
      ) : (
        <div>Loading...</div>
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

// const mapDispatchToProps = (dispatch) => ({
//   getAllProducts: () => dispatch(getAllProducts) //Action
// })

export default connect(mapStateToProps, { getAllProducts, addToCart })(
  ProductContainer
)