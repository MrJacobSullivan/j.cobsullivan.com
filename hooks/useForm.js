import { useState } from 'react'
import { useFormValidation } from './useFormValidation'

export const useForm = (initialValues, schema) => {
  const [values, setValues] = useState(initialValues)

  const [errors, setErrors] = useState(() => {
    // creates a new object from keys of initialValues
    // with value of an empty string
    // i.e. { key1: '', key2: '' }
    const keys = Object.keys(initialValues)
    return Object.fromEntries(keys.map((key) => [key, '']))
  })

  const [disabled, validate] = useFormValidation(values, schema)

  const handleChange = (e) => {
    const { name, value } = e.target
    validate(name, value, setErrors)
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  return { values, errors, disabled, handleChange }
}
