import tw, { styled } from 'twin.macro'

export const LinkText = styled.span(({ current }) => [
  tw`py-1 text-lg transition duration-150`,
  tw`hover:text-green-5`,
  current && tw`cursor-default text-blue-5 hover:text-blue-5`,
])
