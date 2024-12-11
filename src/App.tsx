import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Planner from './pages/Planner';
import Store from './pages/Store';
import Awards from './pages/Awards';
import Footer from './components/Footer';
import Progress from './components/Progress';
import NoPage from './pages/NoPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.StrictMode>
          <Header />
          <Progress />
          <Routes>
            <Route path="/" element={<Activity ikey={1} />}>
              <Route index path="/about" element={<About />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/store" element={<Store />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <Footer />
        </React.StrictMode>
      </BrowserRouter>
    );
  }
}

export default App;
