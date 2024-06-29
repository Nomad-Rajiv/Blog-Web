import React from 'react'
import BlogPage from '../components/BlogPage'


function Blogs() {
  return (
    <div>
      <div className='py-40 px-4 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Blog Page</h2>
      </div>


      {/*All Blogs Container */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Blogs
