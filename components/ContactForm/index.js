import { Styled } from './styles'
import { useForm } from '../../hooks/useForm'
import schema from '../../validation/contactFormSchema'

const initialValues = { name: '', email: '', message: '' }

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
    <Styled.Form onSubmit={handleSubmit}>
      <h3>Contact</h3>

      <Styled.FormGroup>
        <Styled.InputGroup>
          <Styled.Label htmlFor='name'>Name</Styled.Label>
          <Styled.Input
            type='text'
            name='name'
            id='name'
            value={values.name}
            onChange={handleChange}
          />
        </Styled.InputGroup>
        <Styled.Errors>
          <span>{errors.name}</span>
        </Styled.Errors>
      </Styled.FormGroup>

      <Styled.FormGroup>
        <Styled.InputGroup>
          <Styled.Label htmlFor='email'>Email</Styled.Label>
          <Styled.Input
            type='email'
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
          />
        </Styled.InputGroup>
        <Styled.Errors>
          <span>{errors.email}</span>
        </Styled.Errors>
      </Styled.FormGroup>

      <Styled.FormGroup>
        <Styled.InputGroup>
          <Styled.Label htmlFor='message'>Message</Styled.Label>
          <Styled.Textarea
            name='message'
            id='message'
            rows={8}
            value={values.message}
            onChange={handleChange}
          />
        </Styled.InputGroup>
        <Styled.SpanGroup>
          <Styled.Errors>
            <span>{errors.message}</span>
          </Styled.Errors>
          <Styled.Characters error={values.message.length > 500}>
            <span>{values.message.length}/500 characters</span>
          </Styled.Characters>
        </Styled.SpanGroup>
      </Styled.FormGroup>

      <Styled.SubmitButton disabled={disabled}>Submit</Styled.SubmitButton>
    </Styled.Form>
  )
}
