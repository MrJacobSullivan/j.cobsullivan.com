import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

// point to ~/content/[folder] <- either blog/ or work/
const deriveContentPath = (folder) => {
  return path.join(process.cwd(), `content/${folder}`)
}

// array of files in folder from deriveContentPath
const deriveFilePaths = (folder) => {
  const contentPath = deriveContentPath(folder)
  return fs.readdirSync(contentPath).filter((path) => /\.mdx?$/.test(path))
}

// index getStaticProps
export const getAllFiles = (folder) => {
  const contentPath = deriveContentPath(folder)
  const filePaths = deriveFilePaths(folder)

  return filePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(contentPath, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })
}

// [slug] getStaticPaths
export const getPaths = (folder) => {
  return deriveFilePaths(folder)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))
}

// [slug] getStaticProps
export const getFileSource = async (folder, slug) => {
  const filePath = path.join(deriveContentPath(folder), `${slug}.mdx`)
  const source = fs.readFileSync(filePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return { source: mdxSource, frontmatter: data }
}
