import styles from '../../styles/resume.module.css'
import OnScrollHOC from '../../components/common/OnScrollHoc';

function Skills({ skills }) {
    const { title } = skills?.fields || {};

    return (
        <OnScrollHOC>
            <div className={styles.skill}>
                <ul>
                    <li>{title ? title : null}</li>
                </ul>
            </div>
        </OnScrollHOC>
    )
}

export default Skills
