import React, { useState, useEffect } from "react"

// TODO: Check if necessary styles
import './App.css'

import AppHeader from "./parts/Header/AppHeader"
import AppBody from "./parts/Body/AppBody"

import customHooks from "./services/customHooks"


function App() {

  const [windowSize, setWindowSize] = useState(null)
  const [view, setView] = useState('weatherView')

  const screenWidth = customHooks.useWindowSize().width

  useEffect(() => {
    if(screenWidth < 900){setWindowSize('small')}
    if(screenWidth < 1200 && screenWidth >= 900){setWindowSize('medium')}
    if(screenWidth >= 1600){setWindowSize('large')}
  }, [screenWidth])


  return (
    <div className="App">
      <AppHeader windowSize={windowSize} setView={setView} view={view}/>
      <AppBody
            windowSize={windowSize}
            view={view}
          />
    </div>
  );
}

export default App;
