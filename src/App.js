import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Cards } from './components/Cards/Cards';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { Chart } from './components/Chart/Chart';
import { fetchData } from './api';
import logo from './image/image.png'

function App() {
  const [ data, setData ] = useState(null);
  const [ countryPicked, setCountryPicked ] = useState('')

  useEffect(() => {
    async function fetchAPI() {
      const data = await fetchData()
      // response = await response.json()
      setData(data) 

    }
    fetchAPI()
  }, [])

  

  const handleCountryChange = async (country) => {
    const countryPicked = await fetchData(country)
    setCountryPicked(country)
    setData(countryPicked)

  }


  return (
    <div className={styles.container}>
      <img className={styles.image} src={logo} alt='logo' />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data} />
      
      <Chart data={data} countryPicked={countryPicked} />
    </div>
  );
}

export default App;
