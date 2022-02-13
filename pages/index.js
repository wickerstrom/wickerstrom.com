import RichTextWrapper from '../components/common/RichTextWrapper'
import { ContentfulClient, revalidateValue } from '../config/config'
import { filterPageContentByPageTitle } from '../utils/utils';
import PageWrapperHoc from '../components/common/PageWrapperHoc'


export async function getStaticProps() {
  const res = await ContentfulClient.getEntries({ content_type: 'pageContent' })

  return {
    props: {
      content: res.items,
      revalidate: revalidateValue
    }
  }
}

export default function Home({ content }) {
  const { contentText } = filterPageContentByPageTitle(content, 'LandingPage')[0].fields;

  return (
    <PageWrapperHoc>
      <div className="centeredContentWrapper">
        <RichTextWrapper richText={contentText} />
      </div>
    </PageWrapperHoc>
  )
}
