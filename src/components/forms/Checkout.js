import Input from '../shared/Input/Input'
import Button from '../shared/Button/Button'
import { isRequired } from '../../utils'

const Checkout = ({ onSubmit }) => {
    const form = {
        firstName: '',
        lastName: '',
        email: '',
        state: '',
        city: '',
        address: '',
        zip: ''
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
        <div>
            <div>Billing details</div>
            <div className="flex flex-col" style={{ width: '24rem' }}>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="firstName">First name</label>
                    <div className="relative">
                        <Input name="firstName" onBlur={(val) => setFieldValue('firstName', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="lastName">Last name</label>
                    <div className="relative">
                        <Input name="lastName" onBlur={(val) => setFieldValue('lastName', val)} />
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
                    <label className="formFieldLabel" htmlFor="state">State</label>
                    <div className="relative">
                        <Input name="state" onBlur={(val) => setFieldValue('state', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="city">City</label>
                    <div className="relative">
                        <Input name="city" onBlur={(val) => setFieldValue('city', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="address">Address</label>
                    <div className="relative">
                        <Input name="address" onBlur={(val) => setFieldValue('address', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="zip">Zip</label>
                    <div className="relative">
                        <Input name="zip" onBlur={(val) => setFieldValue('zip', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="formField">
                    Shipping method
                </div>
            </div>
            <div className="flex items-center">
                <div className="formField">
                    Payment method
                </div>
            </div>
            <Button className="my-4" onClick={handleSubmit} disabled={isValidDTO()}>Place your order</Button>
        </div>
    )
}

Checkout.propTypes = {

}

export default Checkout