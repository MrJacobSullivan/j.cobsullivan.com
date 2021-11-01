import TextInput from './TextInput'
import TextAreaInput from './TextAreaInput'
import { FormTitle, SubmitButton, styles } from './styles'
import { useForm } from '../../hooks/useForm'
import schema from '../../validation/contactFormSchema'

const initialValues = { name: '', email: '', message: '' }

// const handleSubmit = async (data) => {
//   try {
//     // api call goes here

//     return true
//   } catch (err) {
//     return false
//   }
// }

export default function ContactForm({ submit }) {
  const { values, errors, disabled, handleChange } = useForm(initialValues, schema)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')

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
    <form css={styles.form} onSubmit={handleSubmit}>
      <FormTitle>Contact</FormTitle>

      <TextInput
        label='Name'
        name='name'
        id='name'
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />

      <TextInput
        label='Email'
        name='email'
        id='email'
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />

      <TextAreaInput
        label='Message'
        name='message'
        id='message'
        value={values.message}
        error={errors.message}
        onChange={handleChange}
      />

      <SubmitButton disabled={disabled}>Submit</SubmitButton>
    </form>
  )
}
