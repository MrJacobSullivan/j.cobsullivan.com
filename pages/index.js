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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident possimus
          laboriosam, ratione blanditiis voluptatibus doloribus. Deserunt eos delectus modi nesciunt
          voluptatem cum iste ipsa aut! Non in tempore assumenda. Tempora nemo quo non voluptate
          consequuntur perspiciatis distinctio quaerat ipsa? Esse ratione minima dolore dolor
          nesciunt culpa sunt, sapiente et facilis. Magni corporis cum tempore libero vero officia,
          ducimus mollitia. Sunt harum cupiditate, eum iusto, dolorum officia recusandae architecto
          eos distinctio exercitationem, quas modi hic consequatur nemo inventore eius praesentium
          totam expedita suscipit! Minima unde nostrum nisi, repellat sequi temporibus. Corrupti
          dolores consequatur doloribus voluptate maxime pariatur nostrum laudantium sit ut? Sequi
          vel rem dolorem voluptatem adipisci hic necessitatibus exercitationem deserunt optio
          iusto! Ipsa voluptas deleniti deserunt ipsum. Porro, a! Itaque voluptates sapiente quis
          consequuntur laudantium, error alias, quasi omnis, quos quidem quibusdam explicabo quo
          consectetur iste asperiores nesciunt? Repudiandae fuga ea aliquam porro omnis, quo odio
          cumque sed totam. Perspiciatis sunt delectus unde porro fuga consequuntur voluptatem vero
          dignissimos, repellat qui ipsam dolorum obcaecati inventore hic vitae magnam voluptates
          modi. Maxime iure velit animi perferendis aspernatur nisi aliquid repudiandae. Alias
          facilis, optio voluptatem laborum exercitationem quasi tenetur nihil vitae atque itaque!
          Nisi odit quis assumenda, in explicabo quae, mollitia totam qui, iure optio incidunt earum
          quasi eveniet laudantium voluptatibus. Vitae eius minima facere ducimus ab ipsa
          consectetur nihil et dicta atque. Aliquam et ea accusamus sed nam tempora totam, eum
          molestias quae perspiciatis optio rerum, reprehenderit, accusantium a! Molestiae. Magni
          laboriosam, officia ducimus eum similique quaerat fuga! Quasi enim illo cupiditate minima
          harum sit laudantium ipsa et facilis possimus sapiente inventore alias distinctio libero
          vero ab totam, rem voluptatibus? Impedit assumenda quam repellendus autem iusto incidunt
          totam saepe molestiae, possimus, consectetur amet. Voluptatibus at distinctio, dicta ad
          eaque voluptate impedit molestias quasi deserunt harum quidem natus facere cum amet. Eum
          qui accusamus laborum expedita commodi, fugit sed quam sit culpa officiis, cumque eos.
          Voluptatem recusandae voluptate quisquam at unde ducimus velit atque adipisci? Nesciunt
          incidunt doloribus reprehenderit commodi doloremque. Modi, deserunt ab magni odit neque
          obcaecati possimus labore porro reiciendis placeat repudiandae quis officia molestias
          aliquid doloribus aliquam quaerat, quasi voluptatum laboriosam facere, qui minus nemo
          harum. Autem, laborum? Voluptate, nesciunt modi placeat incidunt quo culpa repudiandae
          ipsa itaque quae id saepe iusto distinctio harum iure fugiat blanditiis et voluptatum
          recusandae? Veritatis natus a aliquid aperiam! Rem, vitae doloremque? Error quo aperiam
          aut autem odio dolor, dolorem inventore vitae excepturi culpa non quam accusantium
          repudiandae consectetur esse molestias hic ducimus et a quaerat! Delectus laborum quisquam
          labore eligendi eos! Reprehenderit soluta nihil molestiae, natus consectetur repellendus
          harum totam cum rem quibusdam fugit pariatur assumenda voluptas nisi excepturi et
          consequatur quos obcaecati vero autem corporis, magni illum repudiandae? Enim, doloribus?
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
