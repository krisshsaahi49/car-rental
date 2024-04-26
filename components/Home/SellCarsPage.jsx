import React from 'react';
import SellCarForm from '../CarBooking/SellCarForm';

function SellCarsPage() {
  return (
    <div className='mt-5 mb-5 items-center justify-between'>
      <h2 id="sell-cars" className='text-[35px] font-bold'>Sell Your Car with Ease</h2>
      <h2 className='text-[20px] text-gray-500 pr-20 mt-5 mb-5 '>Ready to part ways with your car? Selling with us is simple and hassle-free. Just fill out the form below with details about your vehicle, and we'll take care of the rest. Whether it's a sedan, SUV, truck, or any other vehicle type, we're here to help you find the right buyer.
      </h2>
      <SellCarForm />
    </div>
  );
}

export default SellCarsPage;
