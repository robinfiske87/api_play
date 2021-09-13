import React, { useState, useEffect } from "react"

// TODO: Check if necessary styles
import './App.css'

import AppHeader from "./parts/Header/AppHeader"
import AppBody from "./parts/Body/AppBody"

import customHooks from "./services/customHooks"


function App() {

  const [windowSize, setWindowSize] = useState(null)
  const [options, setOptions] = useState(null)
  const [view, setView] = useState('weatherView')
  const [selectedOption, setSelectedOption] = useState({
    selectedOption: {
      value: "Oslo",
      label: "Oslo",
      coordinates: { latitude: 59.9127, longitude: 10.7460 },
    },
  })

  const screenWidth = customHooks.useWindowSize().width

  useEffect(() => {
    if(screenWidth < 900){setWindowSize('small')}
    if(screenWidth < 1200 && screenWidth >= 900){setWindowSize('medium')}
    if(screenWidth >= 1600){setWindowSize('large')}
  }, [screenWidth])

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


  return (
    <div className="App">
      <AppHeader windowSize={windowSize} setView={setView} view={view}/>
      <AppBody
            selectedOption={selectedOption}
            options={options}
            handleChange={handleChange}
            windowSize={windowSize}
            view={view}
          />
    </div>
  );
}

export default App;
