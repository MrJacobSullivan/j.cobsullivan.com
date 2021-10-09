import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from '../config'

export default function Navigation() {
  const { asPath } = useRouter()

  const handleCurrentPath = (route) => {
    const home = () => (asPath === routes.home && !route ? 'current' : '')
    return asPath.includes(route) ? 'current' : home()
  }

  return (
    <nav>
      <Link href='/'>
        <a className={handleCurrentPath()}>Home</a>
      </Link>
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
