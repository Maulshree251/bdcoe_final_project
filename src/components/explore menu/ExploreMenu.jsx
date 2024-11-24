import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-4 " id="explore-menu">
      <div className="explore-menu-text">
        <h1 className="text-2xl font-extrabold text-[#262626]">
          Explore Our Menu
        </h1>
        <p className="text-[#262626] font-xs font-[600]">
          Explore our menu and let your taste buds do the talking!
          <br /> With something for everyone, you’re sure to find a dish that
          hits the spot.
        </p>
      </div>

      <div className="explore-menu-list flex gap-20 text-center my-5 items-center justify-between  overflow-x-scroll min-w-full">
        {menu_list.map((m, index) => (
          <div
            className="menu-list-items flex flex-col justify-center items-center mt-3  min-w-max"
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === m.menu_name ? "all" : m.menu_name
              )
            }
          >
            <img
              src={m.menu_image}
              alt=""
              className={
                category === m.menu_name
                  ? "border-orange-600 border-[3px] rounded-full p-[2px] h-24 cursor-pointer"
                  : "h-24 cursor-pointer border-[1px] border-white"
              }
            />
            <p className="text-[#747474] text-lg font-semibold cursor-pointer">
              {m.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-1 h-[2px] bg-[#e2e2e2] border-none " />
    </div>
  );
};

export default ExploreMenu;
