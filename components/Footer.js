import tw from 'twin.macro'
import Section from './Section'
import Container from './Container'
import { meta } from '../config'

const styles = {
  footer: tw`flex flex-col items-center w-full bg-red-5`,
  div: tw`w-full items-center flex-col flex h-[5vh] content-center`,
  copyright: tw`text-sm font-light text-center text-gray-5 dark:text-gray-6`,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer css={styles.footer}>
      <Section>
        <Container tw='w-1/2'>Links</Container>

        <Container tw='w-1/2'>Contact</Container>
      </Section>

      <Section>
        <Container tw='h-[5vh]'>
          <p css={styles.copyright}>
            &copy; {year} {meta.name}. All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  )
}
