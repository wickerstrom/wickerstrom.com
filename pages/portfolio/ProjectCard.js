import Link from 'next/link'
import styles from '../../styles/portfolio.module.css'

function WorkExperience({ project }) {
    const { title, tagLine } = project.fields;

    return <div className={styles.projectCard}>
        <Link href={`/portfolio/${project.fields.slug}`}>
            <a>
                {title}

            </a>
        </Link>
        <p>{tagLine}</p>
        <p>Frontend - UX - other tags etc.</p>
        <p>See more button..</p>
    </div>
}

export default WorkExperience
