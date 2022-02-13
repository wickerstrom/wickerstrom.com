import { ContentfulClient, revalidateValue } from '../../config/config'
import RichTextWrapper from '../../components/common/RichTextWrapper'
import { filterPageContentByPageTitle } from '../../utils/utils';
import Acknowledgement from './Acknowledgement';
import styles from '../../styles/about.module.css'
import PageWrapperHoc from '../../components/common/PageWrapperHoc'

export async function getStaticProps() {
  const [pageContent, acknowledgements] = await Promise.all([
    ContentfulClient.getEntries({ content_type: 'pageContent' }),
    ContentfulClient.getEntries({ content_type: 'acknowledgements' }),
  ]);

  const res = await ContentfulClient.getEntries({ content_type: 'pageContent' })

  return {
    props: {
      content: pageContent.items,
      acknowledgements: acknowledgements.items,
      revalidate: revalidateValue
    }
  }
}

function About({ content, acknowledgements }) {
  const { contentText } = filterPageContentByPageTitle(content, 'About')[0].fields;

  return (
    <PageWrapperHoc>
      <div className={styles.about}>
        <div className="centeredContentWrapper">
          <RichTextWrapper richText={contentText} />
        </div>
        <div className={styles.acknowledgementsWrapper}>
          <h2>Acknowledgements</h2>
          {acknowledgements && acknowledgements.length > 0 && acknowledgements.map(acknowledgement => (
            <div key={acknowledgement.sys.id}>
              <Acknowledgement acknowledgement={acknowledgement} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapperHoc>)
}

export default About