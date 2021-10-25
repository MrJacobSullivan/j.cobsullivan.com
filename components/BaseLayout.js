import Header from '@/components/Header'
import Footer from '@/components/Footer'

import tw from 'twin.macro'

const styles = {
  container: tw`flex flex-col items-center justify-center w-screen`,
  structure: tw`flex flex-col items-center w-1/2 min-h-screen`,
  content: tw`flex-grow w-4/5 py-5`,
}

export default function Layout({ children }) {
  return (
    <div css={styles.container}>
      <div css={styles.structure}>
        <Header />
        <main css={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
