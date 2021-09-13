import React, { useState, useEffect } from 'react'
import styles from './WeatherForecastModule.module.css'
import { Grid } from '@material-ui/core'

import WeatherIcon from './WeatherIcon'
import WeatherNumber from './WeatherNumber'

const WeatherPanel = (props) => {
    const { weatherData, futureHours, descTitle } = props
    const [symbolCode, setSymbolCode] = useState('')
    const [temperature, setTemperature] = useState('')
    const [relativeHumidity, setRelativeHumidity] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [humidityUnit, setHumidityUnit] = useState('')
    const [windSpeedUnit, setWindSpeedUnit] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        if(weatherData?.weatherData !== null) {
            setSymbolCode(weatherData?.properties?.timeseries[futureHours]?.data?.next_1_hours?.summary?.symbol_code)
            setTemperature(Math.floor(weatherData?.properties?.timeseries[futureHours]?.data?.instant?.details?.air_temperature))
            setRelativeHumidity(weatherData?.properties?.timeseries[futureHours]?.data?.instant?.details?.relative_humidity)
            setWindSpeed(weatherData?.properties?.timeseries[futureHours]?.data?.instant?.details?.wind_speed)
            setHumidityUnit(weatherData?.properties?.meta?.units?.relative_humidity)
            setWindSpeedUnit(weatherData?.properties?.meta?.units?.wind_speed)
            setTime(weatherData?.properties?.timeseries[futureHours]?.time.substr(11,5))
        }
        
    }, [weatherData, futureHours])

    return (
        <div className={styles['forecastModule']}>
            <Grid container spacing={0} >
                <Grid item xs={9}>
                    <Grid item className={styles['descTitle']} xs={12}>
                        {temperature !== undefined ? <h5>{descTitle || time}</h5> : <></>}
                    </Grid>
                    <Grid item xs={12}>
                        {temperature !== undefined ? <WeatherNumber viewNumber={temperature} keyOfNumber={''} units={'°C'} />  : <></>}
                    </Grid>
                    <Grid item xs={12}>
                        {relativeHumidity !== undefined ?<WeatherNumber viewNumber={relativeHumidity} keyOfNumber={'humidity'} units={humidityUnit} /> : <></>}
                    </Grid>
                    <Grid item xs={12}>
                        {windSpeed !== undefined ? <WeatherNumber viewNumber={windSpeed} keyOfNumber={'ws'} units={windSpeedUnit} /> : <></>}
                    </Grid>
                </Grid>
                    {symbolCode !== undefined ? 
                        <Grid item xs={3}><div className={styles['weatherIcon']}><WeatherIcon symbolCode={symbolCode} /></div> </Grid> : <>
                    </>}
            </Grid>
        </div>
    )
}

export default WeatherPanel