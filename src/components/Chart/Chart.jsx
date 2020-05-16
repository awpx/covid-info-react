import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

export const Chart = () => {
  const [ dailyData, setDailyData ] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }

    fetchAPI()
  }, []);

  console.log(dailyData)

  const lineChart = (
    dailyData[0]? (
      <Line 
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: 'orange',
            fill:true,
          },{
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill:true,
          }]
        }}
      />) : null
  );


  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

