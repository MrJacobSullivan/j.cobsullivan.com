import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
    </section>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
