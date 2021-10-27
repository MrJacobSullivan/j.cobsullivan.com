import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import Section from './Section'
import Container from './Container'
import { meta } from '../config'

const StyledFooter = styled.footer`
  ${tw`flex flex-col justify-between w-full p-5 bg-red-5`};

  div.information {
    ${tw`flex mb-2 bg-blue-5`};

    div.links {
      ${tw`w-1/2 bg-orange-5`};
    }

    div.contact {
      ${tw`w-1/2 bg-violet-5`};
    }
  }

  div.copyright {
    ${tw`flex flex-col items-center content-center w-full bg-green-5`};

    p {
      ${tw`text-sm font-light text-center text-gray-5 dark:text-gray-6`};
    }
  }
`

export default function Footer() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [disabled, setDisabled] = useState(true)

  const year = new Date().getFullYear()

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
  }

  return (
    <StyledFooter>
      <div className='information'>
        <div className='links'>
          <h3>Links</h3>
        </div>

        <div className='contact'>
          <h3>Get In Contact</h3>
          <form>
            <div>
              <label>
                Name
                <input
                  type='text'
                  name='name'
                  placeholder='required'
                  value={values.name}
                  onChange={handleChange}
                />
              </label>
              <span className='error'>{errors.name}</span>
            </div>

            <div>
              <label>
                Email
                <input
                  type='email'
                  name='email'
                  placeholder='required'
                  value={values.email}
                  onChange={handleChange}
                />
              </label>
              <span className='error'>{errors.email}</span>
            </div>

            <div>
              <label>
                Message
                <textarea
                  name='message'
                  placeholder='required'
                  value={values.message}
                  onChange={handleChange}
                />
              </label>
              <span className='error'>{errors.message}</span>
            </div>

            <button>Submit</button>
          </form>
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
