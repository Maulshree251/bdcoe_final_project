import React from 'react'
import {assets} from '../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-24 text-3xl text-center mb-20 ' id='app-download'>
       <p>For Better Experience Download<br />FoodBus App</p>
       <div className="icons flex items-center justify-center gap-4 mt-5 ">
          <img src={assets.play_store} alt=""className='icon-images cursor-pointer hover:scale transtion-smooth max-w-180px' />
          <img src={assets.app_store} alt="" className='icon-images cursor-pointer hover:w-[18vw] transtion-smooth max-w-180px'/>
       </div>
      
    </div>
  )
}

export default AppDownload
