import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
