import Link from 'next/link'
import styles from '../../styles/portfolio.module.css'

function WorkExperience({ project }) {
    const { title, tagLine, tags } = project?.fields || {};

    return <div className={styles.projectCard}>
        <Link href={`/portfolio/${project?.fields?.slug ? project?.fields?.slug : null}`} passHref={true}>
            <div>
                <p>{tags}</p>
                <h3>
                    {title}
                </h3>
                <h5>{tagLine}</h5>
            </div>
        </Link>
    </div>
}

export default WorkExperience
