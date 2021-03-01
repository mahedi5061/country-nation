 import './App.css';
 import React, {useState, useEffect} from 'react';
 import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response =>response.json())
    .then(data =>setCountries(data))
  },[])
  const addEventHandler =(country)=>{
    const newCountry=[...countryInfo,country];
    setCountryInfo(newCountry);
  }
  return (
    <div className="App">
     <h1>Loader country: {countries.length}</h1>
     <Cart countryInfo={countryInfo} ></Cart>
     {
       countries.map(country =><Country country={country} addEventHandler={addEventHandler} ></Country> )
     }
    </div>
  );
}

export default App;
