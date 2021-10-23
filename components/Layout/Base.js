import Header from './Header'
import Footer from './Footer'

import tw, { styled } from 'twin.macro'

const Screen = tw.div`flex flex-col items-center justify-center w-screen`

const Content = tw.div`flex flex-col items-center w-1/2 min-h-screen`

export default function Layout({ children }) {
  return (
    <Screen>
      <Content>
        <Header />
        <main tw='flex-grow w-4/5 py-5'>{children}</main>
        <Footer />
      </Content>
    </Screen>
  )
}
