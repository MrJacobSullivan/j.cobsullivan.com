import tw from 'twin.macro'
import Header from './Header'
import Footer from './Footer'

const styles = {
  screen: tw`flex flex-col items-center justify-center w-screen`,
  column: tw`flex flex-col items-center w-1/2 min-h-screen my-2`,
}

export default function Layout({ children }) {
  return (
    <div css={styles.screen}>
      <div css={styles.column}>
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  )
}
