import Layout from '@/components/BaseLayout'

import tw from 'twin.macro'

const styles = {
  container: tw``,
}

export default function Home() {
  return (
    <div css={styles.container}>
      <p>Home</p>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
