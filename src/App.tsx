import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Paginated from './pages/Paginated';
import Planner from './pages/Planner';
import Store from './pages/Store';
import Awards from './pages/Awards';
import Footer from './components/Footer';
import Progress from './components/Progress';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Progress />
            <Switch>
              <Route path="/about" component={ About }/>
              <Route path="/" component={ Activity } exact />
              <Route path="/paginated" component={ Paginated }/>
              <Route path="/index_react.html" component={ Activity }/>
              <Route path="/plan" component={ Planner }/>
              <Route path="/store" component={ Store }/>
              <Route path="/awards" component={ Awards }/>
            </Switch>
            <Footer />
          </React.StrictMode>
      </BrowserRouter>
    );
  }
}

export default App;