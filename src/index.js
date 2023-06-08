import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './app/pages/Home';
import { Provider } from 'react-redux';
import store from './js/store/store';
import './styles/index.scss'
import Navbar from './app/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './app/pages/Gallery';
import { routesCodes } from './js/routeCodes';
import Error from './app/pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={ store }>
    <Router >
      <Navbar />
      <Routes>
        <Route path={ routesCodes.GALLERY } element={ <Gallery /> } />
        <Route path={ routesCodes.HOME } element={ <Home /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </Router>    
  </Provider>
);
