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
    const [weatherArrayPlacement, setWeatherArrayPlacement] = useState(null)
    const [thisDayArrayPlacementEnd, setThisDayArrayPlacementEnd] = useState(null)
    const [secondDayArrayPlacementBegin, setSecondDayArrayPlacementBegin] = useState(null)
    const [thirdDayArrayPlacementBegin, setThirdDayArrayPlacementBegin] = useState(null)
    const [dayArray, setDayArray] = useState([])
    const [secondDayArray, setSecondDayArray] = useState([])
    const [thirdDayArray, setThirdDayArray] = useState([])
    const [valueFirst, toggleFirstValue] = customHooks.useToggle(false)
    const [valueSecond, toggleSecondValue] = customHooks.useToggle(false)
    const [valueThird, toggleThirdValue] = customHooks.useToggle(false)
    const [refresh, toggleRefresh] = customHooks.useToggle(false)

    // get data from API
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
      }, [selectedOption, refresh])

    
      // function to identify index in array based on value and attribute
      function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    // Regular polling of API to adjust for changes in data and time of day
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

      // make relevant index-assignments for subsequently mapping out relevant data based on asignments
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
          if(thisDayEndAnswer){setSecondDayArrayPlacementBegin(thisDayEndAnswer + 1)}
          if(thisDayEndAnswer){setThirdDayArrayPlacementBegin(thisDayEndAnswer +25)}
          
        }
      }, [weatherData])


      const refreshData = () => {
        toggleRefresh()
        console.log(weatherData)
      }

      // Make arrays with relevant indexes for mapping out correct weatherData
      useEffect(() => {
        let array = []
        let arraySecond = []
        let endSecond = secondDayArrayPlacementBegin + 23
        let endThird = thirdDayArrayPlacementBegin + 23
        let arrayThird = []
        for (let i = weatherArrayPlacement; i <= thisDayArrayPlacementEnd; i++) {
          array.push(i)
        }
        for (let i = secondDayArrayPlacementBegin; i <= endSecond; i++) {
          arraySecond.push(i)
        }
        for (let i = thirdDayArrayPlacementBegin; i <= endThird; i++) {
          arrayThird.push(i)
        }
        setDayArray(array)
        setSecondDayArray(arraySecond)
        setThirdDayArray(arrayThird)
      }, [weatherArrayPlacement, thisDayArrayPlacementEnd, secondDayArrayPlacementBegin, thirdDayArrayPlacementBegin])
      

      // TODO: Make modules for the three different weatherData-segments below
    return (
        <div className={styles['weatherPanel']}>
          <button className={styles['button']} onClick={refreshData}>Refresh data</button>

          {valueFirst === false && dayArray.length >= 0 && <h4 className={styles['title']} onClick={toggleFirstValue}>{selectedOption?.selectedOption?.label} {weatherData?.properties?.timeseries[dayArray[0]]?.time.substr(8,2)}.{weatherData?.properties?.timeseries[dayArray[0]]?.time.substr(5,2)}-{weatherData?.properties?.timeseries[dayArray[0]]?.time.substr(0,4)}<HiChevronRight /> </h4>}
          {valueFirst === true && dayArray.length >= 0 && <h4 className={styles['title']} onClick={toggleFirstValue}>{selectedOption?.selectedOption?.label} {weatherData?.properties?.timeseries[dayArray[0]]?.time.substr(8,2)}.{weatherData?.properties?.timeseries[dayArray[0]]?.time.substr(5,2)}-{weatherData?.properties?.timeseries[dayArray[0]]?.time.substr(0,4)} <HiChevronDown /></h4>}
          {dayArray.map((obj)=>{
            if(obj % 6 === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(dayArray.indexOf(obj) === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(valueFirst){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
          })}
          {valueSecond === false && secondDayArray.length >= 0 && <h4 className={styles['title']} onClick={toggleSecondValue}>{selectedOption?.selectedOption?.label} {weatherData?.properties?.timeseries[secondDayArray[0]]?.time.substr(8,2)}.{weatherData?.properties?.timeseries[secondDayArray[0]]?.time.substr(5,2)}-{weatherData?.properties?.timeseries[secondDayArray[0]]?.time.substr(0,4)}<HiChevronRight /> </h4>}
          {valueSecond === true && secondDayArray.length >= 0 && <h4 className={styles['title']} onClick={toggleSecondValue}>{selectedOption?.selectedOption?.label} {weatherData?.properties?.timeseries[secondDayArray[0]]?.time.substr(8,2)}.{weatherData?.properties?.timeseries[secondDayArray[0]]?.time.substr(5,2)}-{weatherData?.properties?.timeseries[secondDayArray[0]]?.time.substr(0,4)} <HiChevronDown /></h4>}
          {secondDayArray.map((obj)=>{
            if(obj % 6 === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(secondDayArray.indexOf(obj) === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(valueSecond){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
          })}
          {valueThird === false && thirdDayArray.length >= 0 && <h4 className={styles['title']} onClick={toggleThirdValue}>{selectedOption?.selectedOption?.label} {weatherData?.properties?.timeseries[thirdDayArray[0]]?.time.substr(8,2)}.{weatherData?.properties?.timeseries[thirdDayArray[0]]?.time.substr(5,2)}-{weatherData?.properties?.timeseries[thirdDayArray[0]]?.time.substr(0,4)}<HiChevronRight /> </h4>}
          {valueThird === true && thirdDayArray.length >= 0 && <h4 className={styles['title']} onClick={toggleThirdValue}>{selectedOption?.selectedOption?.label} {weatherData?.properties?.timeseries[thirdDayArray[0]]?.time.substr(8,2)}.{weatherData?.properties?.timeseries[thirdDayArray[0]]?.time.substr(5,2)}-{weatherData?.properties?.timeseries[thirdDayArray[0]]?.time.substr(0,4)} <HiChevronDown /></h4>}
          {thirdDayArray.map((obj)=>{
            if(obj % 6 === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(thirdDayArray.indexOf(obj) === 0){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
            if(valueThird){return <WeatherForecastModule futureHours={obj} key={`weatherPanelNR:${obj}`} weatherData={weatherData} />}
          })}
            {(weatherData !== undefined) && <a className={styles['liscence']} rel="license" href="https://www.met.no/en/free-meteorological-data/Licensing-and-crediting">(Data from MET Norway)</a>}
        </div>
    )
}

export default WeatherPanel