import RichTextWrapper from "../../components/common/RichTextWrapper";
import { formatDateToMonthNameAndYear } from '../../utils/utils';
import styles from '../../styles/resume.module.css'
import OnScrollHOC from '../../components/common/OnScrollHoc';

function WorkExperience({ education }) {
    const { educationTitle, school, location, startDate, endDate, description } = education?.fields || {};

    return (
        <OnScrollHOC>
            <div className={styles.education}>
                <h3>{educationTitle} at {school}, {location}</h3>
                <p>{formatDateToMonthNameAndYear(startDate)} - {endDate ? formatDateToMonthNameAndYear(endDate) : 'present'}</p>
                <RichTextWrapper richText={description} />
            </div>
        </OnScrollHOC>
    )
}

export default WorkExperience
