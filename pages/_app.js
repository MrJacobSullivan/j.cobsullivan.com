import { ThemeProvider } from 'next-themes'
import GlobalStyles from '../theme/GlobalStyles'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider attribute='class'>
      {getLayout(
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  )
}
