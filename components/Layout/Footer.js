import { meta } from '../../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center'>
      <div className='w-full items-center flex-col flex h-[5vh] content-center'>
        <p className='text-center text-lighter'>
          {meta.name} &copy; {year}
        </p>
      </div>
    </footer>
  )
}
