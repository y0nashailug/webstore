import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from '../components/shared/Button/Button'

const SellerContainer = () => {

    const navigate = useNavigate()

    const handleOnAddSeller = () => {
        navigate('/store/add-seller')
    }

    return (
        <div>
            <div>Sellers</div>
            <Button onClick={handleOnAddSeller}>
                Add seller
            </Button>
        </div>
    )
}

SellerContainer.propTypes = {

}

export default connect()(SellerContainer)