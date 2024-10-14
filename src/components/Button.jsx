import React from 'react';

const Button = ({ onClickHandler, value, title }) => {
    return (
        <button
            value={value}
            onClick={onClickHandler}
            className="border rounded-md w-24 text-center shadow-md hover:bg-slate-200 hover:border-[1px] hover:border-gray-400"
        >
            {title}
        </button>
    );
};

export default Button;
