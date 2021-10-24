import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'

import tw, { css, styled } from 'twin.macro'

const iconStyles = css`
  ${tw`w-10 h-10 p-2 text-gray-0`};
  ${tw`dark:(text-gray-9)`};
`

const buttonStyles = css`
  ${tw`transition duration-150 rounded bg-blue-4 dark:bg-yellow-4`};

  &:hover {
    ${tw`bg-blue-5 dark:bg-yellow-5`};
  }

  &:active {
    outline: none;
  }
`

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <button css={[buttonStyles]} onClick={toggleTheme}>
      {theme === 'dark' ? <SunIcon css={[iconStyles]} /> : <MoonIcon css={[iconStyles]} />}
    </button>
  )
}
