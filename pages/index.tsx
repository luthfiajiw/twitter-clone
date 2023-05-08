import Form from '@/components/Form'
import Header from '@/components/Header'
import PostFeed from '@/components/posts/PostFeed'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Header label='Home' />
      <Form placeholder="What's happening?"/>
      <PostFeed />
    </Fragment>
  )
}
