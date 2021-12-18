import { connect } from 'react-redux'
import { addBuyer } from '../actions'
import { useNavigate } from 'react-router-dom'

import Buyer from '../components/forms/Buyer'

const AddBuyer = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async buyer => {
        await dispatch(addBuyer(buyer))
        navigate('/store/buyers')
    }

    return (
        <div className="flex flex-col items-center my-16 px-8">
            <div className="w-full md:w-9/12 lg:w-9/12">
                <div className="flex items-center justify-center text-center">
                <span className="pl-2 text-xl mb-4">Register as buyer</span>
                </div>
            </div>
            <div className="md:w-9/12 lg:w-6/12 justify-center flex">
                <Buyer onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default connect()(AddBuyer)