/* eslint-disable no-unused-vars */
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import React, { useState, useEffect } from 'react'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  console.log(relatedPosts)

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts(categories).then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className='text-xl font-semibold border-b pb-4'>
        {slug ? 'Recent Posts' : 'Related Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/posts/${post.slug}`}>
          <div key={post.title} className="flex items-center w-full mb-8 py-6 border-solid border-2 border-gray-100 bg-sky-50 rounded-lg shadow-lg" >
            <div className='w-20 flex-none'>
              <img src={post.featuredImage.url} alt={post.title} className='align-middle rounded-full'/>
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='text-m'>
                {post.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget

// export async function getStaticProps({ params }) {
//   const { categories, slug } = params
//   return {
//     props: {
//       categories,
//       slug
//     }
//   }
// }
