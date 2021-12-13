import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from '../components/shared/Button/Button'

const BuyerContainer = () => {

    const navigate = useNavigate()

    const handleOnAddBuyer = () => {
        navigate('/store/add-buyer')
    }

    return (
        <div>
            <div>Buyers</div>
            <Button onClick={handleOnAddBuyer}>
                Add buyer
            </Button>
        </div>
    )
}

BuyerContainer.propTypes = {

}

export default connect()(BuyerContainer)