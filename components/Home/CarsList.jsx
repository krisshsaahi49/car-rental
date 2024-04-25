import React from 'react'
import CarCard from '@/components/Home/CarCard'

function CarsList(props) {
    return (
        <div className='grid grid-cols-2 
        md:grid-cols-3
        lg:grid-cols-4'>
            {props.carsList.map((car, index) => (
                <div>
                    <CarCard car={car} />
                </div>
            ))}
        </div>
    )
}

export default CarsList