import { FormGroup, InputGroup, Label, Input, Errors } from './styles'

export default function TextInput({ label, name, id, error, value, onChange }) {
  return (
    <FormGroup>
      <InputGroup>
        <Label htmlFor={id}>{label}</Label>
        <Input type='text' name={name} id={id} value={value} onChange={onChange} />
      </InputGroup>
      <Errors>
        <span>{error}</span>
      </Errors>
    </FormGroup>
  )
}
