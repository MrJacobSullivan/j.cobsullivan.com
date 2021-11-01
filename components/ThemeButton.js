import { useState, useEffect } from 'react'

import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import tw from 'twin.macro'
import { useIsMounted } from '../hooks/useIsMounted'
import { useThemeToggle } from '../hooks/useThemeToggle'

const styles = {
  button: tw`transition duration-150 rounded bg-blue-4 dark:(bg-yellow-4) hover:(bg-blue-5) dark:hover:(bg-yellow-5) active:(outline-none) ml-6`,
  icon: tw`w-10 h-10 p-2 text-gray-0 dark:(text-gray-9)`,
}

export default function ThemeButton() {
  const [mounted] = useIsMounted()
  const [theme, toggleTheme] = useThemeToggle()

  if (!mounted) return null

  return (
    <button css={styles.button} onClick={toggleTheme}>
      {theme === 'dark' ? <SunIcon css={styles.icon} /> : <MoonIcon css={styles.icon} />}
    </button>
  )
}
