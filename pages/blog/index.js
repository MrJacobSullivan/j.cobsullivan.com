import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllFiles } from '../../utils/mdx'

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = getAllFiles('blog')

  return { props: { posts } }
}
