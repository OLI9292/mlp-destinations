import React, { Component } from "react"
import { Redirect } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from "react-router"

import Home from "./Components/Home/index"
import Services from "./Components/Services/index"
import Destinations from "./Components/Destinations/all"
import Destination from "./Components/Destinations/individual"
import About from "./Components/About/index"
import Contact from "./Components/Contact/index"
// import Stories from "./Components/Stories/index"
import "./index.css"
import { PHONE_MAX_WIDTH } from "./Library/breakpoints"

class App extends Component {
  componentDidMount() {
    window.isMobile = document.documentElement.clientWidth < PHONE_MAX_WIDTH
    this.forceUpdate()
    window.addEventListener("resize", this.resize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this))
  }

  resize() {
    window.isMobile = document.documentElement.clientWidth < PHONE_MAX_WIDTH
    this.forceUpdate()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/travel" component={Services} />
          <Route exact path="/destinations" component={Destinations} />
          <Route exact path="/destinations/:name" component={({ match }) => <Destination name={match.params.name} />} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/stories" component={Stories} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
