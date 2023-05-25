import React from 'react'
import {FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='w-64 border-2 flex justify-center items-center 
    flex-col p-5 rounded-xl gap-5 relative h-[400px] shadow-lg hover:scale-105 transition duration-200 hover:shadow-lg'>
        <img src={meal.strMealThumb}
        width="200px"
        className='rounded-xl'
        />
        <h1>{meal.strMeal}</h1>
        <Link to={`/details/${meal.idMeal}`}>
          <button className='text-white bg-blue-500 px-10 py-2 rounded-xl 
          absolute bottom-3 hover:bg-blue-400 right-20'>
          <FaEye className='text-2xl'/>
          </button>
        </Link>
    </div>
  )
}

export default Card