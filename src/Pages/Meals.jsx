import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading/Loading';
const Meals = () => {
const [meals,setMeals] =useState([])
const [isLoading,setIsLoading] = useState(true)

  const getMeal = async()=>{
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    // console.log(data.meals)
    setMeals(data.meals)
    setIsLoading(false)
  };
  useEffect(()=>{
    getMeal();
  },[])
  return (
    <>
    {isLoading ? <Loading/> : 
        <div className='flex gap-5 flex-wrap justify-center items-center'>
          {meals?.map(meal =>
          <Card key={meal.idMeal} meal={meal}/>
          )}
        </div>

    }
    </>
  )
}

export default Meals