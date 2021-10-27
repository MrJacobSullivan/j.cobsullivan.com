import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import * as yup from 'yup'
import schema from '../validation/contactFormSchema'
import { validate } from '../utils/formValidation'

const StyledForm = styled.form``

const initialValues = { name: '', email: '', message: '' }

export default function ContactForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialValues)
  const [disabled, setDisabled] = useState(true)

  const [submitted, setSubmitted] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    validate(name, value, schema, setErrors)
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // pack data

      const result = await submit(/* data */)

      if (result) return setSubmissionSuccess(true)
      throw new Error(/* error text */)
    } catch (err) {
      setSubmissionSuccess(false)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label>
          Name
          <input
            type='text'
            name='name'
            placeholder='required'
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <span className='error'>{errors.name}</span>
      </div>

      <div>
        <label>
          Email
          <input
            type='email'
            name='email'
            placeholder='required'
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <span className='error'>{errors.email}</span>
      </div>

      <div>
        <label>
          Message
          <textarea
            name='message'
            placeholder='required'
            value={values.message}
            onChange={handleChange}
          />
        </label>
        <span className='characters'>{values.message.length}/500 characters</span>
        <span className='error'>{errors.message}</span>
      </div>

      <button>Submit</button>
    </StyledForm>
  )
}
