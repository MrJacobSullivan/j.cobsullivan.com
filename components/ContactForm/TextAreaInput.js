import { Styled } from './styles'

export default function TextAreaInput({
  label,
  name,
  id,
  error,
  value,
  onChange,
  rows = 8,
  maxMessageLength = 500,
}) {
  return (
    <Styled.FormGroup>
      <Styled.InputGroup>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Textarea name={name} id={id} rows={rows} value={value} onChange={onChange} />
      </Styled.InputGroup>
      <Styled.SpanGroup>
        <Styled.Errors>
          <span>{error}</span>
        </Styled.Errors>
        <Styled.Characters error={value.length > maxMessageLength}>
          <span>{value.length}/500 characters</span>
        </Styled.Characters>
      </Styled.SpanGroup>
    </Styled.FormGroup>
  )
}
