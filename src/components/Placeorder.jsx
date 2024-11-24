import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';

const Placeorder = () => {

  const{getTotalCartamount} = useContext(StoreContext);
  return (

    <form className="placeorder flex items-start justify-between gap-12 m-28">
      <div className="placeorder-left w-full max-w-[max(30%,500px)]">
        <p className='text-xl font-semibold mb-12'>Delivery Information</p>
        <div className="multi-feilds flex gap-2">
          <input type="text" placeholder="First Name"  className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600'/>
          <input type="text" placeholder="Last Name" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
        </div>
        <input type="text" placeholder="Email Address" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
        <input type="text" placeholder="Street" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
        <div className="multi-feilds flex gap-2">
          <input type="text" placeholder="City" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
          <input type="text" placeholder="State" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
        </div>
        <div className="multi-feilds flex gap-2">
          <input type="text" placeholder="Zipcode" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
          <input type="text" placeholder="Country" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
        </div>
        <input type="text" placeholder="Phone" className='mb-4 w-full border-[1px] border-[#c5c5c5] p-2 rounded outline-orange-600' />
      </div>
      <div className="placeorder-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex flex-1 flex-col gap-5">
          <h1 className="text-xl">Cart Totals</h1>
          <div>
            <>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCartamount() + 2}</p>
              </div>
              <hr />
            </>
            <>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
            </>

            <>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Total</p>
                <p>{0}</p>
              </div>
              <hr />
            </>
          </div>
          <button className="text-white bg-orange-600 w-[max(15vw,200px)] p-3 font-sans mt-8 rounded">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default Placeorder
