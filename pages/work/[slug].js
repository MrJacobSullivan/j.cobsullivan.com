import Head from 'next/head'
import { getPaths, getFileSource } from '../../utils/mdx'
import { MDXRemote } from 'next-mdx-remote'

import Layout from '../../components/Layout'
import MDXLink from '../../components/MDXLink'

const components = {
  a: MDXLink,
  Head,
}

export default function Project({ source, frontmatter }) {
  return (
    <section>
      <div>
        <h1>{frontmatter.title}</h1>
      </div>
      <MDXRemote {...source} components={components} />
    </section>
  )
}

Project.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export const getStaticPaths = async () => {
  const paths = getPaths('work')

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const source = await getFileSource('work', params.slug)

  return { props: { ...source } }
}