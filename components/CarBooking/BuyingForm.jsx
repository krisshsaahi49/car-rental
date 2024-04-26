import React, { useContext, useEffect, useState } from 'react';
import { gql } from 'graphql-request';
import { createBuynow } from '@/api';
import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext';
import { useUser } from '@clerk/nextjs';

function BuyingForm({ car }) {
    const { isSignedIn, user, isLoaded } = useUser();
    if (!isLoaded) {
        return null;
    }

    const { setShowToastMsg } = useContext(BookCreatedFlagContext);
    const [formValue, setFormValue] = useState({
        address: '',
        mobile: '',
        userName: user.username,
        email: '', 
    });

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
                <label className="text-gray-400">Address</label>
                <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleChange}
                    name="address"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Mobile</label>
                <input
                    type="text"
                    placeholder="Type here"
                    onChange={handleChange}
                    name="mobile"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Email</label>
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

export default BuyingForm;

