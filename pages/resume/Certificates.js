import RichTextWrapper from "../../components/common/RichTextWrapper";
import { formatDateToMonthNameAndYear } from '../../utils/utils';
import OnScrollHOC from '../../components/common/OnScrollHoc';

function Certificates({ certificate }) {
    const { title, startDate, endDate, description } = certificate?.fields || {};

    return <OnScrollHOC>
        <h3>{title ? title : null}</h3>
        <p>{formatDateToMonthNameAndYear(startDate)} - {endDate ? formatDateToMonthNameAndYear(endDate) : 'present'}</p>
        <RichTextWrapper richText={description ? description : null} />
    </OnScrollHOC>
}

export default Certificates
