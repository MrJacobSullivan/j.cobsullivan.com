import Link from 'next/link'
import Layout from '../components/BaseLayout'

import tw, { styled } from 'twin.macro'

const Main = tw.div`text-green-5`

const BlueMain = styled(Main)(() => ({
  '> p': tw`text-xl`,
}))

const RedMain = styled(Main)(({ border, large }) => [
  tw`p-2 transition duration-100 bg-red-2 text-red-8`,
  tw`hover:(bg-green-2 text-green-8 border-green-9 cursor-pointer)`,
  border && tw`border border-red-9`,
  large && tw`p-4 text-xl`,
])

export default function Home() {
  return (
    <RedMain border large>
      <p>Home</p>
    </RedMain>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
