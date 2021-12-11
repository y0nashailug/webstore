import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import PropTypes from 'prop-types'

import { loginAction } from '../../actions'
import Button from '../../components/shared/Button/Button'
import Input from '../../components/shared/Input/Input'
import { isRequired } from '../../utils'

const Login = ({ dispatch }) => {
    const navigate = useNavigate()
    const [isWorking, setIsWorking] = useState(false)
    const form = {
        username: '',
        password: ''
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      if (isValidDTO()) {
        setIsWorking(true)
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
        <div className="w-full bg-white">
        <div className="w-full flex flex-row h-full">
          <div className="w-full">
            <form onSubmit={handleSubmit}
              className="flex items-center justify-center h-full px-8">
              <div className="modal-dialog">
                <div className="modal-content p-4">
                  <div className="modal-body">
                    <div className="block">
                      <h4 className="m-auto text-center mb-1 font-bold text-lg">Login</h4>
                      {/* <Message v-if="typeof localError === 'string'" :message="localError" :success="false" /> */}
                    </div>
  
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

                  </div>

                  <div className="modal-footer">
                    <div className="text-center">
                        <Button className="w-full" type="submit" isWorking={isWorking} disabled={isValidDTO()}>Login</Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
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

export default connect()(Login)