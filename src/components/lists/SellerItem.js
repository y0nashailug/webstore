import React from 'react'
import PropTypes from 'prop-types'
import Seller from './Seller'

const SellerItem = ({ seller, className }) => {

    return (
        <Seller
            className={className}
            name={seller.name}
        />
    )
}

SellerItem.propTypes = {
  seller: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired
}

export default SellerItem