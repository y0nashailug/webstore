import React from 'react'
import { connect } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import PropTypes from 'prop-types'

import { loginAction } from '../../actions'
import Button from '../../components/shared/Button/Button'
import Input from '../../components/shared/Input/Input'
import { isRequired } from '../../utils'

const Login = ({ dispatch }) => {
    const navigate = useNavigate();
    const form = {
        username: '',
        password: ''
    }

    const handleSubmit = async() => {
        if (isValidDTO()) {
            await dispatch(loginAction(form))
            navigate('/products')
        }
    }

    const isValidDTO = () => {
        return isRequired(form.username) &&
        isRequired(form.password)
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
                    <label className="formFieldLabel" htmlFor="username">Password</label>
                    <div className="relative">
                        <Input name="password" type="password" onBlur={(val) => setFieldValue('password', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <Button onClick={handleSubmit} disabled={isValidDTO()}>Login</Button>
            </div>
        </div>
    )
}

Login.propTypes = {
    form: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    })
}

export default connect()(Login);