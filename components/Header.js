import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeButton from './ThemeButton'
import { routes } from '@/config/routes'

import tw from 'twin.macro'

const styles = {
  header: tw``,
  structure: tw``,
  title: tw``,
  subtitle: tw``,
  nav: tw``,
  navLink: ({ current }) => [tw``, current && tw``],
}

export default function Header() {
  const { asPath } = useRouter()

  const isCurrent = (route) => asPath.includes(route)

  return (
    <header css={styles.header}>
      <div css={styles.structure}>
        <Link href='/'>
          <a css={styles.title}>Jacob Sullivan</a>
        </Link>

        <h2 css={styles.subtitle}>Software Engineer</h2>
      </div>

      <div css={styles.structure}>
        <nav css={styles.nav}>
          <Link href='/blog'>
            <a css={styles.navLink({ current: isCurrent(routes.blog) })}>Blog</a>
          </Link>
          <Link href='/work'>
            <a css={styles.navLink({ current: isCurrent(routes.work) })}>Work</a>
          </Link>
        </nav>

        <ThemeButton />
      </div>
    </header>
  )
}
