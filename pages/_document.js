import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta charset="UTF-8" />
                    <meta name="keywords" content="Christian, Wickerström, Christian Wickerström, UX Designer, Developer, Gothenburg" />
                    <meta name="description" content="Christian Wickerström" />
                    <title>Christian Wickerström</title>

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
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument