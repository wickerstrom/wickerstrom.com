import '../styles/globals.css'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import Layout from '../components/layout/Layout'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    hotjar.initialize(2816753, 6);
  }, [])

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </Layout>

  )
}

export default MyApp
