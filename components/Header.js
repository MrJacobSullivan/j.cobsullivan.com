import Link from 'next/link'
import dynamic from 'next/dynamic'

import Navigation from './Navigation'

const SwitchButton = dynamic(() => import('./SwitchButton'), { ssr: false })

export default function Header() {
  return (
    <header className='sticky top-0 flex w-full border-b-[1px] border-gray-9 bg-gray-0 dark:bg-gray-9 dark:text-gray-0 dark:border-gray-0'>
      <div className='flex flex-col items-start justify-start w-1/2 h-auto py-8'>
        <Link href='/'>
          <a className='mb-4'>
            <h1 className='text-3xl font-semibold'>Jacob Sullivan</h1>
          </a>
        </Link>
        <h2 className='text-lg font-light'>Software Engineer</h2>
      </div>

      <div className='flex flex-col items-end w-1/2'>
        <Navigation />
        <SwitchButton />
      </div>
    </header>
  )
}
