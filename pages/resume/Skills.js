import styles from '../../styles/resume.module.css'

function Skills({ skills }) {
    const { title } = skills?.fields || {};

    return <div className={styles.skill}>
        <ul>
            <li>{title ? title : null}</li>
        </ul>
    </div>
}

export default Skills
