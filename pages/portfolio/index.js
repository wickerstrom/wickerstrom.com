import { ContentfulClient, revalidateValue } from '../../config/config'
import ProjectCard from './ProjectCard'
import styles from '../../styles/portfolio.module.css'
import PageWrapperHoc from '../../components/common/PageWrapperHoc'

export async function getStaticProps() {
  const res = await ContentfulClient.getEntries({ content_type: 'project' })

  return {
    props: {
      projects: res.items,
      revalidate: revalidateValue
    }
  }
}

function Projects({ projects }) {
  return (
    <PageWrapperHoc>
      {projects.length === 0 && <div style={{ textAlign: 'center' }}>Whoops, there are no projects here...</div>}
      {projects && projects.length > 0 && projects.map(project => (
        <div className={styles.projectCardWrapper} key={project.sys.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </PageWrapperHoc>)
}

export default Projects