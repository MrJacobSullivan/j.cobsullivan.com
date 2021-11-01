import tw, { styled } from 'twin.macro'

const Footer = styled.footer`
  ${tw`flex flex-col items-center justify-between w-full py-5`};
`

const Container = styled.div`
  ${tw`flex flex-col items-center content-center w-full mb-6`};
`

const Copyright = styled.p`
  ${tw`text-sm font-light text-center text-gray-5 dark:text-gray-6`};
`

export { Footer, Container, Copyright }
