import React, { useState, useEffect } from 'react';
import { createSellCar } from '@/api';
import ToastMsg from '@/components/ToastMsg'

function SellCarForm() {
    const [showToastMsg, setShowToastMsg] = useState(false);
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '', 
        mileage: '', 
        condition: '',
        price:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'year' || name === 'mileage' || name === 'price' ? parseInt(value, 10) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await createSellCar(formData);
            console.log(resp);
            if (resp) {
                // Clear form values
                setFormData({
                    make: '',
                    model: '',
                    price: '',
                    year: '',
                    mileage: '',
                    condition: '',
                });
                // Show toast message
                setShowToastMsg(true);
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    useEffect(() => {
        if (showToastMsg) {
            setTimeout(function () {
                setShowToastMsg(false)
            }, 4000);
        }
    }, [showToastMsg])

    return (
        <div className='flex items-center justify-center'>
            <div className="bg-gray-100 p-6 rounded-lg w-1/3">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-gray-600">Make</label>
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
                        <label className="text-gray-600">Model</label>
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
                        <label className="text-gray-600">Year</label>
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
                        <label className="text-gray-600">Mileage</label>
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
                        <label className="text-gray-600">Condition</label>
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
                        <label className="text-gray-600">Price</label>
                        <input
                            type="number"
                            placeholder="12500"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {showToastMsg ? <ToastMsg msg={'Request Quotation Sent Successfully!'} /> : null}

        </div>
    );
}

export default SellCarForm;
