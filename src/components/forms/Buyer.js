import PropTypes from 'prop-types'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import { isRequired } from '../../utils'

const Buyer = ({ onSubmit }) => {

    const form = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidDTO()) {
            onSubmit(form)
        }
    }

    const isValidDTO = () => {
        return isRequired(form.username) &&
        isRequired(form.name) &&
        isRequired(form.email) &&
        isRequired(form.password)
    }

    const setFieldValue = (type, value) => {
        form[type] = value
    }

    return (
        <div className="" style={{ width: '24rem' }}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-col m-auto">
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


                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="email">Email</label>
                        <div className="relative">
                            <Input name="email" onBlur={(val) => setFieldValue('email', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="password">Password</label>
                        <div className="relative">
                            <Input name="password" type="password" onBlur={(val) => setFieldValue('password', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <Button type="submit" className="mt-4">Add</Button>
                </div>
            </form>
        </div>
    )
}

Buyer.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    })
}

export default Buyer