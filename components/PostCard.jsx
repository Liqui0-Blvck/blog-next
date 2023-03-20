/* eslint-disable no-unused-vars */
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineCalendar } from 'react-icons/ai'

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 ">
      <div className='relative overflow-hidden shadow-md mb-6 pb-80'>
        <img src={post.featuredImage.url} alt={post.title} className='absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg '/>
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img src={post.author.photo.url} alt={post.author.name} className='h-16 rounded-full'/>
          <p className='font-semibold inline align-middle text-gray-700 ml-2'>{post.author.name}</p>
        </div>
        <div className='ml-2 font-medium text-gray-700'>
          <span className='flex gap-2 md:justify-center sm:justify-center'>
            <AiOutlineCalendar size={25} color="#a70e0e" />
            {moment(post.createdAt).format('MMMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-gray-700 text-lg'>{post.excerpt}</p>
      <div className='text-center pt-8'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-purple-400 p-3 rounded-md text-white'>
            Continuar leyendo...
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
