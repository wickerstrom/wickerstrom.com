import RichTextWrapper from "../../components/common/RichTextWrapper";
import { formatDateToMonthNameAndYear } from '../../utils/utils';

function Certificates({ certificate }) {
    const { title, startDate, endDate, description } = certificate?.fields || {};

    return <div>
        <h3>{title ? title : null}</h3>
        <p>{formatDateToMonthNameAndYear(startDate)} - {endDate ? formatDateToMonthNameAndYear(endDate) : 'present'}</p>
        <RichTextWrapper richText={description ? description : null} />
    </div>
}

export default Certificates
