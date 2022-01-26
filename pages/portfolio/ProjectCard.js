import Link from 'next/link'
import styles from '../../styles/portfolio.module.css'

function WorkExperience({ project }) {
    const { title, tagLine, tags } = project?.fields || {};

    return <div className={styles.projectCard}>
        <Link href={`/portfolio/${project?.fields?.slug ? project?.fields?.slug : null}`} passHref={true}>
            <div>
                <h5>{tags}</h5>
                <h2>
                    {title}
                </h2>
                <h4>{tagLine}</h4>
            </div>
        </Link>
    </div>
}

export default WorkExperience
