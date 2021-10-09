import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className='sticky top-0 flex w-full'>
      <div className='flex flex-col items-start justify-between w-1/2 h-auto py-2'>
        <Link href='/'>
          <a className='mb-2 bg-red-5'>
            <h1 className='text-3xl'>Jacob Sullivan</h1>
          </a>
        </Link>
        <h2 className='text-lg font-thin'>Software Engineer</h2>
      </div>

      <div className='flex flex-col items-end w-1/2 bg-violet-3'>
        <Navigation />
      </div>
    </header>
  )
}
