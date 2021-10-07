export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticProps2 = async ({ params }) => {
  const [source, frontmatter] = getFileSource('blog', params.slug)

  console.log(source, frontmatter)

  return { props: { ...source, ...frontmatter } }
}
