import Layout from '../../components/layout/Layout'
import { ContentfulClient, revalidateValue } from '../../config/config'
import RichTextWrapper from '../../components/common/RichTextWrapper'
import { filterPageContentByPageTitle } from '../../utils/utils';
import Acknowledgement from './Acknowledgement';
import styles from '../../styles/about.module.css'

export async function getStaticProps() {

  const [pageContent, acknowledgements, skills, certificates] = await Promise.all([
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

  return <Layout><div className="centeredContentWrapper">
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
  </Layout>
}

export default About