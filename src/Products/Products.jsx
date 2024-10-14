import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
import Card from '../components/Card';

const Products = ({ result }) => {
    return (
        <>
            <div className="w-11/12 mx-auto">
                <section className="flex w-full flex-wrap gap-3 justify-start">
                    {result}
                </section>
            </div>
        </>
    );
};

export default Products;
