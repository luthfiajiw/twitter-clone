import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Header label='Home' />
    </Fragment>
  )
}
