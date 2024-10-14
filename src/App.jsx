import { useState } from 'react';
import Home from './components/Home';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Category from './Sidebar/Category/Category';
import Card from './components/Card';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // input filter ............
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        setQuery(e.target.value);
    };

    const filteredItems = products.filter(
        product =>
            product.title
                .toLocaleLowerCase()
                .indexOf(query.toLocaleLowerCase()) !== -1
    );

    // Radio button filter ............
    const handleChange = e => {
        setSelectedCategory(e.target.value);
    };

    const handleClick = e => {
        setSelectedCategory(e.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;
        if (query) {
            filteredProducts = filteredItems;
        }
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, newPrice, prevPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    newPrice={newPrice}
                    prevPrice={prevPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <>
            {/* <Home /> */}
            <div className="flex w-11/12 mx-auto ">
                <div className="sm:w-[40%] w-[30%]">
                    <Sidebar handleChange={handleChange} />
                </div>
                <div className="w-full">
                    <Nav handleInputChange={handleInputChange} />
                    <Recommended handleClick={handleClick} />
                    <Products result={result} />
                </div>
            </div>
        </>
    );
}

export default App;
