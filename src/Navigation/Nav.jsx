import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

const Nav = ({ handleInputChange }) => {
    return (
        <nav className="flex justify-center my-10">
            <div className="w-11/12 flex justify-between">
                <div>
                    <input
                        onChange={handleInputChange}
                        type="search"
                        placeholder="Enter Search"
                        className="border border-gray-400 outline-none rounded-md p-2 focus:ring-[1px] focus:ring-gray-500 focus:outline-none"
                    />
                </div>
                <div className="flex justify-center gap-5">
                    <a href="">
                        <FiHeart className="text-2xl" />
                    </a>
                    <a href="">
                        <AiOutlineShoppingCart className="text-2xl" />
                    </a>
                    <a href="">
                        <AiOutlineUserAdd className="text-2xl" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
