import posts from '../../data/posts.json'
import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <ul>
        {posts.posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.slug}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
