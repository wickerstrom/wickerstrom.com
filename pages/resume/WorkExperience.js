import RichTextWrapper from "../../components/common/RichTextWrapper";
import { formatDateToMonthNameAndYear } from '../../utils/utils';
import styles from '../../styles/resume.module.css'
import OnScrollHOC from '../../components/common/OnScrollHoc';

function WorkExperience({ workExperience }) {
    const { workTitle, company, location, startDate, endDate, description } = workExperience?.fields || {};

    return (
        <OnScrollHOC>
            <div className={styles.experience}>
                <h3>{workTitle} at {company}, {location}</h3>
                <p>{formatDateToMonthNameAndYear(startDate)} - {endDate ? formatDateToMonthNameAndYear(endDate) : 'present'}</p>
                <RichTextWrapper richText={description} />
            </div>
        </OnScrollHOC>
    )
}

export default WorkExperience
