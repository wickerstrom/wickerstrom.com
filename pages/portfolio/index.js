import Layout from '../../components/layout/Layout'
import { ContentfulClient, revalidateValue } from '../../config/config'
import ProjectCard from './ProjectCard'

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
    {projects.map(project => (
      <div key={project.sys.id}>
        <ProjectCard project={project} />
      </div>
    ))}
  </Layout>
}

export default Projects