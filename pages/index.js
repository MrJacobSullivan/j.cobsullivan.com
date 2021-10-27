import Layout from '../components/BaseLayout'
import Page from '../components/Page'
import Section from '../components/Section'

export default function Home() {
  return (
    <Page>
      <Section>
        <h1>Jacob Sullivan</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae pariatur
          laboriosam obcaecati perspiciatis saepe ut. In ad explicabo ratione corporis optio, iure
          iusto! Mollitia natus deserunt cum aperiam dolorem.
        </p>
      </Section>

      <Section>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, impedit vel. Voluptatibus
          voluptas quisquam alias deleniti, laborum dolores pariatur nobis temporibus eveniet in
          cupiditate beatae vero nostrum architecto. Aliquam, recusandae?
        </p>
      </Section>

      <Section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </Section>
    </Page>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
