import React from 'react'
import styles from './AppBody.module.css'
import Select from 'react-select'

import WeatherPanel from '../../components/WeatherComps/WeatherPanel'

const AppBody = (props) => {
    const { windowSize, selectedOption, options, handleChange, view } = props

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