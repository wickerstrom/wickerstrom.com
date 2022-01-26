import RichTextWrapper from "../../components/common/RichTextWrapper";
import { formatDateToMonthNameAndYear } from '../../utils/utils';
import styles from '../../styles/resume.module.css'

function WorkExperience({ workExperience }) {
    const { workTitle, company, location, startDate, endDate, description } = workExperience?.fields || {};

    return <div className={styles.experience}>
        <h3>{workTitle} at {company}, {location}</h3>
        <p>{formatDateToMonthNameAndYear(startDate)} - {endDate ? formatDateToMonthNameAndYear(endDate) : 'present'}</p>
        <RichTextWrapper richText={description} />
    </div>
}

export default WorkExperience
