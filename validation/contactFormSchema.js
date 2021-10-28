import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Enter a valid email address.').required('Email is required.'),
  message: yup
    .string()
    .max(500, '' /* error message handled in UI */)
    .required('Message is required'),
})
