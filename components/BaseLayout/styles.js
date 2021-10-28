import tw, { styled } from 'twin.macro'

const Screen = styled.form`
  ${tw`flex flex-col items-center justify-center w-screen`};
`

const Column = styled.div`
  ${tw`flex flex-col items-center w-1/2 min-h-screen`};
`

export const Styled = {
  Screen,
  Column,
}
