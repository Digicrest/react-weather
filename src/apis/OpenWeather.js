// default location set to Tokyo, if location access is denied, uses this.
const DEFAULT_LOCATION = { 
  coords: {
    latitude: 35.6679175, 
    longitude: 139.4600034
  }
}

export default class OpenWeather {
  constructor() {
    this.location = DEFAULT_LOCATION
    this.API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
  }

  async makeRequest(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json
  }

  async getWeather() {
    let url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.set("lat", this.location.coords.latitude);
    url.searchParams.set("lon", this.location.coords.longitude);
    url.searchParams.set("lang", navigator.language || "en");
    url.searchParams.set("appid", this.API_KEY);
    url.searchParams.set("units", "metric");

    const weatherJSON = await this.makeRequest(url)
    return weatherJSON
  } 

  setLocation() {
    // Update Location
    navigator.geolocation.getCurrentPosition(position => {
      this.location = position
    }, error => {
      this.location = DEFAULT_LOCATION
      console.error(error.message)
    })
    
    // Update Weather
    this.getWeather()
  }
}