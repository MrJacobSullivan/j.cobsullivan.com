import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        <Link href='/work'>
          <a>Work</a>
        </Link>
      </header>
      {children}
    </div>
  )
}
