import Link from 'next/link'
import { getAllFiles } from '../../utils/mdx'

export default function Work({ projects }) {
  return (
    <section>
      <h1>Work</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.filePath}>
            <Link href={`/work/${project.filePath.replace(/\.mdx?$/, '')}`}>
              <a>{project.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function getStaticProps() {
  const projects = getAllFiles('work')

  return { props: { projects } }
}
