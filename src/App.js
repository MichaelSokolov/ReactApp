import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import HousesPageContainer from './components/HousesPage/HousesPageContainer';
import FlatsPage from './components/FlatsPage/FlatsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />



        <div className='content'>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/house' render={() => <HousesPageContainer />} />
          <Route path='/flats' render={() => <FlatsPage />} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;