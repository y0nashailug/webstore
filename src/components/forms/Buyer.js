import PropTypes from 'prop-types'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import { isRequired } from '../../utils'

const Buyer = ({ onSubmit }) => {

    const form = {
        name: '',
        username: ''
    }

    const handleSubmit = () => {
        if (isValidDTO()) {
            onSubmit(form)
        }
    }

    const isValidDTO = () => {
        return isRequired(form.username) &&
        isRequired(form.name)
    }

    const setFieldValue = (type, value) => {
        form[type] = value
    }

    return (
        <div className="w-75">
        <div className="flex items-center">
            <div className="formField">
                <label className="formFieldLabel" htmlFor="username">Username</label>
                <div className="relative">
                    <Input name="username" onBlur={(val) => setFieldValue('username', val)} />
                </div>
                <div className="formFieldTip"></div>
            </div>

            <div className="formField">
                <label className="formFieldLabel" htmlFor="username">Name</label>
                <div className="relative">
                    <Input name="name" onBlur={(val) => setFieldValue('name', val)} />
                </div>
                <div className="formFieldTip"></div>
            </div>
            <Button onClick={handleSubmit} disabled={isValidDTO()}>Add</Button>
        </div>
    </div>
    )
}

Buyer.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}

export default Buyer