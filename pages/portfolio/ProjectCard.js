import Link from 'next/link'
import styles from '../../styles/portfolio.module.css'

function WorkExperience({ project }) {
    const { title, tagLine, tags } = project?.fields || {};

    return <div className={styles.projectCard}>
        <Link href={`/portfolio/${project?.fields?.slug ? project?.fields?.slug : null}`} passHref={true}>
            <div>
                <a>
                    {title}
                </a>
                <p>{tagLine}</p>
                <p>{tags}</p>
            </div>
        </Link>
    </div>
}

export default WorkExperience
