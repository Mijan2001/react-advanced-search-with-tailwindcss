import React from 'react';
import Button from '../components/Button';

const Recommended = ({ handleClick }) => {
    return (
        <div className="w-11/12 flex justify-center">
            <div className="w-11/12 flex justify-center flex-col space-y-5 p-5">
                <h2>Recommended</h2>
                <div className="flex gap-2">
                    <Button
                        onClickHandler={handleClick}
                        value=""
                        title="All Products"
                    />

                    <Button
                        onClickHandler={handleClick}
                        value="Nike"
                        title="Nike"
                    />

                    <Button
                        onClickHandler={handleClick}
                        value="Adidas"
                        title="Adidas"
                    />

                    <Button
                        onClickHandler={handleClick}
                        value="Puma"
                        title="Puma"
                    />

                    <Button
                        onClickHandler={handleClick}
                        value="Vans"
                        title="Vans"
                    />
                </div>
            </div>
        </div>
    );
};

export default Recommended;
