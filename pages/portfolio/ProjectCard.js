import Link from 'next/link'
import styles from '../../styles/portfolio.module.css'

function WorkExperience({ project }) {
    const { title, tagLine, tags } = project?.fields || {};

    return (
        <Link href={`/portfolio/${project?.fields?.slug ? project?.fields?.slug : null}`} passHref={true}>
            <div className={styles.projectCard}>

                <div>
                    <h5>{tags}</h5>
                    <h1>
                        {title}
                    </h1>
                    <h4>{tagLine}</h4>
                </div>
            </div>
        </Link>
    )
}

export default WorkExperience
