import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './app/pages/Home';
import { Provider } from 'react-redux';
import store from './js/store/store';
import './styles/index.scss'
import Navbar from './app/components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={ store }>
  <Navbar />
  <Home />
  </Provider>
);
