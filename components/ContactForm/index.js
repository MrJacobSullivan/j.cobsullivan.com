import { StyledForm } from './styles'
import { useForm } from '../../hooks/useForm'
import schema from '../validation/contactFormSchema'

const initialValues = { name: '', email: '', message: '' }

export default function ContactForm({ submit }) {
  const { values, errors, disabled, handleChange } = useForm(initialValues, schema)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // pack data
      const packedMessage = JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      })

      const result = await submit(packedMessage)
      if (!result) throw new Error(/* error text */)
    } catch (err) {
      // handle failure
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>
          Name<span className='required'>*</span>
          <input type='text' name='name' value={values.name} onChange={handleChange} />
        </label>
        <div className='error'>
          <span>{errors.name}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Email<span className='required'>*</span>
          <input type='email' name='email' value={values.email} onChange={handleChange} />
        </label>
        <div className='error'>
          <span>{errors.email}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Message<span className='required'>*</span>
          <textarea name='message' value={values.message} onChange={handleChange} />
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
