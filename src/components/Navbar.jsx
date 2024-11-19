import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const[menu, setMenu] = useState("home");
  return (
    <div className=" flex justify-between min-h-[5vh]">
      <div className="flex items-center gap-3">
        <img src={assets.food_logo} alt="" className="h-11" />
        <h1 className="font-bold text-3xl text-[#fe5e4c] ">foodBUS.</h1>
      </div>
      <ul className="nav-menu flex items-center gap-5 text-[#49557e] text-lg font-medium cursor-pointer">
        <li
          className={menu === "home" ? " border-b-2 border-[#49557e]" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={menu === "Menu" ? " border-b-2 border-[#49557e]" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>
        <li
          className={
            menu === "mobile-app" ? " border-b-2 border-[#49557e]" : ""
          }
          onClick={() => setMenu("mobile-app")}
        >
          Mobile App
        </li>
        <li
          className={
            menu === "contact-us" ? " border-b-2 border-[#49557e]" : ""
          }
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </li>
      </ul>
      <div className="nav-right flex items-center gap-5 text-lg font-semibold">
        <img src={assets.search_icon} alt="" className=" h-6 cursor-pointer" />

        <div className="nav-search-icon relative">
          <img src={assets.basket_icon} alt="" className="h-6 cursor-pointer" />
          <div className="dot absolute min-h-2 min-w-2 bg-orange-600 top-[-5px] right-[-8px] rounded-3xl"></div>
        </div>
        <button className="px-7 py-1 text-[#49557e] hover:bg-[#fff4f2] border-[1px] border-orange-600 rounded-full transition-transform-400 ">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar
