import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Plan from './pages/Plan';
import Store from './pages/Store';
//import Scorecard from './pages/Scorecard';
import History from './pages/History';
import Footer from './components/Footer';
import PlanProgress from './components/PlanProgress';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.StrictMode>
          <div className="App">
            <Header/>
            <main className="main-wrapper">
              <Switch>
                <Route path="/about" component={About}/>
                {/*<Route exact path="/" component={Activity}/>*/}
                <Route exact path="/" component={Activity}/>
                <Route path="/index_react.html" component={Activity}/>
                <Route path="/plan" component={Plan}/>
                <Route path="/store" component={Store}/>
                <Route path="/awards_history" component={History}/>
                {/*<Route path="/awards_scorecard" component={Scorecard}/>*/}
              </Switch>
            </main>
            <PlanProgress />
            <Footer />
          </div>
          </React.StrictMode>
      </BrowserRouter>
    );
  }
}

export default App;