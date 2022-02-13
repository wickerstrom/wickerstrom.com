import RichTextWrapper from "../../components/common/RichTextWrapper";
import styles from '../../styles/about.module.css'
import OnScrollHOC from '../../components/common/OnScrollHoc';

function Acknowledgement({ acknowledgement }) {
    const { title, role, company, acknowledgementText } = acknowledgement?.fields || {};

    return (
        <OnScrollHOC><div className={styles.acknowledgement}>
            <RichTextWrapper richText={acknowledgementText ? acknowledgementText : null} />
            <h4>{title} - {role} at {company}</h4>
        </div>
        </OnScrollHOC>
    )
}

export default Acknowledgement
