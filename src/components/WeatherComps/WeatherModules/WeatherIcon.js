import React from 'react'
import styles from './WeatherIcon.module.css'

import clearsky_day from "../../../projectAssets/weatherIcons/clearsky_day.svg"
import clearsky_night from "../../../projectAssets/weatherIcons/clearsky_night.svg"
import clearsky_polartwilight from "../../../projectAssets/weatherIcons/clearsky_polartwilight.svg"
import cloudy from "../../../projectAssets/weatherIcons/cloudy.svg"
import fair_day from "../../../projectAssets/weatherIcons/fair_day.svg"
import fair_night from "../../../projectAssets/weatherIcons/fair_night.svg"
import fair_polartwilight from "../../../projectAssets/weatherIcons/fair_polartwilight.svg"
import fog from "../../../projectAssets/weatherIcons/fog.svg"
import heavyrain from "../../../projectAssets/weatherIcons/heavyrain.svg"
import heavyrainandthunder from "../../../projectAssets/weatherIcons/heavyrainandthunder.svg"
import heavyrainshowersandthunder_day from "../../../projectAssets/weatherIcons/heavyrainshowersandthunder_day.svg"
import heavyrainshowersandthunder_night from "../../../projectAssets/weatherIcons/heavyrainshowersandthunder_night.svg"
import heavyrainshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/heavyrainshowersandthunder_polartwilight.svg"
import heavyrainshowers_day from "../../../projectAssets/weatherIcons/heavyrainshowers_day.svg"
import heavyrainshowers_night from "../../../projectAssets/weatherIcons/heavyrainshowers_night.svg"
import heavyrainshowers_polartwilight from "../../../projectAssets/weatherIcons/heavyrainshowers_polartwilight.svg"
import heavysleet from "../../../projectAssets/weatherIcons/heavysleet.svg"
import heavysleetandthunder from "../../../projectAssets/weatherIcons/heavysleetandthunder.svg"
import heavysleetshowersandthunder_day from "../../../projectAssets/weatherIcons/heavysleetshowersandthunder_day.svg"
import heavysleetshowersandthunder_night from "../../../projectAssets/weatherIcons/heavysleetshowersandthunder_night.svg"
import heavysleetshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/heavysleetshowersandthunder_polartwilight.svg"
import heavysleetshowers_day from "../../../projectAssets/weatherIcons/heavysleetshowers_day.svg"
import heavysleetshowers_night from "../../../projectAssets/weatherIcons/heavysleetshowers_night.svg"
import heavysleetshowers_polartwilight from "../../../projectAssets/weatherIcons/heavysleetshowers_polartwilight.svg"
import heavysnow from "../../../projectAssets/weatherIcons/heavysnow.svg"
import heavysnowandthunder from "../../../projectAssets/weatherIcons/heavysnowandthunder.svg"
import heavysnowshowersandthunder_day from "../../../projectAssets/weatherIcons/heavysnowshowersandthunder_day.svg"
import heavysnowshowersandthunder_night from "../../../projectAssets/weatherIcons/heavysnowshowersandthunder_night.svg"
import heavysnowshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/heavysnowshowersandthunder_polartwilight.svg"
import heavysnowshowers_day from "../../../projectAssets/weatherIcons/heavysnowshowers_day.svg"
import heavysnowshowers_night from "../../../projectAssets/weatherIcons/heavysnowshowers_night.svg"
import heavysnowshowers_polartwilight from "../../../projectAssets/weatherIcons/heavysnowshowers_polartwilight.svg"
import lightrain from "../../../projectAssets/weatherIcons/lightrain.svg"
import lightrainandthunder from "../../../projectAssets/weatherIcons/lightrainandthunder.svg"
import lightrainshowersandthunder_day from "../../../projectAssets/weatherIcons/lightrainshowersandthunder_day.svg"
import lightrainshowersandthunder_night from "../../../projectAssets/weatherIcons/lightrainshowersandthunder_night.svg"
import lightrainshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/lightrainshowersandthunder_polartwilight.svg"
import lightrainshowers_day from "../../../projectAssets/weatherIcons/lightrainshowers_day.svg"
import lightrainshowers_night from "../../../projectAssets/weatherIcons/lightrainshowers_night.svg"
import lightrainshowers_polartwilight from "../../../projectAssets/weatherIcons/lightrainshowers_polartwilight.svg"
import lightsleet from "../../../projectAssets/weatherIcons/lightsleet.svg"
import lightsleetandthunder from "../../../projectAssets/weatherIcons/lightsleetandthunder.svg"
import lightsleetshowers_day from "../../../projectAssets/weatherIcons/lightsleetshowers_day.svg"
import lightsleetshowers_night from "../../../projectAssets/weatherIcons/lightsleetshowers_night.svg"
import lightsleetshowers_polartwilight from "../../../projectAssets/weatherIcons/lightsleetshowers_polartwilight.svg"
import lightsnow from "../../../projectAssets/weatherIcons/lightsnow.svg"
import lightsnowandthunder from "../../../projectAssets/weatherIcons/lightsnowandthunder.svg"
import lightsnowshowers_day from "../../../projectAssets/weatherIcons/lightsnowshowers_day.svg"
import lightsnowshowers_night from "../../../projectAssets/weatherIcons/lightsnowshowers_night.svg"
import lightsnowshowers_polartwilight from "../../../projectAssets/weatherIcons/lightsnowshowers_polartwilight.svg"
import lightssleetshowersandthunder_day from "../../../projectAssets/weatherIcons/lightssleetshowersandthunder_day.svg"
import lightssleetshowersandthunder_night from "../../../projectAssets/weatherIcons/lightssleetshowersandthunder_night.svg"
import lightssleetshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/lightssleetshowersandthunder_polartwilight.svg"
import lightssnowshowersandthunder_day from "../../../projectAssets/weatherIcons/lightssnowshowersandthunder_day.svg"
import lightssnowshowersandthunder_night from "../../../projectAssets/weatherIcons/lightssnowshowersandthunder_night.svg"
import lightssnowshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/lightssnowshowersandthunder_polartwilight.svg"
import partlycloudy_day from "../../../projectAssets/weatherIcons/partlycloudy_day.svg"
import partlycloudy_night from "../../../projectAssets/weatherIcons/partlycloudy_night.svg"
import partlycloudy_polartwilight from "../../../projectAssets/weatherIcons/partlycloudy_polartwilight.svg"
import rain from "../../../projectAssets/weatherIcons/rain.svg"
import rainandthunder from "../../../projectAssets/weatherIcons/rainandthunder.svg"
import rainshowersandthunder_day from "../../../projectAssets/weatherIcons/rainshowersandthunder_day.svg"
import rainshowersandthunder_night from "../../../projectAssets/weatherIcons/rainshowersandthunder_night.svg"
import rainshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/rainshowersandthunder_polartwilight.svg"
import rainshowers_day from "../../../projectAssets/weatherIcons/rainshowers_day.svg"
import rainshowers_night from "../../../projectAssets/weatherIcons/rainshowers_night.svg"
import rainshowers_polartwilight from "../../../projectAssets/weatherIcons/rainshowers_polartwilight.svg"
import sleet from "../../../projectAssets/weatherIcons/sleet.svg"
import sleetandthunder from "../../../projectAssets/weatherIcons/sleetandthunder.svg"
import sleetshowersandthunder_day from "../../../projectAssets/weatherIcons/sleetshowersandthunder_day.svg"
import sleetshowersandthunder_night from "../../../projectAssets/weatherIcons/sleetshowersandthunder_night.svg"
import sleetshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/sleetshowersandthunder_polartwilight.svg"
import sleetshowers_day from "../../../projectAssets/weatherIcons/sleetshowers_day.svg"
import sleetshowers_night from "../../../projectAssets/weatherIcons/sleetshowers_night.svg"
import sleetshowers_polartwilight from "../../../projectAssets/weatherIcons/sleetshowers_polartwilight.svg"
import snow from "../../../projectAssets/weatherIcons/snow.svg"
import snowandthunder from "../../../projectAssets/weatherIcons/snowandthunder.svg"
import snowshowersandthunder_day from "../../../projectAssets/weatherIcons/snowshowersandthunder_day.svg"
import snowshowersandthunder_night from "../../../projectAssets/weatherIcons/snowshowersandthunder_night.svg"
import snowshowersandthunder_polartwilight from "../../../projectAssets/weatherIcons/snowshowersandthunder_polartwilight.svg"
import snowshowers_day from "../../../projectAssets/weatherIcons/snowshowers_day.svg"
import snowshowers_night from "../../../projectAssets/weatherIcons/snowshowers_night.svg"
import snowshowers_polartwilight from "../../../projectAssets/weatherIcons/snowshowers_polartwilight.svg"

