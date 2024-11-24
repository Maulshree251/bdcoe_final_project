import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "../../index.css";

const FoodDisplay = ({ category }) => {
  const { food_list, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);
  return (
    <div className="food-display mt-[30px] mb-5">
      <h1 className="text-3xl">Top dishes near you</h1>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,_1fr))] mt-8 gap-8 ">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <div
                className="card w-[100%] m-auto rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.1)] animate-fade-in duration-300 transitiom-[0.3s] overflow-hidden "
                key={index}
              >
                <div className="card-container  ">
                  <div className="image-container w-full relative">
                    <img src={item.image} alt="" className="w-full"/>
                    {!cartItems[item._id] ? (
                      <img
                        className="add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_white}
                        alt=""
                      />
                    ) : (
                      <div className="food-item-counter  absolute bottom-[15px] right-[15px] cursor-pointer rounded-full flex items-center gap-2 p-2 bg-slate-100 ">
                        <img
                          src={assets.remove_icon_red}
                          alt=""
                          onClick={() => removeFromCart(item._id)}
                          className="w-5"
                        />
                        <p>{cartItems[item._id]}</p>
                        <img
                          src={assets.add_icon_green}
                          alt=""
                          onClick={() => addToCart(item._id)}
                          className="w-5"
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-info p-5 ">
                    <div className="name-rating flex justify-between items-center mb-3">
                      <p className="text-xl">{item.name}</p>
                      <img src={assets.rating_starts} alt="" className="w-20" />
                    </div>
                    <p className="text-[#676767] text-xs">{item.description}</p>
                    <p className="text-orange-600 text-2xl font-medium mt-2">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
