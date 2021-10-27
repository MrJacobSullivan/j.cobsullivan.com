import Link from 'next/link'
import { useRouter } from 'next/router'
import tw from 'twin.macro'
import ThemeButton from './ThemeButton'
import { routes } from '../config'

export default function Header() {
  const { asPath } = useRouter()

  const isCurrent = (route) => asPath.includes(route)

  return (
    <header>
      <div>
        <Link href='/'>
          <a>Jacob Sullivan</a>
        </Link>
      </div>

      <div>
        <nav>
          <Link href='/blog'>
            <a current={isCurrent(routes.blog)}>Blog</a>
          </Link>
          <Link href='/work'>
            <a>Work</a>
          </Link>
        </nav>

        <ThemeButton />
      </div>
    </header>
  )
}
