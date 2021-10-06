import Link from 'next/link'
import { getAllPosts } from '../../utils/mdx'

export default function Blog({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`blog/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}
