import Header from '../Header'
import Footer from '../Footer'
import { Styled } from './styles'

export default function Layout({ children }) {
  return (
    <Styled.Screen>
      <Styled.Column>
        <Header />
        {children}
        <Footer />
      </Styled.Column>
    </Styled.Screen>
  )
}
