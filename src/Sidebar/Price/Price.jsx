import React from 'react';
import Input from '../../components/Input';

const Price = ({ handleChange }) => {
    return (
        <div>
            <h2>Price</h2>

            <label className="flex items-center">
                <input
                    onClick={handleChange}
                    value=""
                    type="radio"
                    name="test2"
                    className="bg-slate-100 checked:bg-blue-400 ml-2 shadow-md w-5 h-5 outline-none"
                />
                <span className="px-1"></span>ALL
            </label>

            <Input
                handleChange={handleChange}
                value={50}
                title="$0 - $50"
                name="test2"
            />
            <Input
                handleChange={handleChange}
                value={100}
                title="$50 - $100"
                name="test2"
            />

            <Input
                handleChange={handleChange}
                value={150}
                title="$100 - $150"
                name="test2"
            />

            <Input
                handleChange={handleChange}
                value={200}
                title="Over $150"
                name="test2"
            />
        </div>
    );
};

export default Price;
