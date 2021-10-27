import tw, { styled } from 'twin.macro'
import Section from './Section'
import Container from './Container'
import ContactForm from './ContactForm'
import { meta } from '../config'

const StyledFooter = styled.footer`
  ${tw`flex flex-col justify-between w-full p-5`};

  div.information {
    ${tw`flex mb-8`};

    div.links {
      ${tw`w-1/2`};
    }

    div.contact {
      ${tw`w-1/2`};
    }
  }

  div.copyright {
    ${tw`flex flex-col items-center content-center w-full`};

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
      <div className='information'>
        <div className='links'>
          <h3>Links</h3>
        </div>

        <div className='contact'>
          <h3>Get In Contact</h3>

          <ContactForm submit={handleSubmit} />
        </div>
      </div>

      <div className='copyright'>
        <p>
          &copy; {year} {meta.name}. All rights reserved.
        </p>
      </div>
    </StyledFooter>
  )
}
