import { connect } from 'react-redux'
import { addAdmin } from '../actions'
import { useNavigate } from 'react-router-dom'

import Admin from '../components/forms/Admin'

const AddAdmin = ({ dispatch }) => {

    const navigate = useNavigate()
    const handleSubmit =  async seller => {
        await dispatch(addAdmin(seller))
        navigate('/store/sellers')
    }

    return (
        <div className="flex flex-col items-center my-16 px-8">
            <div className="w-full md:w-9/12 lg:w-9/12">
                <div className="flex items-center justify-center text-center">
                <span className="pl-2 text-xl mb-4">Add new admin</span>
                </div>
            </div>
            <div className="md:w-9/12 lg:w-6/12 justify-center flex">
                <Admin onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default connect()(AddAdmin)