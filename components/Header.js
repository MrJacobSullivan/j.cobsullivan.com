import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'
import ThemeButton from './ThemeButton'
import { routes } from '../config'

const StyledHeader = styled.header`
  ${tw`sticky top-0 z-50 flex w-full h-10 px-5 py-10 rounded dark:bg-gray-8 bg-gray-2`};

  div.title {
    ${tw`flex items-center w-1/2`};

    a {
      ${tw`text-xl font-light transition duration-150`};

      &:hover {
        ${tw`dark:text-violet-3 text-green-5`};
      }
    }
  }

  div.nav {
    ${tw`flex items-center justify-end w-1/2`};

    a {
      ${tw`font-light transition duration-150 cursor-pointer`};

      &:hover {
        ${tw`dark:text-violet-3 text-green-5`};
      }
    }

    a,
    button {
      ${tw`ml-6`};
    }
  }
`

const current = ({ active }) => active && tw`!cursor-default text-red-5 hover:(text-red-5!)`

export default function Header() {
  const { pathname } = useRouter()

  const isCurrent = (route) => (pathname.includes(route) ? 'true' : '')

  return (
    <StyledHeader>
      <div className='title'>
        <Link href='/'>
          <a>Jacob Sullivan</a>
        </Link>
      </div>

      <div className='nav'>
        <nav>
          <Link href='/blog'>
            <a active={isCurrent(routes.blog)} css={current}>
              Blog
            </a>
          </Link>
          <Link href='/work'>
            <a active={isCurrent(routes.work)} css={current}>
              Work
            </a>
          </Link>
        </nav>

        <ThemeButton />
      </div>
    </StyledHeader>
  )
}
