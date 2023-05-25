import React from 'react'
import {RiLoaderFill} from 'react-icons/ri'

const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen '>
        <RiLoaderFill className='text-red-400 text-5xl animate-spin'/>
    </div>
  )
}

export default Loading