import React from 'react'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import Meals from './Pages/Meals'
import Details from './Pages/Details'
import Navbar from './Pages/Navbar'
const App = () => {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App