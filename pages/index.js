import Link from 'next/link'
import Layout from '../components/Layout'

import tw from 'twin.macro'

const Main = tw.div`text-green-5`

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
