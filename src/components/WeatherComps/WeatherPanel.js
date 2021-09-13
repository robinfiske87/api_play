import React, { useState, useEffect } from 'react'
import styles from './WeatherPanel.module.css'
import moment from 'moment'
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

import WeatherForecastModule from './WeatherModules/WeatherForecastModule'
import api from "../../services/api"
import customHooks from "../../services/customHooks"

const WeatherPanel = (props) => {
    const { selectedOption } = props
    const [weatherData, setWeatherData] = useState({ weatherData: null })
    const [weatherArrayPlacement, setWeatherArrayPlacement] = useState(0)
    const [thisDayArrayPlacementEnd, setThisDayArrayPlacementEnd] = useState(24)
    const [dayArray, setDayArray] = useState([])
    const [value, toggleValue] = customHooks.useToggle(false)
    const [refresh, toggleRefresh] = customHooks.useToggle(false)

    useEffect(() => {
        if (selectedOption !== null || undefined) {
          api
            .getWeatherDataBasedOnLongAndLatCoords(
              selectedOption?.selectedOption?.coordinates
            )
            .then((result) => {
              setWeatherData(result)
            })
        }
      }, [selectedOption, value, refresh])

    
      function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

      customHooks.useInterval(() => {
        if (selectedOption !== null || undefined) {
          api
            .getWeatherDataBasedOnLongAndLatCoords(
              selectedOption?.selectedOption?.coordinates
            )
            .then((result) => {
              setWeatherData(result)
            })
        }
      }, 30000, 10)

      useEffect(() => {
        if(weatherData !== undefined || weatherData !== null){
          let nowAnswer = undefined  
          let thisDayEndAnswer = undefined  
          const nowTime  = moment().format('YYYY-MM-DDTHH') +':00:00Z'
          const endTime  = moment().format('YYYY-MM-DDT') +'23:00:00Z'
          if(Array.isArray(weatherData?.properties?.timeseries) === true){
            nowAnswer = findWithAttr(weatherData?.properties?.timeseries, 'time', nowTime)
          }
          if(Array.isArray(weatherData?.properties?.timeseries) === true){
            thisDayEndAnswer = findWithAttr(weatherData?.properties?.timeseries, 'time', endTime)
          }
          if(nowAnswer){setWeatherArrayPlacement(nowAnswer)}
          if(thisDayEndAnswer){setThisDayArrayPlacementEnd(thisDayEndAnswer)}
          
        }
      }, [weatherData])

      const refreshData = () => {
        toggleRefresh()
        console.log(weatherData)
      }

      useEffect(() => {
        let array = []
        for (let i = weatherArrayPlacement; i <= thisDayArrayPlacementEnd; i++) {
          array.push(i)
        }
        setDayArray(array)
      }, [weatherArrayPlacement, thisDayArrayPlacementEnd])
      

    return (
        <div className={styles['weatherPanel']}>
          <button className={styles['button']} onClick={refreshData}>Refresh data</button>

          {value === false && <h4 className={styles['title']} onClick={toggleValue}>{selectedOption?.selectedOption?.label} <HiChevronRight /> </h4>}
          {value && <h4 className={styles['title']} onClick={toggleValue}>{selectedOption?.selectedOption?.label} <HiChevronDown /></h4>}
          {dayArray.map((obj)=>{
            if(obj % 6 === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(dayArray.indexOf(obj) === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(value){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
          })}
            {(weatherData !== undefined) && <a className={styles['liscence']} rel="license" href="https://www.met.no/en/free-meteorological-data/Licensing-and-crediting">(Data from MET Norway)</a>}
        </div>
    )
}

export default WeatherPanel