import Header from '../Header'
import Page from '../Page'
import Footer from '../Footer'
import { Screen, Margin } from './styles'

export default function Layout({ children }) {
  return (
    <Screen>
      <Margin>
        <Header />
        <Page>{children}</Page>
        <Footer />
      </Margin>
    </Screen>
  )
}
