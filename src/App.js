import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import { AppBar, Button, Toolbar} from "@material-ui/core"
import OpenWeather from "./apis/OpenWeather"

const OW = new OpenWeather();

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position='sticky'>
          <Toolbar>
            <Link to="/">
              <Button style={{ color: '#FFF' }}>
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button style={{ color: '#FFF' }}>
                About
              </Button>
            </Link>
          </Toolbar>
        </AppBar>  
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home openWeather={OW} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App