import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartamount} =useContext(StoreContext);
  return (
    <div className="cart m-28">
      <div className>
        <div className="cart-items-title grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-gray-400 font-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0)
            return (
              <div>
                <div className="cart-items-item grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center font-[max(1vw,12px)] m-2 text-black font-normal">
                  <img src={item.image} alt="" className="w-12" />
                  <p>{item.name}</p>
                  <p> ${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cursor-pointer" onClick={}>x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
        })}
      </div>
      <div className="cart-bottom mt-20 flex justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex flex-1 flex-col gap-5">
          <h1 className="text-xl">Cart Totals</h1>
          <div>
            <>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCartamount()}</p>
              </div>
              <hr />
            </>
            <>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${getTotalCartamount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
            </>

            <>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Total</p>
                <p>
                  {getTotalCartamount() === 0 ? 0 : getTotalCartamount() + 2}
                </p>
              </div>
              <hr />
            </>
          </div>
          <Link to='/placeorder'>
            
            <button className="text-white bg-orange-600 w-[max(15vw,200px)] py-3 font-sans rounded">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
        <div className="cart-promo-code flex-1 ">
          <div>
            <p className="text-[#555]">
              If you have any promo code, Enter it here
            </p>
            <div className="cart-promocode-input mt-4 flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                type="text"
                placeholder="promo code"
                name=""
                id=""
                className="bg-transparent outline-none border-none pl-2"
              />
              <button className="w-[max(10vw,150px)] py-2 px-1 bg-black border-none text-white rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
