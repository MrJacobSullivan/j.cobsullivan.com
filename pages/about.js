import Link from 'next/link'
import Layout from '../components/Layout'

export default function About() {
  return (
    <section>
      <h1>About</h1>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
