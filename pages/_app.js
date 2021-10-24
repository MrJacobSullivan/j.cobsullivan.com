import { ThemeProvider } from 'next-themes'
import GlobalStyles from '../components/GlobalStyles'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
