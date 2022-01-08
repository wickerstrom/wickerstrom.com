import Head from 'next/head'
import Layout from '../components/layout/Layout'
import RichTextWrapper from '../components/common/RichTextWrapper'
import { ContentfulClient, revalidateValue } from '../config/config'

export async function getStaticProps() {
  const res = await ContentfulClient.getEntries({ content_type: 'pageContent' })

  return {
    props: {
      landingPage: res.items,
      revalidate: revalidateValue
    }
  }
}

export default function Home({ landingPage })  {

  const { contentText } = landingPage[0].fields;

  return (
    <div>
      <Head>
        <title>Wickerstrom Design & Development</title>
        <meta name="Wickerstrom Design & Development" />
      </Head>
      <Layout>
        <h1>Wickerstrom Design & Development</h1>
        <RichTextWrapper richText={contentText} />

      </Layout>
    </div>
  )
}
