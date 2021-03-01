/* eslint-disable no-undef */
import React from 'react';
import './Country.css';

const Country = (props) => {
      const {name,flag} = props.country;
      const handleAdd=props.addEventHandler;
          return (
        <div className="country">
        <div className="country-info">
            <h2>{name}</h2>
            
            <img src={flag} alt=""/>
            <button onClick={()=>handleAdd(props.country)}>Added Country</button>
        </div>
        
        </div>
    );
};

export default Country;