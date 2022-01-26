import Layout from '../../components/layout/Layout'
import RichTextWrapper from "../../components/common/RichTextWrapper";
import { ContentfulClient } from '../../config/config'

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await ContentfulClient.getEntries({ content_type: 'project', 'fields.slug[in]': id })

  return {
    props: {
      project: res.items[0]
    }
  }
}

export default function Project({ project }) {

  const { title, tagLine, description, githubUrl } = project.fields;

  return <Layout><h2>{title}</h2>
    <h4>{tagLine}</h4>
    <a href={githubUrl}>{githubUrl}</a>

    <RichTextWrapper richText={description} />
  </Layout>;
}
