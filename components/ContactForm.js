import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import * as yup from 'yup'
import schema from '../validation/contactFormSchema'
import { validate } from '../utils/formValidation'

const StyledForm = styled.form`
  ${tw``};

  div.form-group {
    ${tw``};

    label {
      ${tw``};

      input {
        ${tw``};
      }
    }

    div.errors {
      span {
        ${tw``};
      }
    }

    div.characters {
      span {
        ${tw``};
      }
    }

    button {
      ${tw``};
    }
  }
`

const initialValues = { name: '', email: '', message: '' }

export default function ContactForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialValues)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

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
      if (!result) throw new Error(/* error text */)
    } catch (err) {
      // handle failure
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className='form-group'>
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
        <div className='error'>
          <span>{errors.name}</span>
        </div>
      </div>

      <div className='form-group'>
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
        <div className='error'>
          <span>{errors.email}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Message
          <textarea
            name='message'
            placeholder='required'
            value={values.message}
            onChange={handleChange}
          />
        </label>
        <div className='characters'>
          <span>{values.message.length}/500 characters</span>
        </div>
        <div className='error'>
          <span>{errors.message}</span>
        </div>
      </div>

      <button disabled={disabled}>Submit</button>
    </StyledForm>
  )
}
