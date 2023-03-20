/* eslint-disable no-unused-vars */

import Head from 'next/head'
import { PostCard, PostWidget, Categories, Header } from '../components/index'
import { getPosts } from '../services'

export default function Home ({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 sm:px-4 lg:px-44">
      <Head>
        <title>NMC Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(post => <PostCard key={post.title} post={post.node} />)}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Categories />
            <PostWidget />
          </div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}
