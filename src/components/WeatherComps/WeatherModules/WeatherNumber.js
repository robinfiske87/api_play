import React from 'react'

const WeatherNumber = (props) => {
const { viewNumber, keyOfNumber, units } = props
  
  return(
      <div>
          <div>{viewNumber}{units} {keyOfNumber}</div>
      </div>
  )


}
   
export default WeatherNumber

