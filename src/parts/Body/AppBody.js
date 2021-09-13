import React, { useState, useEffect } from 'react'
import styles from './AppBody.module.css'
import Select from 'react-select'

import WeatherPanel from '../../components/WeatherComps/WeatherPanel'

const AppBody = (props) => {
    const { windowSize, view } = props

    const [options, setOptions] = useState(null)
    const [selectedOption, setSelectedOption] = useState({
    selectedOption: {
      value: "Oslo",
      label: "Oslo",
      coordinates: { latitude: 59.9127, longitude: 10.7460 },
    },
  })

    useEffect(() => {
        // TODO: Get select list of locations from API
        setOptions([
          {
            value: "Oslo",
            label: "Oslo",
            coordinates: { latitude: 59.9127, longitude: 10.7460 },
          },
          {
            value: "Drammen",
            label: "Drammen",
            coordinates: { latitude: 59.7438, longitude: 10.2044 },
          },
          {
            value: "Porsgrunn",
            label: "Porsgrunn",
            coordinates: { latitude: 59.1316, longitude: 9.6466 },
          },
          {
            value: "Bergen",
            label: "Bergen",
            coordinates: { latitude: 60.3932, longitude: 5.3245 },
          },
          {
            value: "Stavanger",
            label: "Stavanger",
            coordinates: { latitude: 58.9689, longitude: 5.7294 },
          },
          {
            value: "Røros",
            label: "Røros",
            coordinates: { latitude: 62.5746, longitude: 11.3841 },
          },
          {
            value: "Trondheim",
            label: "Trondheim",
            coordinates: { latitude: 63.4304, longitude: 10.3950 },
          },
        ])
      }, [])
    
      const handleChange = (selectedOption) => {
        setSelectedOption({ selectedOption })
      }

    if(windowSize === 'medium' && view === 'weatherView'){
        return (
            <div className={styles['body']}>
                <div className={styles['selectCity']}>Select City for Live Weather Forecast: 
                    <Select className={styles['reactSimpleDropDownMenu']} placeholder='Oslo' options={options} value={selectedOption.label} onChange={handleChange} />
                </div>
                <div className={styles['weatherPanel']}>
                    <WeatherPanel selectedOption={selectedOption} />
                </div>
            </div>
        )
    }
    if(windowSize === 'small' && view === 'weatherView'){
        return (
            <div className={styles['body']}>
                <div className={styles['selectCity-smaller']}>Select City for Live Weather Forecast: 
                    <Select className={styles['reactSimpleDropDownMenu']} placeholder='Oslo' options={options} value={selectedOption.label} onChange={handleChange} />
                </div>
                <div className={styles['weatherPanel']}>
                    <WeatherPanel selectedOption={selectedOption} />
                </div>
            </div>
        )
    }
    if(windowSize === 'large' && view === 'weatherView'){
        return (
            <div className={styles['body']}>
                <div className={styles['selectCity']}>Select City for Live Weather Forecast: 
                    <Select className={styles['reactSimpleDropDownMenu']} placeholder='Oslo' options={options} value={selectedOption.label} onChange={handleChange} />
                </div>
                <div className={styles['weatherPanel']}>
                    <WeatherPanel selectedOption={selectedOption} />
                </div>
            </div>
        )
    }
    else {return (
        <div className={styles['body']}></div>)
    }
}


export default AppBody