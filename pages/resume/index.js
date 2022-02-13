import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import Certificates from './Certificates'
import { ContentfulClient, revalidateValue } from '../../config/config'
import styles from '../../styles/resume.module.css'
import PageWrapperHoc from '../../components/common/PageWrapperHoc'

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
        let sortedItems = [];

        if (itemsArray && itemsArray.length > 0) {
            return sortedItems = itemsArray.sort((a, b) => {
                return new Date(a.fields.startDate).getTime() -
                    new Date(b.fields.startDate).getTime()
            }).reverse();
        }
        return sortedItems;
    }

    const sortByAlphabeticalOrder = (itemsArray) => {
        if (itemsArray && itemsArray.length > 0) {
            return itemsArray.sort((a, b) => a.fields.title.localeCompare(b.fields.title))
        }
    }

    return (
        <PageWrapperHoc>
            <div className={styles.resumeWrapper}>
                <div>
                    {workExperience && workExperience.length > 0 && sortItemsByMostRecent(workExperience).map(workExperience => (
                        <div key={workExperience.sys.id}>
                            <WorkExperience workExperience={workExperience} />
                        </div>
                    ))}
                </div>

                <div>
                    <h1>Education</h1>
                    {education && education.length > 0 && sortItemsByMostRecent(education).map(education => (
                        <div key={education.sys.id}>
                            <Education education={education} />
                        </div>
                    ))}
                </div>
                <h1>Skills</h1>
                <div className={styles.skillsWrapper}>
                    {skills && skills.length > 0 && sortByAlphabeticalOrder(skills).map(skill => (
                        <div key={skill.sys.id}>
                            <Skills skills={skill} />
                        </div>
                    ))}
                </div>
                <div>
                    <h1>Certificates</h1>
                    {certificates && certificates.length > 0 && sortItemsByMostRecent(certificates).map(certificate => (
                        <div key={certificate.sys.id}>
                            <Certificates certificate={certificate} />
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapperHoc>
    )
}

export default Resume
