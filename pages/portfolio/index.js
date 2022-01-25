import Layout from '../../components/layout/Layout'
import { ContentfulClient, revalidateValue } from '../../config/config'
import ProjectCard from './ProjectCard'
import styles from '../../styles/portfolio.module.css'

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

  return <Layout>
    {projects.length === 0 && <div>Whoops, there are no projects here...</div>}
    <div >
      {projects && projects.length > 0 && projects.map(project => (
        <div className={styles.projectCardWrapper} key={project.sys.id}>
          <ProjectCard project={project} />


        </div>
      ))}
    </div>
  </Layout>
}

export default Projects