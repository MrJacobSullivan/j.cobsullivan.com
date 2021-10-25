import { meta } from '@/config/meta'

import tw from 'twin.macro'

const styles = {
  container: tw`flex flex-col items-center`,
  structure: tw`w-full items-center flex-col flex h-[5vh] content-center`,
  content: tw`text-sm font-light text-center text-gray-5 dark:text-gray-6`,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer css={styles.container}>
      <div css={styles.structure}>
        <p css={styles.content}>
          &copy; {year} {meta.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
