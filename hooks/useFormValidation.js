import { useState, useEffect } from 'react'
import * as yup from 'yup'

export const useFormValidation = (values, schema) => {
  const [passesAll, setPassesAll] = useState(false)

  useEffect(() => {
    schema.isValid(values).then((valid) => setPassesAll(() => !valid))
  }, [values, schema])

  const validate = async (name, value, setErrors) => {
    try {
      const response = await yup.reach(schema, name).validate(value)
      setErrors((prev) => ({ ...prev, [name]: '' }))
      return response
    } catch (err) {
      setErrors((prev) => ({ ...prev, [name]: err.errors[0] }))
      return false
    }
  }

  return [passesAll, validate]
}
