import RichTextWrapper from "../../components/common/RichTextWrapper";
import styles from '../../styles/about.module.css'

function Acknowledgement({ acknowledgement }) {
    const { title, role, company, acknowledgementText } = acknowledgement?.fields || {};

    return <div className={styles.acknowledgement}>
        <RichTextWrapper richText={acknowledgementText ? acknowledgementText : null} />
        <h4>{title} - {role} at {company}</h4>
    </div>
}

export default Acknowledgement
