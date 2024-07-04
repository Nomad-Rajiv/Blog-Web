import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import { useLoaderData } from 'react-router-dom'
import SideBar from './SideBar'

function SingleBlog() {
  const data = useLoaderData()
  // console.log(data);
  const {title,image, category, author, published_date, reading_time, content} = data[0]
  return (
    <div>
        <div className='py-40 px-4 bg-black text-center text-white'>
          <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Single Blog Page</h2>
        </div>
        {/* Blog Details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
          <div className='lg:w-3/4 mx-auto'>
            <div>
              <img src={image} alt="" className='w-full mx-auto rounded'/>
            </div>
            <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2'/> {author} | {published_date}</p>

            <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>

            <div className='text-base text-gray-500'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum dolorem ipsum expedita doloremque cumque id dolore recusandae deleniti soluta? Minus debitis fugit corrupti itaque molestias earum beatae doloremque voluptate.</p> <br/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam blanditiis corrupti labore quibusdam mollitia, soluta ut totam accusantium ullam suscipit quia dicta voluptatum beatae vero nobis repellendus eveniet perferendis commodi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi reprehenderit, vitae exercitationem illum ipsam, excepturi dicta quas officiis eligendi molestias error illo eum amet! Natus, distinctio. Commodi quis id quo.</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum dolorem ipsum expedita doloremque cumque id dolore recusandae deleniti soluta? Minus debitis fugit corrupti itaque molestias earum beatae doloremque voluptate.</p> <br/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam blanditiis corrupti labore quibusdam mollitia, soluta ut totam accusantium ullam suscipit quia dicta voluptatum beatae vero nobis repellendus eveniet perferendis commodi.</p><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi reprehenderit, vitae exercitationem illum ipsam, excepturi dicta quas officiis eligendi molestias error illo eum amet! Natus, distinctio. Commodi quis id quo.</p>

            </div>
          </div>

          <div className='lg:w-1/2'>
            <SideBar />
          </div>
        </div>
    </div>
  )
}

export default SingleBlog
