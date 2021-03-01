import React from 'react';

const Cart = (props) => {
    const cartInfo=props.countryInfo;
    const totalPopulation=cartInfo.reduce((totalPopulation, country) =>totalPopulation+ country.population,0)
    return (
        <div>
            <h2>Total Country added:{cartInfo.length}</h2>
            <h2>Total Population: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;