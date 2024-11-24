import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header h-[34vw] my-10 mx-auto bg-header-image  bg-cover object-cover relative rounded-3xl overflow-hidden">
      <div className="header-contents text absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-12 left-16 animate-fade-in">
        <h1 className="text-6xl font-extrabold font-serif text-white">
          Order your favourite food here.
        </h1>
        <p className="text-sm font-light text-white">
          Our carefully curated menu is a celebration of taste, crafted to bring
          joy to your plate. From sizzling starters to delightful desserts,
          every dish is prepared with love and fresh ingredients. Dive in,
          explore the flavors, and let your taste buds dance!
        </p>
        <button className="bg-white text-sm  px-6 py-3 rounded-full ">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header
