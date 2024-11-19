import React, { useState } from 'react'
import Header from './Header'
import ExploreMenu from './ExploreMenu'
import FoodDisplay from './FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div className=''>
        <Header/>  
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
