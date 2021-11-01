import Link from 'next/link'
import {
  Header as StyledHeader,
  TitleContainer,
  NavContainer,
  Nav,
  styles,
} from './styles'
import NavLink from './NavLink'
import ThemeButton from '../ThemeButton'
import { routes } from '../../config'

const Header = () => {
  // TODO: pass current to style logic - current implemented twice - once in current() function in this file and once in ./styles.js
  return (
    <StyledHeader>
      <TitleContainer>
        <Link href='/'>
          <a css={styles.title}>Jacob Sullivan</a>
        </Link>
      </TitleContainer>

      <NavContainer>
        <Nav>
          <NavLink href={routes.blog}>Blog</NavLink>
          <NavLink href={routes.work}>Work</NavLink>
        </Nav>

        <ThemeButton />
      </NavContainer>
    </StyledHeader>
  )
}

export default Header
