import Head from 'next/head'
import { getPaths, getFileSource } from '../../utils/mdx'
import { MDXRemote } from 'next-mdx-remote'

import MDXLink from '../../components/MDXLink'

const components = {
  a: MDXLink,
  Head,
}

export default function Post({ source, frontmatter }) {
  return (
    <section>
      <div>
        <h1>{frontmatter.title}</h1>
      </div>
      <MDXRemote {...source} components={components} />
    </section>
  )
}

export const getStaticPaths = async () => {
  const paths = getPaths('blog')

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const source = await getFileSource('blog', params.slug)

  return { props: { ...source } }
}
