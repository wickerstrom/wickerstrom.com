import Head from 'next/head'
import Layout from '../components/layout/Layout'
import RichTextWrapper from '../components/common/RichTextWrapper'
import { ContentfulClient, revalidateValue } from '../config/config'
import { filterPageContentByPageTitle } from '../utils/utils';

export async function getStaticProps() {
  const res = await ContentfulClient.getEntries({ content_type: 'pageContent' })

  return {
    props: {
      content: res.items,
      revalidate: revalidateValue
    }
  }
}

export default function Home({ content }) {
  const { contentText } = filterPageContentByPageTitle(content, 'LandingPage')[0].fields;

  return (
    <div>
      <Head>
        <title>Christian Wickerström</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TAG}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_TAG}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Layout>
        <div className="centeredContentWrapper">
          <RichTextWrapper richText={contentText} />
        </div>
      </Layout>
    </div>
  )
}