const WeatherIcon = (props) => {
const { symbolCode } = props

  return(
      <div>
        {symbolCode === "clearsky_day" ? <div ><img className={styles['imgStyle']} src={clearsky_day} alt="clearsky_day"/></div> : <></>}
        {symbolCode === "clearsky_night" ? <div ><img className={styles['imgStyle']} src={clearsky_night} alt="clearsky_night"/></div> : <></>}
        {symbolCode === "clearsky_polartwilight" ? <div ><img className={styles['imgStyle']} src={clearsky_polartwilight} alt="clearsky_polartwilight"/></div> : <></>}
        {symbolCode === "cloudy" ? <div ><img className={styles['imgStyle']} src={cloudy} alt="cloudy"/></div> : <></>}
        {symbolCode === "fair_day" ? <div ><img className={styles['imgStyle']} src={fair_day} alt="fair_day"/></div> : <></>}
        {symbolCode === "fair_night" ? <div ><img className={styles['imgStyle']} src={fair_night} alt="fair_night"/></div> : <></>}
        {symbolCode === "fair_polartwilight" ? <div ><img className={styles['imgStyle']} src={fair_polartwilight} alt="fair_polartwilight"/></div> : <></>}
        {symbolCode === "fog" ? <div ><img className={styles['imgStyle']} src={fog} alt="fog"/></div> : <></>}
        {symbolCode === "heavyrain" ? <div ><img className={styles['imgStyle']} src={heavyrain} alt="heavyrain"/></div> : <></>}
        {symbolCode === "heavyrainandthunder" ? <div ><img className={styles['imgStyle']} src={heavyrainandthunder} alt="heavyrainandthunder"/></div> : <></>}
        {symbolCode === "heavyrainshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={heavyrainshowersandthunder_day} alt="heavyrainshowersandthunder_day"/></div> : <></>}
        {symbolCode === "heavyrainshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={heavyrainshowersandthunder_night} alt="heavyrainshowersandthunder_night"/></div> : <></>}
        {symbolCode === "heavyrainshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={heavyrainshowersandthunder_polartwilight} alt="heavyrainshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "heavyrainshowers_day" ? <div ><img className={styles['imgStyle']} src={heavyrainshowers_day} alt="heavyrainshowers_day"/></div> : <></>}
        {symbolCode === "heavyrainshowers_night" ? <div ><img className={styles['imgStyle']} src={heavyrainshowers_night} alt="heavyrainshowers_night"/></div> : <></>}
        {symbolCode === "heavyrainshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={heavyrainshowers_polartwilight} alt="heavyrainshowers_polartwilight"/></div> : <></>}
        {symbolCode === "heavysleet" ? <div ><img className={styles['imgStyle']} src={heavysleet} alt="heavysleet"/></div> : <></>}
        {symbolCode === "heavysleetandthunder" ? <div ><img className={styles['imgStyle']} src={heavysleetandthunder} alt="heavysleetandthunder"/></div> : <></>}
        {symbolCode === "heavysleetshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={heavysleetshowersandthunder_day} alt="heavysleetshowersandthunder_day"/></div> : <></>}
        {symbolCode === "heavysleetshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={heavysleetshowersandthunder_night} alt="heavysleetshowersandthunder_night"/></div> : <></>}
        {symbolCode === "heavysleetshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={heavysleetshowersandthunder_polartwilight} alt="heavysleetshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "heavysleetshowers_day" ? <div ><img className={styles['imgStyle']} src={heavysleetshowers_day} alt="heavysleetshowers_day"/></div> : <></>}
        {symbolCode === "heavysleetshowers_night" ? <div ><img className={styles['imgStyle']} src={heavysleetshowers_night} alt="heavysleetshowers_night"/></div> : <></>}
        {symbolCode === "heavysleetshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={heavysleetshowers_polartwilight} alt="heavysleetshowers_polartwilight"/></div> : <></>}
        {symbolCode === "heavysnow" ? <div ><img className={styles['imgStyle']} src={heavysnow} alt="heavysnow"/></div> : <></>}
        {symbolCode === "heavysnowandthunder" ? <div ><img className={styles['imgStyle']} src={heavysnowandthunder} alt="heavysnowandthunder"/></div> : <></>}
        {symbolCode === "heavysnowshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={heavysnowshowersandthunder_day} alt="heavysnowshowersandthunder_day"/></div> : <></>}
        {symbolCode === "heavysnowshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={heavysnowshowersandthunder_night} alt="heavysnowshowersandthunder_night"/></div> : <></>}
        {symbolCode === "heavysnowshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={heavysnowshowersandthunder_polartwilight} alt="heavysnowshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "heavysnowshowers_day" ? <div ><img className={styles['imgStyle']} src={heavysnowshowers_day} alt="heavysnowshowers_day"/></div> : <></>}
        {symbolCode === "heavysnowshowers_night" ? <div ><img className={styles['imgStyle']} src={heavysnowshowers_night} alt="heavysnowshowers_night"/></div> : <></>}
        {symbolCode === "heavysnowshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={heavysnowshowers_polartwilight} alt="heavysnowshowers_polartwilight"/></div> : <></>}
        {symbolCode === "lightrain" ? <div ><img className={styles['imgStyle']} src={lightrain} alt="lightrain"/></div> : <></>}
        {symbolCode === "lightrainandthunder" ? <div ><img className={styles['imgStyle']} src={lightrainandthunder} alt="lightrainandthunder"/></div> : <></>}
        {symbolCode === "lightrainshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={lightrainshowersandthunder_day} alt="lightrainshowersandthunder_day"/></div> : <></>}
        {symbolCode === "lightrainshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={lightrainshowersandthunder_night} alt="lightrainshowersandthunder_night"/></div> : <></>}
        {symbolCode === "lightrainshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={lightrainshowersandthunder_polartwilight} alt="lightrainshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "lightrainshowers_day" ? <div ><img className={styles['imgStyle']} src={lightrainshowers_day} alt="lightrainshowers_day"/></div> : <></>}
        {symbolCode === "lightrainshowers_night" ? <div ><img className={styles['imgStyle']} src={lightrainshowers_night} alt="lightrainshowers_night"/></div> : <></>}
        {symbolCode === "lightrainshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={lightrainshowers_polartwilight} alt="lightrainshowers_polartwilight"/></div> : <></>}
        {symbolCode === "lightsleet" ? <div ><img className={styles['imgStyle']} src={lightsleet} alt="lightsleet"/></div> : <></>}
        {symbolCode === "lightsleetandthunder" ? <div ><img className={styles['imgStyle']} src={lightsleetandthunder} alt="lightsleetandthunder"/></div> : <></>}
        {symbolCode === "lightsleetshowers_day" ? <div ><img className={styles['imgStyle']} src={lightsleetshowers_day} alt="lightsleetshowers_day"/></div> : <></>}
        {symbolCode === "lightsleetshowers_night" ? <div ><img className={styles['imgStyle']} src={lightsleetshowers_night} alt="lightsleetshowers_night"/></div> : <></>}
        {symbolCode === "lightsleetshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={lightsleetshowers_polartwilight} alt="lightsleetshowers_polartwilight"/></div> : <></>}
        {symbolCode === "lightsnow" ? <div ><img className={styles['imgStyle']} src={lightsnow} alt="lightsnow"/></div> : <></>}
        {symbolCode === "lightsnowandthunder" ? <div ><img className={styles['imgStyle']} src={lightsnowandthunder} alt="lightsnowandthunder"/></div> : <></>}
        {symbolCode === "lightsnowshowers_day" ? <div ><img className={styles['imgStyle']} src={lightsnowshowers_day} alt="lightsnowshowers_day"/></div> : <></>}
        {symbolCode === "lightsnowshowers_night" ? <div ><img className={styles['imgStyle']} src={lightsnowshowers_night} alt="lightsnowshowers_night"/></div> : <></>}
        {symbolCode === "lightsnowshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={lightsnowshowers_polartwilight} alt="lightsnowshowers_polartwilight"/></div> : <></>}
        {symbolCode === "lightssleetshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={lightssleetshowersandthunder_day} alt="lightssleetshowersandthunder_day"/></div> : <></>}
        {symbolCode === "lightssleetshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={lightssleetshowersandthunder_night} alt="lightssleetshowersandthunder_night"/></div> : <></>}
        {symbolCode === "lightssleetshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={lightssleetshowersandthunder_polartwilight} alt="lightssleetshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "lightssnowshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={lightssnowshowersandthunder_day} alt="lightssnowshowersandthunder_day"/></div> : <></>}
        {symbolCode === "lightssnowshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={lightssnowshowersandthunder_night} alt="lightssnowshowersandthunder_night"/></div> : <></>}
        {symbolCode === "lightssnowshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={lightssnowshowersandthunder_polartwilight} alt="lightssnowshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "partlycloudy_day" ? <div ><img className={styles['imgStyle']} src={partlycloudy_day} alt="partlycloudy_day"/></div> : <></>}
        {symbolCode === "partlycloudy_night" ? <div ><img className={styles['imgStyle']} src={partlycloudy_night} alt="partlycloudy_night"/></div> : <></>}
        {symbolCode === "partlycloudy_polartwilight" ? <div ><img className={styles['imgStyle']} src={partlycloudy_polartwilight} alt="partlycloudy_polartwilight"/></div> : <></>}
        {symbolCode === "rain" ? <div ><img className={styles['imgStyle']} src={rain} alt="rain"/></div> : <></>}
        {symbolCode === "rainandthunder" ? <div ><img className={styles['imgStyle']} src={rainandthunder} alt="rainandthunder"/></div> : <></>}
        {symbolCode === "rainshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={rainshowersandthunder_day} alt="rainshowersandthunder_day"/></div> : <></>}
        {symbolCode === "rainshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={rainshowersandthunder_night} alt="rainshowersandthunder_night"/></div> : <></>}
        {symbolCode === "rainshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={rainshowersandthunder_polartwilight} alt="rainshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "rainshowers_day" ? <div ><img className={styles['imgStyle']} src={rainshowers_day} alt="rainshowers_day"/></div> : <></>}
        {symbolCode === "rainshowers_night" ? <div ><img className={styles['imgStyle']} src={rainshowers_night} alt="rainshowers_night"/></div> : <></>}
        {symbolCode === "rainshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={rainshowers_polartwilight} alt="rainshowers_polartwilight"/></div> : <></>}
        {symbolCode === "sleet" ? <div ><img className={styles['imgStyle']} src={sleet} alt="sleet"/></div> : <></>}
        {symbolCode === "sleetandthunder" ? <div ><img className={styles['imgStyle']} src={sleetandthunder} alt="sleetandthunder"/></div> : <></>}
        {symbolCode === "sleetshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={sleetshowersandthunder_day} alt="sleetshowersandthunder_day"/></div> : <></>}
        {symbolCode === "sleetshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={sleetshowersandthunder_night} alt="sleetshowersandthunder_night"/></div> : <></>}
        {symbolCode === "sleetshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={sleetshowersandthunder_polartwilight} alt="sleetshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "sleetshowers_day" ? <div ><img className={styles['imgStyle']} src={sleetshowers_day} alt="sleetshowers_day"/></div> : <></>}
        {symbolCode === "sleetshowers_night" ? <div ><img className={styles['imgStyle']} src={sleetshowers_night} alt="sleetshowers_night"/></div> : <></>}
        {symbolCode === "sleetshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={sleetshowers_polartwilight} alt="sleetshowers_polartwilight"/></div> : <></>}
        {symbolCode === "snow" ? <div ><img className={styles['imgStyle']} src={snow} alt="snow"/></div> : <></>}
        {symbolCode === "snowandthunder" ? <div ><img className={styles['imgStyle']} src={snowandthunder} alt="snowandthunder"/></div> : <></>}
        {symbolCode === "snowshowersandthunder_day" ? <div ><img className={styles['imgStyle']} src={snowshowersandthunder_day} alt="snowshowersandthunder_day"/></div> : <></>}
        {symbolCode === "snowshowersandthunder_night" ? <div ><img className={styles['imgStyle']} src={snowshowersandthunder_night} alt="snowshowersandthunder_night"/></div> : <></>}
        {symbolCode === "snowshowersandthunder_polartwilight" ? <div ><img className={styles['imgStyle']} src={snowshowersandthunder_polartwilight} alt="snowshowersandthunder_polartwilight"/></div> : <></>}
        {symbolCode === "snowshowers_day" ? <div ><img className={styles['imgStyle']} src={snowshowers_day} alt="snowshowers_day"/></div> : <></>}
        {symbolCode === "snowshowers_night" ? <div ><img className={styles['imgStyle']} src={snowshowers_night} alt="snowshowers_night"/></div> : <></>}
        {symbolCode === "snowshowers_polartwilight" ? <div ><img className={styles['imgStyle']} src={snowshowers_polartwilight} alt="snowshowers_polartwilight"/></div> : <></>}
      </div>
  )


}
   
export default WeatherIcon

