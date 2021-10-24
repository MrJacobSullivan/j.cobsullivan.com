import { meta } from '../config'
import tw from 'twin.macro'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer tw='flex flex-col items-center'>
      <div tw='w-full items-center flex-col flex h-[5vh] content-center'>
        <p tw='py-4 text-sm text-center text-gray-6 font-light'>
          &copy; {year} {meta.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
