import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Enter a valid email address.').required('Email is required.'),
  message: yup
    .string()
    .required('Message is required')
    .max(500, 'Message cannot be longer than 500 characters'),
})
