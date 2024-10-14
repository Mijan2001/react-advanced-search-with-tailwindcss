import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
    return (
        <section className="shadow-md rounded-md border w-[250px] h-[250px] p-3 ">
            <img
                src={img}
                alt={title}
                className="hover:scale-105 duration-200"
            />
            <div>
                <h3>{title}</h3>
                <section className="flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>{reviews}</span>
                </section>
                <span>
                    <del>{prevPrice}</del> {newPrice}
                </span>
                <BsFillBagHeartFill />
            </div>
        </section>
    );
};

export default Card;
