import '../styles/globals.css'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import Layout from '../components/layout/Layout'
import { AnimatePresence } from "framer-motion"
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    hotjar.initialize(2816753, 6);
  }, [])

  return (
    <>
      <Head>
        <title>Christian Wickerström</title>
      </Head>
      <Layout>
        <Component
          key={router.route}
          {...pageProps}
        />
      </Layout>
    </>
  )
}

export default MyApp
