import React, { useState, useEffect } from 'react'
import styles from './AppHeader.module.css'
import moment from 'moment'

import customHooks from "../../services/customHooks"

const AppHeader = (props) => {
    const { windowSize, setView } = props
    const [time, setTime] = useState()
    const [date, setDate] = useState()
    

    useEffect(() => {
        setTime(moment().format('HH:mm:ss'))
        setDate(moment().format('DD.MM.YYYY'))
    }, [])

    customHooks.useInterval(() => {
        setTime(moment().format('HH:mm:ss'))
        setDate(moment().format('DD.MM.YYYY'))
    }, 900, 10)

    const changeToRepoView = () => {
        setView('repoView')
    }
    const changeToWeatherView = () => {
        setView('weatherView')
    }
    
    if(windowSize === 'small'){
        return (
            <header className={styles['Header-small']}>
                <div className={styles['viewButton-small']}>
                    <button className={styles['button']} onClick={changeToWeatherView}>Weather View</button>
                    <button className={styles['button']} onClick={changeToRepoView}>Repository Overview</button>
                </div>
                <div className={styles['DateTimeArea-small']}>
                    <span className={styles['dataTime']}>{time} - </span>
                    <span className={styles['dataDate']}>{date}</span>
                </div>
            </header>
        )
    }
    if(windowSize === 'medium'){
        return (
            <header className={styles['Header-medium']}>
                <div className={styles['viewButton-medium']}>
                    <button className={styles['button']} onClick={changeToWeatherView}>Weather View</button>
                    <button className={styles['button']} onClick={changeToRepoView}>Repository Overview</button>
                </div>
                <div className={styles['DateTimeArea-medium']}>
                    <div className={styles['dataTime']}>{time}</div>
                    <div className={styles['dataDate']}>{date}</div>
                </div>
            </header>
        )
    }
    if(windowSize === 'large' || windowSize === undefined){
        return (
            <header className={styles['Header']}>
                <div className={styles['viewButton']}>
                    <button className={styles['button']} onClick={changeToWeatherView}>Weather View</button>
                    <button className={styles['button']} onClick={changeToRepoView}>Repository Overview</button>
                </div>
                <div className={styles['DateTimeArea']}>
                    <div className={styles['dataTime']}>{time}</div>
                    <div className={styles['dataDate']}>{date}</div>
                </div>
            </header>
        )
    }
    else {return (
        <div className={styles['Header']}></div>)
    }
}

export default AppHeader