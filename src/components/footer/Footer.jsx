import React from 'react'
import { assets } from '../../assets/assets';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 rounded-md" id='footer'>
      <div className="footer-content grid grid-cols-[2fr,1fr,1fr] gap-10">
        <div className="footer-content-left flex flex-col items-start gap-5">
          <div className="logo flex gap-2 items-center justify-start">
            <img src={assets.food_logo} alt="" className="h-11" />
            <h1 className="text-[#fe5e4c] text-3xl font-bold">foodBUS.</h1>
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non
            reprehenderit perferendis ipsa deleniti quod maxime facere, impedit
            eaque iusto, accusamus natus ratione unde error illo rerum enim
            expedita. Non illum suscipit possimus asperiores error vero quisquam
            ratione voluptates. Ratione?
          </p>
          <div className="social-icons flex gap-3">
            <img src={assets.facebook_icon} alt="" className="h-9 cursor-pointer" />
            <img src={assets.twitter_icon} alt="" className="h-9 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="" className="h-9 cursor-pointer" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
          <h1 className="text-xl mt-2 text-white">COMPANY</h1>
          <ul className="text-sm">
            <li className='cursor-pointer mb-1'>Home</li>
            <li className='cursor-pointer mb-1'>About Us</li>
            <li className='cursor-pointer mb-1'>Delivery</li>
            <li className='cursor-pointer mb-1'>Privacy Policy</li>
          </ul> 
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
          <h1 className="text-xl mt-2 text-white">GET IN TOUCH</h1>
          <ul className="text-sm cursor-pointer">
            <li className='cursor-pointer'>+1-212-456-7890</li>
            <li className='cursor-pointer'>contact@foodbus.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[1px] my-5 mx-0 bg-gray-500 border-none' />
      <p className="text-xs">
        Copyright 2024 © Foodbus.com - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer
