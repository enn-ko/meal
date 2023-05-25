import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'
import Loading from './Loading/Loading'

const Details = () => {
  const {id} = useParams()
  const [meal,setMeal] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getSingleMeal = async()=>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    // console.log(data.meals[0])
    setMeal(data?.meals[0])
    setIsLoading(false)
  }

  useEffect(()=>{
    getSingleMeal()
  },[])
  return (
    <>
    {isLoading ? <Loading/> : 
        <div className='flex flex-col gap-5'>
        <img 
        src={meal.strMealThumb} 
        width={'300px'} 
        className='rounded-xl' alt="" />
  
        <div className='text-white bg-red-500 text-sm py-1 px-3 w-20 rounded-lg'>{meal.strCategory}</div>
        <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
        <div className='gap-5 flex flex-col'>
          <h2 className='text-2xl'>Instructions</h2>
          <p className='leading-5 text-gray-500 tracking-wider'>{meal.strInstructions}</p>
        </div>
        <div className='flex items-center gap-5 '>
          <a href={meal.strYoutube} target='__blank'>
          <BsYoutube className='text-5xl text-red-600 bg-white cursor-pointer '/>
          </a>
          <p className='text-gray-400 '>Watch now YouTube</p>
        </div>
      </div>
    }
    </>
  )
}

export default Details