import Layout from '@/components/Layout'
import Modal from '@/components/modals/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Modal
        title='Modal'
        actionLabel='Submit'
        onClose={() => {}}
        onSubmit={() => {}}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
