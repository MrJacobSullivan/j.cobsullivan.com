import { forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styles } from './styles'

const NavLink = ({ href, children, ...rest }) => {
  const { pathname } = useRouter()
  const isActive = pathname.includes(href)
  console.log(isActive)

  return (
    <Link href={href}>
      <a css={styles.navLink({ isActive })} {...rest}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
