import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import CarCardSkelton from './CarCardSkelton'
import BookingModal from '../CarBooking/BookingModal'
import BuyingModal from '../CarBooking/BuyingModal'

function CarsList(props) {
    const [isLoaded,setIsLoaded]=useState(true)
    const [selectedCar,setSelectedCar]=useState([]);
    useEffect(()=>{
        if(props.carsList)
        {
            setIsLoaded(false)
        }
    },[props.carsList])
  return (
    <div className='grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4 border-b'>
        {/* <CarCardSkelton/> */}
        {!isLoaded&&props.carsList.map((car,index)=>(
            <div key={index} 
            onClick={()=>{
              setSelectedCar(car)}}>
                <CarCard car={car} />
            </div>
        ))}
        {isLoaded?
        [1,2,3,4,5].map((item)=>(
          <CarCardSkelton/>  
        ))
        :null}

<dialog id="my_modal_4" className="modal">
  <BookingModal car={selectedCar} />
</dialog>

<dialog id="my_modal_5" className="modal">
  <BuyingModal car={selectedCar} />
</dialog>
    </div>
  )
}

export default CarsList