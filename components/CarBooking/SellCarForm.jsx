import React, { useState, useEffect } from 'react';
import { createSellCar } from '@/api';
import ToastMsg from '@/components/ToastMsg';

function SellCarForm() {
    const today = new Date();
    const [showToastMsg, setShowToastMsg] = useState(false);
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        mileage: '',
        condition: '',
        price: '',
        appointment: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'year' || name === 'mileage' || name === 'price' ? parseInt(value, 10) : value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createSellCar(formData);
            // Clear form values
            setFormData({
                make: '',
                model: '',
                price: '',
                year: '',
                mileage: '',
                condition: '',
                appointment: '',
                image: '',
            });
            // Show toast message
            setShowToastMsg(true);
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    useEffect(() => {
        if (showToastMsg) {
            setTimeout(() => {
                setShowToastMsg(false);
            }, 4000);
        }
    }, [showToastMsg]);

    return (
        <div className='flex items-center justify-center'>
            <div className="bg-gray-100 p-6 rounded-lg w-1/3">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="make">Make</label>
                            <input
                                type="text"
                                placeholder="Toyota"
                                name="make"
                                value={formData.make}
                                onChange={handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="model">Model</label>
                            <input
                                type="text"
                                placeholder="Highlander"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="year">Year</label>
                            <input
                                type="number"
                                placeholder="2023"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="mileage">Mileage</label>
                            <input
                                type="number"
                                placeholder="75000"
                                name="mileage"
                                value={formData.mileage}
                                onChange={handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="condition">Condition</label>
                            <input
                                type="text"
                                placeholder="New"
                                name="condition"
                                value={formData.condition}
                                onChange={handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="price">Price</label>
                            <input
                                type="number"
                                placeholder="12500"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="appointment">Schedule Appointment</label>
                            <input
                                type="datetime-local"
                                min={today}
                                onChange={handleChange}
                                value={formData.appointment}
                                placeholder="Type here"
                                name="appointment"
                                className="input input-bordered w-full max-w-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600" htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                name="image"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {showToastMsg && <ToastMsg msg={'Request Quotation Sent Successfully!'} />}
        </div>
    );
}

export default SellCarForm;