import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

export const Chart = ({ data , countryPicked }) => {
  console.log(countryPicked)

  const [ dailyData, setDailyData ] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }

    fetchAPI()
  }, []);

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

  if(countryPicked) {
    const dataCountry = data;

    var barChart = (
      <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [ 'orange', 'lime', 'orangered' ],
            data: [ dataCountry.confirmed.value, dataCountry.recovered.value, dataCountry.deaths.value ]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display:true, text: `Current data in ${countryPicked}` },
        }}
      />
    )
  }

  // const barChart = (
  //   dataCountry.confirmed ? (
  //     <Bar 
  //       data={{
  //         labels: ['Infected', 'Recovered', 'Deaths'],
  //         datasets: [{
  //           label: 'People',
  //           backgroundColor: [ 'orange', 'lime', 'orangered' ],
  //           data: [ dataCountry.confirmed.value, dataCountry.recovered.value, dataCountry.deaths.value ]
  //         }]
  //       }}
  //       options={{
  //         legend: { display: false },
  //         title: { display:true, text: `Current data in ${countryPicked}` },
  //       }}
  //     />
  //   ) : null
  // );


  return (
    <div className={styles.container}>
      { countryPicked ? barChart : lineChart}
    </div>
  )
}

