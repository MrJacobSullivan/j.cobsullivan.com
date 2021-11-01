import Header from '../Header'
import Footer from '../Footer'
import { Screen, Margin } from './styles'

export default function Layout({ children }) {
  return (
    <Screen>
      <Margin>
        <Header />
        {children}
        <Footer />
      </Margin>
    </Screen>
  )
}
