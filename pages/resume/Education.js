import RichTextWrapper from "../../components/common/RichTextWrapper";
import { formatDateToMonthNameAndYear } from '../../utils/utils';

function WorkExperience({ education }) {
    const { educationTitle, school, location, startDate, endDate, description } = education?.fields || {};

    return <div>
        <h3>{educationTitle} at {school}, {location}</h3>
        <p>{formatDateToMonthNameAndYear(startDate)} - {endDate ? formatDateToMonthNameAndYear(endDate) : 'present'}</p>
        <RichTextWrapper richText={description} />
    </div>
}

export default WorkExperience
