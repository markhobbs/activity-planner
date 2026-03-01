import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Planner from './pages/Planner';
import Shop from './pages/Shop';
import Awards from './pages/Awards';
import Progress from './components/Progress';
import NoPage from './pages/NoPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
          <Progress />
          <Routes>
              <Route path="/" element={<Activity />} />
              <Route path="/about" element={<About />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/store" element={<Shop />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
