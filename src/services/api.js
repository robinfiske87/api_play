import axios from 'axios'

const weatherUrl = 'https://api.met.no/weatherapi/locationforecast/2.0'
const repoApi = 'https://api.github.com/search/repositories?q=language:javascript&amp;sort=stars&amp;order=desc&amp;per_page=100'

const api = {
  getWeatherDataBasedOnLongAndLatCoords: async function(coordinates){
    let weatherData

    try {
      await axios
        .get(`${weatherUrl}/compact?lat=${coordinates.latitude}&lon=${coordinates.longitude}`)
        .then((response) => {
          weatherData = response.data
        })} 
      catch(error){
      console.log(
        `Error in getWeatherDataBasedOnLongAndLatCoords: ${error.code}`
      )
    }
    return weatherData
  },

  getMostUsedGitRepos: async function(){
    let repoData

    try {
      await axios
        .get(`${repoApi}`)
        .then((response) => {
            repoData = response.data
        })} 
      catch(error){
      console.log(
        `Error in getMostUsedGitRepos: ${error.code}`
      )
    }
    return repoData
  },

    

}

export default api
