import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from '../config'

export default function Navigation() {
  const { asPath } = useRouter()

  const handleCurrentPath = (route) => {
    return asPath.includes(route) ? 'current' : ''
  }

  return (
    <nav className='flex flex-col items-start justify-between h-full py-2 bg-green-2'>
      <Link href='/about'>
        <a className={handleCurrentPath(routes.about)}>About</a>
      </Link>
      <Link href='/blog'>
        <a className={handleCurrentPath(routes.blog)}>Blog</a>
      </Link>
      <Link href='/work'>
        <a className={handleCurrentPath(routes.work)}>Work</a>
      </Link>
    </nav>
  )
}
