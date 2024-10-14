import React from 'react';

const Input = ({ handleChange, value, title, name, color }) => {
    // console.log(handleChange);
    return (
        <label className="flex items-center">
            <input
                onChange={handleChange}
                value={value}
                type="radio"
                name={name}
                className="bg-slate-100 checked:bg-blue-400 ml-2 shadow-md w-5 h-5 outline-none"
            />
            <span style={{ backgroundColor: color }} className="px-1"></span>
            {title}
        </label>
    );
};

export default Input;
