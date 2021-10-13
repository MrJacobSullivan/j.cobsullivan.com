import tw, { css } from 'twin.macro'
import { useTheme } from 'next-themes'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/outline'

const Button = tw.button`w-10 h-10 bg-gray-2 border-gray-4 dark:bg-gray-8 dark:border-gray-7 border-2 border-opacity-0 rounded-md hover:border-opacity-100 dark:border-opacity-0 flex items-center content-center p-1`

export default function SwitchButton() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!theme) return 'loading'

  return <Button onClick={handleClick}>{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</Button>
}
