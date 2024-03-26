import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Paginated from './pages/Paginated';
import Plan from './pages/Plan';
import Store from './pages/Store';
import Awards from './pages/Awards';
import Footer from './components/Footer';
import PlanProgress from './components/PlanProgress';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Switch>
              <Route path="/about" component={About}/>
              <Route exact path="/" component={Activity}/>
              <Route path="/paginated" component={Paginated}/>
              <Route path="/index_react.html" component={Activity}/>
              <Route path="/plan" component={Plan}/>
              <Route path="/store" component={Store}/>
              <Route path="/awards" component={Awards}/>
            </Switch>
            <PlanProgress />
            <Footer />
          </React.StrictMode>
      </BrowserRouter>
    );
  }
}

export default App;