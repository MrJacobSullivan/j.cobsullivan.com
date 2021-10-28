import { Styled } from './styles'

export default function TextInput({ label, name, id, error, value, onChange }) {
  return (
    <Styled.FormGroup>
      <Styled.InputGroup>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Input type='text' name={name} id={id} value={value} onChange={onChange} />
      </Styled.InputGroup>
      <Styled.Errors>
        <span>{error}</span>
      </Styled.Errors>
    </Styled.FormGroup>
  )
}
