import { Footer as StyledFooter, Container, Copyright } from './styles'
import { meta } from '../../config'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <StyledFooter>
      <Container>
        <Copyright>
          &copy; {year} {meta.name}. All rights reserved.
        </Copyright>
      </Container>
    </StyledFooter>
  )
}

export default Footer
