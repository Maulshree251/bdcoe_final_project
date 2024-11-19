import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets';
import '../index.css';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    return (
      <div className="food-display mt-[30px] ">
        <h1 className="text-3xl">Top dishes near you</h1>
        <div className="food-display-list grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] mt-8 gap-8 row-gap-[50px]">
          {food_list.map((item, index) => (
            <div className="card">
              <div className="card-container">
                <div className="image-container">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-info">
                  <div className="name-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="" />
                  </div>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default FoodDisplay
