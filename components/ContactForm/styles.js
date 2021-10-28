import tw, { styled } from 'twin.macro'

export const StyledForm = styled.form`
  ${tw`p-2 bg-red-5`};

  div.form-group {
    ${tw`relative bg-green-5 w-full`};

    label {
      ${tw`flex items-center`};

      input {
        ${tw`mb-2`};
      }

      input,
      textarea {
        ${tw`w-4/5 p-1 pl-[1.25%] bg-gray-7 self-stretch`};

        &:focus {
          ${tw`outline-none`};
        }
      }
    }

    div.errors {
      span {
        ${tw``};
      }
    }

    div.characters {
      span {
        ${tw``};
      }
    }

    button {
      ${tw``};
    }
  }
`
