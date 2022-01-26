import Layout from '../../components/layout/Layout'
import { ContentfulClient, revalidateValue } from '../../config/config'
import RichTextWrapper from '../../components/common/RichTextWrapper'
import { filterPageContentByPageTitle } from '../../utils/utils';
import Acknowledgement from './Acknowledgement';

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
/*
export async function getStaticProps() {
  const [workExperience, education, skills, certificates] = await Promise.all([
    ContentfulClient.getEntries({ content_type: 'workExperience' }),
    ContentfulClient.getEntries({ content_type: 'education' }),
    ContentfulClient.getEntries({ content_type: 'skills' }),
    ContentfulClient.getEntries({ content_type: 'certificates' })
  ]);

  return {
    props: {
      workExperience: workExperience.items,
      education: education.items,
      skills: skills.items,
      certificates: certificates.items,
      revalidate: revalidateValue
    }
  }
}*/

function About({ content, acknowledgements }) {
  const { contentText } = filterPageContentByPageTitle(content, 'About')[0].fields;

  return <Layout><div className="centeredContentWrapper">
    <RichTextWrapper richText={contentText} />
  </div>
    <div>
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