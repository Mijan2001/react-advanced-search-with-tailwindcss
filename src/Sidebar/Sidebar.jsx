import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = ({ handleChange }) => {
    // console.log('Side : ', handleChange);
    return (
        <>
            <section className="w-full h-screen border mt-10 p-5 rounded-md">
                <div>
                    <h1>
                        <FaCartShopping />
                    </h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    );
};

export default Sidebar;
