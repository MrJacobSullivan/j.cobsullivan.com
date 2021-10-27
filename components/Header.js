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
      ${tw`font-light transition duration-150`};

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

export default function Header() {
  const { asPath } = useRouter()

  const isCurrent = (route) => asPath.includes(route).toString()

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
            <a current={isCurrent(routes.blog)}>Blog</a>
          </Link>
          <Link href='/work'>
            <a current={isCurrent(routes.blog)}>Work</a>
          </Link>
        </nav>

        <ThemeButton />
      </div>
    </StyledHeader>
  )
}
