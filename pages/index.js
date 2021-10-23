import Link from 'next/link'
import Layout from '../components/Layout'

import tw, { styled } from 'twin.macro'

const Main = tw.div`text-green-5`

const BlueMain = styled(Main)(() => ({
  '> p': tw`text-xl`,
}))

const RedMain = styled(Main)(({ open }) => [
  tw`bg-red-2 text-red-8`,
  open && tw`border border-red-9`,
])

export default function Home() {
  return (
    <Main>
      <p>Home</p>
    </Main>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
