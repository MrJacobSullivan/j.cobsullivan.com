import { meta } from '../../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center'>
      <div className='w-full items-center flex-col flex h-[5vh] content-center'>
        <p className='text-sm text-center text-thin text-gray-6'>
          &copy; {year} {meta.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
