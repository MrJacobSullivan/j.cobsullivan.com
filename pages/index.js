import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/work'>
        <a>Work</a>
      </Link>
    </Layout>
  )
}
