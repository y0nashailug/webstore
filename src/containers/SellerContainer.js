import { useEffect } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import Icon from '../components/shared/Icon/Icon'
import SellerList from '../components/lists/SellerList'
import SellerItem from '../components/lists/SellerItem'
import { getAllSellers, addFollow, getUser, approveSeller } from '../actions'
import Button from '../components/shared/Button/Button'
import { roles } from '../config'

const SellerContainer = ({
    user,
    sellers,
    loading,
    getAllSellers,
    addFollow,
    approveSeller,
    getUser }) => {

    useEffect(() => getAllSellers(), [])
    useEffect(() => { getUser() }, [])

    const handleApproveSeller = async(id) => {
        await approveSeller(id)
    }

    return (
        <div className="flex flex-col items-center my-16 px-8">
            <div className="w-full md:w-9/12 lg:w-9/12">
                <div className="flex items-center justify-center text-center">
                <span className="pl-2 text-xl mb-4">Sellers</span>
                </div>
            </div>
            {!loading ? (
                <div className="md:w-9/12 lg:w-6/12">
                <SellerList>
                    <div className="flex flex-col">
                    {sellers.map((seller, i) => (
                        <div key={i} className="card mb-4 py-2 px-4 flex items-center">
                            <Icon name="avatar" size={24} />
                            <SellerItem
                                seller={seller}
                                key={seller.id}
                                className="px-4 py-2 flex items-center"
                            />
                            {user && user.roles[0].toLowerCase() === roles[2] ? <Button icon={seller.enabled ? 'check': 'lock'} variant="empty" className="ml-auto" onClick={() =>
                             handleApproveSeller(seller.id)}>{seller.enabled ? 'Approved': 'Approve'}</Button>:
                            <Button variant="empty" className="ml-auto" onClick={() =>
                             addFollow({ sellerId: seller.id })}>Follow</Button>}
                        </div>
                    ))}
                    </div>
                </SellerList>
                </div>
            ) : (
                <div><Icon name="spin" className="spinner" /></div>
            )}

        </div>
    )
}

SellerContainer.propTypes = {
    sellers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })).isRequired
}

const mapStateToProps = (state) => ({
    sellers: state.sellers.sellers,
    loading: state.sellers.loading,
    user: state.user,
})

export default connect(mapStateToProps, { getAllSellers, addFollow, getUser, approveSeller })(SellerContainer)