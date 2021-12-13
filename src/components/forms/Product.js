import { useState } from 'react'
import PropTypes from 'prop-types'
import { isRequired } from '../../utils'
import Input from '../shared/Input/Input'
import Button from '../shared/Button/Button'
import { useRef } from 'react'

const Product = ({ onSubmit }) => {

    const ref = useRef()
    const [file, setFile] = useState()
    const [filename, setFilename] = useState('')
    const [fileType, setFileType] = useState('')
    const [form, setForm] = useState({
        name: '',
        price: '',
        quantity: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidDTO()) {
            const formData = new FormData()
            formData.append('name', form.name)
            formData.append('contentType', fileType)
            formData.append('price', form.price)
            formData.append('image', filename)
            formData.append('quantity', form.quantity)
            formData.append('file', file)
            onSubmit(formData)
        }
    }

    const isValidDTO = () => {
        return isRequired(form.name) &&
        isRequired(form.price) &&
        isRequired(form.quantity) &&
        isRequired(fileType) &&
        isRequired(filename)
    }

    const setFieldValue = (type, value) => {
        setForm({
            ...form,
            [type]: value
        })
    }

    const setBrowse = (e) => {
        e.preventDefault()
        ref.current.click()
    }

    const setImage = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const types = ['png', 'jpg', 'jpeg']
        types.forEach(item => {
          if (file.type && file.type.includes(item)) {
            setFileType(item)
            return
          }
        })
        setFilename(file.name)
        setFile(file)
    }

    return (
        <div className="" style={{ width: '24rem' }}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-col m-auto">
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="name">Name</label>
                        <div className="relative">
                            <Input name="name" onBlur={(val) => setFieldValue('name', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="price">Price</label>
                        <div className="relative">
                            <Input name="price" onBlur={(val) => setFieldValue('price', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="quantity">Quantity</label>
                        <div className="relative">
                            <Input name="quantity" onBlur={(val) => setFieldValue('quantity', val)} />
                        </div>
                        <div className="formFieldTip"></div>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="name">Product image</label>
                        <div className="relative">
                        <input
                            ref={ref}
                            type="file"
                            name="image"
                            className="custom-file-input"
                            style={{
                                visibilty: 'hidden',
                                opacity: 0,
                                height: 0,
                                width: 0
                            }}
                            onChange={setImage}
                        />
                        <Button variant="primary" icon="attachment" onClick={setBrowse}>Browse...</Button>
                        </div>
                        <div className="formFieldTip">{ filename }</div>
                    </div>

                    <Button type="type" className="mt-4">Add</Button>
                </div>
            </form>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

export default Product