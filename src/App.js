import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Home from './Components/Home/index';
import Services from './Components/Services/index';
import Destinations from './Components/Destinations/all';
import Destination from './Components/Destinations/individual';
import About from './Components/About/index';
import Contact from './Components/Contact/index';
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'                   component={Home} />
          <Route exact path='/services'           component={Services} />
          <Route exact path='/destinations'       component={Destinations} />
          <Route exact path='/destinations/:name' component={({ match }) => <Destination name={match.params.name} />} />
          <Route exact path='/about'              component={About} />
          <Route exact path='/contact'            component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
