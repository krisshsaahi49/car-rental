import React, { useContext, useEffect, useState } from 'react';
import { createBuynow } from '@/api';
import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext';
import { useUser } from '@clerk/nextjs';
import PropTypes from 'prop-types';

function BuyingForm({ car }) {
    const { user, isLoaded } = useUser();
    const { setShowToastMsg } = useContext(BookCreatedFlagContext);

    const [formValue, setFormValue] = useState({
        address: '',
        mobile: '',
        userName: '',
        email: '', 
    });

    useEffect(() => {
        if (isLoaded) {
            setFormValue(prevFormValue => ({
                ...prevFormValue,
                userName: user?.username || '',
            }));
        }
    }, [isLoaded, user]);

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        console.log(formValue);
        const resp = await createBuynow(formValue);
        console.log(resp);
        if (resp) {
            setShowToastMsg(true);
        }
    };

    return (
        <div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400" htmlFor='address'>Address</label>
                <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleChange}
                    name="address"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400" htmlFor='mobile'>Mobile</label>
                <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleChange}
                    name="mobile"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400" htmlFor='email'>Email</label>
                <input
                    type="email"
                    placeholder="Type here"
                    onChange={handleChange}
                    name="email"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="modal-action">
                <button className="btn" onClick={handleSubmit}>
                    Close
                </button>
                <button
                    className="btn bg-blue-500 text-white hover:bg-blue-800"
                    onClick={handleSubmit}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
}

BuyingForm.propTypes = {
    car: PropTypes.object.isRequired
};

export default BuyingForm;