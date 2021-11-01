import {
  FormGroup,
  InputGroup,
  Label,
  Textarea,
  SpanGroup,
  Errors,
  Characters,
} from './styles'

export default function TextAreaInput({
  label,
  name,
  id,
  value,
  error,
  onChange,
  rows = 8,
  maxMessageLength = 500,
}) {
  return (
    <FormGroup>
      <InputGroup>
        <Label htmlFor={id}>{label}</Label>
        <Textarea name={name} id={id} rows={rows} value={value} onChange={onChange} />
      </InputGroup>
      <SpanGroup>
        <Errors>
          <span>{error}</span>
        </Errors>
        <Characters error={value.length > maxMessageLength}>
          <span>
            {value.length}/{maxMessageLength} characters
          </span>
        </Characters>
      </SpanGroup>
    </FormGroup>
  )
}
