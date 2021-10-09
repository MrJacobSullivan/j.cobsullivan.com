import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className='sticky top-0 flex items-start px-2'>
      <div className='flex flex-col items-center content-around w-1/2 h-auto'>
        <Link href='/'>
          <a>
            <h1>Jacob Sullivan</h1>
          </a>
        </Link>
        <h2>Software Engineer</h2>
      </div>

      <div>
        <Navigation />
      </div>
    </header>
  )
}
