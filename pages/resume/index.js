import Layout from '../../components/layout/Layout'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import Certificates from './Certificates'
import { ContentfulClient, revalidateValue } from '../../config/config'

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
}

function Resume(props) {

    const { workExperience, education, skills, certificates } = props;

    const sortItemsByMostRecent = (itemsArray) => {
        let sortItemsByMostRecent = [];

        if (itemsArray && itemsArray.length > 0) {
            return sortItemsByMostRecent = itemsArray.sort((a, b) => {
                return new Date(a.fields.startDate).getTime() -
                    new Date(b.fields.startDate).getTime()
            }).reverse();
        }
        return sortItemsByMostRecent;
    }

    return (
        <Layout>
            <div>
                <h1>Experience</h1>
                {workExperience && workExperience.length > 0 && sortItemsByMostRecent(workExperience).map(workExperience => (
                    <div key={workExperience.sys.id}>
                        <WorkExperience workExperience={workExperience} />
                    </div>
                ))}
            </div>
            <h1>Education</h1>
            <div>
                {education && education.length > 0 && sortItemsByMostRecent(education).map(education => (
                    <div key={education.sys.id}>
                        <Education education={education} />
                    </div>
                ))}
            </div>
            <h1>Skills!</h1>
            <div>
                {skills && skills.length > 0 && skills.map(skill => (
                    <div key={skill.sys.id}>
                        <Skills skills={skill} />
                    </div>
                ))}
            </div>
            <h1>Certificates</h1>
            <div>
                {certificates && certificates.length > 0 && sortItemsByMostRecent(certificates).map(certificate => (
                    <div key={certificate.sys.id}>
                        <Certificates certificate={certificate} />
                    </div>
                ))}
            </div>
        </Layout>)
}

export default Resume
