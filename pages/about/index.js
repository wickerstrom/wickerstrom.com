import Layout from '../../components/layout/Layout'
import { ContentfulClient, revalidateValue } from '../../config/config'
import RichTextWrapper from '../../components/common/RichTextWrapper'
import { filterPageContentByPageTitle } from '../../utils/utils';

export async function getStaticProps() {
  const res = await ContentfulClient.getEntries({ content_type: 'pageContent' })

  return {
    props: {
      content: res.items,
      revalidate: revalidateValue
    }
  }
}

function About({ content }) {
  const { contentText } = filterPageContentByPageTitle(content, 'About')[0].fields;

  return <Layout><div className="centeredContentWrapper">
    <RichTextWrapper richText={contentText} />
  </div>
  </Layout>
}

export default About