import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Weather from "./routes/Weather";
import About from "./routes/About";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import OpenWeather from "./apis/OpenWeather";

require('./assets/weather-icons/weather-icons.min.css')
require('./assets/weather-icons/weather-icons-wind.min.css')

const OW = new OpenWeather();

function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (!weather) {
      setTimeout(() => {
        OW.getWeather().then(setWeather)
      }, 2500)
    }
  }, [weather])

  useEffect(() => {
    console.log('[App] Weather Updated: ', weather)
  }, [weather])

  const updateWeather = () => OW.getWeather().then(setWeather)
  const updateLocation = () => OW.setLocation()

  return (
    <div className="App">
      <Router>
        <AppBar position="sticky">
          <Toolbar>
            <Link to="/">
              <Button style={{ color: "#FFF" }}>Home</Button>
            </Link>
            <Link to="/weather">
              <Button style={{ color: "#FFF" }}>Weather</Button>
            </Link>
            <Link to="/about">
              <Button style={{ color: "#FFF" }}>About</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/weather">
            <Weather 
              weather={weather} 
              onUpdateWeather={updateWeather} 
              onUpdateLocation={updateLocation} 
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
