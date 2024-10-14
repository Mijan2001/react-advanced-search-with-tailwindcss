import React from 'react';
import Input from '../../components/Input';

const Colors = ({ handleChange }) => {
    // console.log(handleChange);
    return (
        <div>
            <h2>Colors</h2>

            <label className="flex items-center">
                <input
                    onClick={handleChange}
                    value=""
                    type="radio"
                    name="test1"
                    className="bg-slate-100 checked:bg-blue-400 ml-2 shadow-md w-5 h-5 outline-none"
                />
                <span className="px-1"></span>ALL
            </label>

            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
                color="black"
            />

            <Input
                handleChange={handleChange}
                value="blue"
                title="Blue"
                name="test1"
                color="blue"
            />

            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test1"
                color="red"
            />

            <Input
                handleChange={handleChange}
                value="green"
                title="Green"
                name="test1"
                color="Green"
            />

            <label>
                <input
                    onClick={handleChange}
                    value="white"
                    type="radio"
                    name="test1"
                    className="bg-slate-100 checked:bg-blue-400 ml-2 shadow-md w-5 h-5 outline-none"
                />
                <span
                    style={{
                        background: 'white',
                        boder: '2px solid black'
                    }}
                    className="px-1"
                ></span>
                White
            </label>
        </div>
    );
};

export default Colors;
