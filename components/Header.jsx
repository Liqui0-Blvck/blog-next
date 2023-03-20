/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import Link from 'next/link'
import { Categories } from '../components/index'

const categories = [{ name: 'react', slug: 'react' }, { name: 'next', slug: 'next' }]

const Header = () => {
  return (
    <div className='container mx-auto px-44 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              GraphNMC
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Header
