import Link from 'next/link'
import Navigation from './Navigation'

import tw, { styled } from 'twin.macro'
import { LinkText } from '../StyledLink'

const StyledHeader = styled.header`
  ${tw`sticky top-0 flex w-full bg-gray-0 dark:(bg-gray-9)`};

  div.title {
    ${tw`flex flex-col items-start justify-start h-auto py-8`};
  }

  div.nav {
    ${tw`flex flex-col items-end`}
  }

  div.buttons {
    ${tw`flex flex-col items-end`}
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <div className='title'>
        <Link href='/'>
          <a>
            <LinkText tw='text-2xl'>Jacob Sullivan</LinkText>
          </a>
        </Link>
      </div>

      <div className='nav'>
        <Navigation />
      </div>

      <div className='buttons'></div>
    </StyledHeader>
  )
}
