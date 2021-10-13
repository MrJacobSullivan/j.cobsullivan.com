import GlobalStyles from '../components/GlobalStyles'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  )
}

export default App
