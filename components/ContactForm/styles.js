import tw, { styled } from 'twin.macro'

const FormTitle = styled.h3`
  ${tw`mb-8 text-2xl text-center`};
`

const FormGroup = styled.div`
  ${tw`flex flex-col w-full`};
`

const InputGroup = styled.div`
  ${tw`flex justify-between`};
`

const Label = styled.label`
  ${tw`flex items-center h-10 text-base text-gray-4 text-opacity-60`};
`

const Input = styled.input`
  ${tw`w-4/5 h-10 p-1 pl-3 text-base border rounded-md bg-gray-9 border-gray-7 border-opacity-40`};

  &:focus {
    ${tw`border-opacity-100 outline-none`};
  }
`
const Textarea = styled.textarea`
  ${tw`w-4/5 p-1 py-2 pb-4 pl-3 text-base border rounded-md resize-none bg-gray-9 border-gray-7 border-opacity-40`};

  &:focus {
    ${tw`border-opacity-100 outline-none`};
  }
`

const SpanGroup = styled.div`
  ${tw`flex`};
`

const Errors = styled.div`
  ${tw`h-[2rem] mb-2 w-2/5 ml-[20%]`};

  span {
    ${tw`text-xs text-red-4`};
  }
`

const Characters = styled.div`
  ${tw`flex mb-2 h-[2rem] flex-grow`};

  span {
    ${tw`self-center w-full text-xs text-right text-gray-6`};

    ${({ error }) => error && tw`text-red-4`};
  }
`

const SubmitButton = styled.button`
  ${tw`w-full p-5 mt-4 rounded-md bg-blue-5`};

  ${({ disabled }) => disabled && tw`cursor-default bg-gray-8`};

  &:hover {
    ${({ disabled }) => !disabled && tw`cursor-pointer bg-blue-7 text-blue-0`};
  }

  &:focus-visible {
    ${tw`outline-none bg-blue-7`};
  }
`

const styles = {
  form: tw`px-4 py-2 text-lg transition duration-200 border-l border-r border-gray-8`,
}

export {
  FormTitle,
  FormGroup,
  InputGroup,
  Label,
  Input,
  Textarea,
  SpanGroup,
  Errors,
  Characters,
  SubmitButton,
  styles,
}
