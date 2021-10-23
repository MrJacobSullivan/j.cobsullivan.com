import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from '../../config'

import tw, { styled } from 'twin.macro'
import { LinkText } from '../StyledLink'

const Nav = styled.nav(({}) => [tw`flex items-baseline justify-end bg-blue-5`])

export default function Navigation() {
  const { asPath } = useRouter()

  const isCurrent = (route) => asPath.includes(route)

  return (
    <Nav>
      <Link href='/blog'>
        <a>
          <LinkText current={isCurrent(routes.blog)}>Blog</LinkText>
        </a>
      </Link>
      <Link href='/work'>
        <a>
          <LinkText current={isCurrent(routes.work)}>Work</LinkText>
        </a>
      </Link>
    </Nav>
  )
}
