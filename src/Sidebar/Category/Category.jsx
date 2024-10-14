import React from 'react';
import Input from '../../components/Input';

const Category = ({ handleChange }) => {
    return (
        <div>
            <h2>Category</h2>
            <div>
                <label className="flex items-center">
                    <input
                        onClick={handleChange}
                        value=""
                        type="radio"
                        name="test"
                        className="bg-slate-100 checked:bg-blue-400 ml-2 shadow-md w-5 h-5 outline-none"
                    />
                    <span className="px-1"></span>ALL
                </label>

                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />

                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />

                <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="Sandals"
                    name="test"
                />

                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />
            </div>
        </div>
    );
};

export default Category;
