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