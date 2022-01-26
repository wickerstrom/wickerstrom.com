import styles from '../../styles/resume.module.css'

function Skills({ skills }) {
    const { title } = skills?.fields || {};

    return <div className={styles.skill}>
        <p>{title ? title : null}</p>
    </div>
}

export default Skills
