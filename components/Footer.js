import tw, { styled } from 'twin.macro'
import Section from './Section'
import Container from './Container'
import ContactForm from './ContactForm'
import { meta } from '../config'

const StyledFooter = styled.footer`
  ${tw`flex flex-col items-center justify-between w-full py-5`};

  div.contact {
    ${tw`w-2/3 mt-8 mb-32`};
  }

  div.copyright {
    ${tw`flex flex-col items-center content-center w-full mb-6`};

    p {
      ${tw`text-sm font-light text-center text-gray-5 dark:text-gray-6`};
    }
  }
`

export default function Footer() {
  const year = new Date().getFullYear()

  const handleSubmit = async (data) => {
    try {
      // api call goes here

      return true
    } catch (err) {
      return false
    }
  }

  return (
    <StyledFooter>
      <div className='contact'>
        <ContactForm submit={handleSubmit} />
      </div>

      <div className='copyright'>
        <p>
          &copy; {year} {meta.name}. All rights reserved.
        </p>
      </div>
    </StyledFooter>
  )
}
