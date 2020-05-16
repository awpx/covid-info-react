import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Cards } from './components/Cards/Cards';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { Chart } from './components/Chart/Chart';
import { fetchData } from './api';

function App() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    async function fetchAPI() {
      let data = await fetchData()
      // response = await response.json()
      setData(data) 
      
    }
    fetchAPI()
  }, [])

  // console.log(data)

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
