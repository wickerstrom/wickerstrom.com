import Layout from '../../components/layout/Layout'
import RichTextWrapper from '../../components/common/RichTextWrapper'
import { ContentfulClient, revalidateValue } from '../../config/config'
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

export default function Contact({ content }) {
  const { contentText } = filterPageContentByPageTitle(content, 'Contact')[0].fields;

  return (
    <div>
      <Layout>
      <div className="centeredContentWrapper">
        <RichTextWrapper richText={contentText} />
      </div>
      </Layout>
    </div>
  )
}
