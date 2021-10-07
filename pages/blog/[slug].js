import Head from 'next/head'
import { getPaths, getFileSource } from '../../utils/mdx'
import { MDXRemote } from 'next-mdx-remote'

import Layout from '../../components/Layout'
import MDXLink from '../../components/MDXLink'

const components = {
  a: MDXLink,
  Head,
}

export default function Post({ source, frontmatter }) {
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
      </div>
      <MDXRemote {...source} components={components} />
    </Layout>
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
