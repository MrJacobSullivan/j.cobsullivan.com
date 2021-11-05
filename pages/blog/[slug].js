import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Layout from '../../components/ArticleLayout'
import { components } from '../../components/MDX'
import { getPaths, getFileSource } from '../../utils/mdx'

export default function Post({ code, frontmatter }) {
  const MDX = useMemo(() => getMDXComponent(code), [code])

  return (
    <section>
      <div>
        <h1>{frontmatter.title}</h1>
      </div>

      <article tw='markdown'>
        <MDX components={components} />
      </article>
    </section>
  )
}

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
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
