import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'
import '../index.css'
const Navbar = () => {
  return (
    <div className='flex items-center gap-2 my-8'>
        <RiRestaurant2Fill className='text-3xl text-pink-500'/>
        <p className='text-2xl text-semibold text-gray-500'>Foodie</p>
    </div>
    )
}

export default Navbar