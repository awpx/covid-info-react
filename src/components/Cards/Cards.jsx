import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

export const Cards = (props) => {
  if(!props.data) {
    return 'loading...'
  }

  const data = {
    confirmed: props.data.confirmed.value,
    recovered: props.data.recovered.value,
    deaths: props.data.deaths.value,
    lastUpdate: props.data.lastUpdate,
  }
  

	return (
		<div className={styles.container}>
			<Grid container spacing={4} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>
              <CountUp 
                start={0}
                end={data.confirmed}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>Number of Active Cases </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp 
                start={0}
                end={data.recovered}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>Number of Recovered</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp 
                start={0}
                end={data.deaths}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
		</div>
	)
}
