import Input from '../shared/Input/Input'
import Button from '../shared/Button/Button'
import { isRequired } from '../../utils'

const Checkout = ({ onSubmit }) => {
    const form = {
        shippingAddress: {
            state: '',
            city: '',
            street: '',
            zip: '',
        },
        billingAddress: {
            state: '',
            city: '',
            street: '',
            zip: '',
        },
        payment: {
            cardNumber: '',
            expiration: '',
            securityCode: ''
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidDTO()) {
            onSubmit(form)
        }
    }

    const isValidDTO = () => {
        return isRequired(form.shippingAddress.street) &&
        isRequired(form.billingAddress.street)
    }

    const setFieldValueWithKey = (key, type, value) => {
        form[key][type] = value
    }

    return (
        <div>
            <div className="text-13">Billing address</div>
            <div className="flex flex-col" style={{ width: '24rem' }}>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="street">Street</label>
                    <div className="relative">
                        <Input name="street" onBlur={(val) => setFieldValueWithKey('billingAddress', 'street', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="city">City</label>
                    <div className="relative">
                        <Input name="city" onBlur={(val) => setFieldValueWithKey('billingAddress', 'city', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="state">State</label>
                    <div className="relative">
                        <Input name="state" onBlur={(val) => setFieldValueWithKey('billingAddress', 'state', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="zip">Zip</label>
                    <div className="relative">
                        <Input name="zip" onBlur={(val) => setFieldValueWithKey('billingAddress', 'zip', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
            </div>

            <div className="mt-4 text-13">Shipping address</div>
            <div className="flex flex-col" style={{ width: '24rem' }}>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="street">Street</label>
                    <div className="relative">
                        <Input name="street" onBlur={(val) => setFieldValueWithKey('shippingAddress', 'street', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="city">City</label>
                    <div className="relative">
                        <Input name="city" onBlur={(val) => setFieldValueWithKey('shippingAddress', 'city', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="state">State</label>
                    <div className="relative">
                        <Input name="state" onBlur={(val) => setFieldValueWithKey('shippingAddress', 'state', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="zip">Zip</label>
                    <div className="relative">
                        <Input name="zip" onBlur={(val) => setFieldValueWithKey('shippingAddress', 'zip', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
            </div>

            <div className="mt-4 text-13">Payment method</div>
            <div className="flex flex-col" style={{ width: '24rem' }}>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="cardNumber">Card number</label>
                    <div className="relative">
                        <Input name="cardNumber" onBlur={(val) => setFieldValueWithKey('payment', 'cardNumber', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="expireDate">Expire date</label>
                    <div className="relative">
                        <Input name="expireDate" onBlur={(val) => setFieldValueWithKey('payment', 'expiration', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="state">CVV</label>
                    <div className="relative">
                        <Input name="cvv" onBlur={(val) => setFieldValueWithKey('payment', 'securityCode', val)} />
                    </div>
                    <div className="formFieldTip"></div>
                </div>
            </div>

            <Button className="my-4" onClick={handleSubmit} disabled={isValidDTO()}>Place your order</Button>
        </div>
    )
}

Checkout.propTypes = {

}

export default Checkout