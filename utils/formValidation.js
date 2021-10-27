import * as yup from 'yup'

export const validate = async (name, value, schema, setErrors) => {
  try {
    const response = await yup.reach(schema, name).validate(value)
    setErrors((prev) => ({ ...prev, [name]: '' }))
    return response
  } catch (err) {
    setErrors((prev) => ({ ...prev, [name]: err.errors[0] }))
    return false
  }
}
