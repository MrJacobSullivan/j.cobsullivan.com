import tw, { css } from 'twin.macro'
import { useTheme } from 'next-themes'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/outline'

const Button = tw.button`flex items-center content-center w-10 h-10 p-1 border-2 border-opacity-0 rounded-md bg-gray-2 border-gray-4 dark:bg-gray-8 dark:border-gray-7 hover:border-opacity-100 dark:border-opacity-0`

export default function SwitchButton() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!theme) return 'loading'

  return <Button onClick={handleClick}>{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</Button>
}
