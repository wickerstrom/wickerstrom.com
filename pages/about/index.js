import Layout from '../../components/layout/Layout'
import { ContentfulClient, revalidateValue } from '../../config/config'
import RichTextWrapper from '../../components/common/RichTextWrapper'

export async function getStaticProps() {
  const res = await ContentfulClient.getEntries({ content_type: 'pageContent' })

  return {
    props: {
      about: res.items,
      revalidate: revalidateValue
    }
  }
}

function About({ about }) {
  const { contentText } = about[1].fields;
  return <Layout><div><RichTextWrapper richText={contentText}/> </div></Layout>
}

export default About