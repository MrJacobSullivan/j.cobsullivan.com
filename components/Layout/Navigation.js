import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from '../../config'

export default function Navigation() {
  const { asPath } = useRouter()

  const linkStyle = (route) => {
    return asPath.includes(route) ? 'current' : 'py-1 text-lg'
  }

  return (
    <nav className='flex flex-col items-start justify-between h-full py-8'>
      <Link href='/about'>
        <a className={linkStyle(routes.about)}>About</a>
      </Link>
      <Link href='/blog'>
        <a className={linkStyle(routes.blog)}>Blog</a>
      </Link>
      <Link href='/work'>
        <a className={linkStyle(routes.work)}>Work</a>
      </Link>
    </nav>
  )
}
