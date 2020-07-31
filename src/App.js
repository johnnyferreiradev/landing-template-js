import React from 'react';
import Routes from './routes';

import AppContext from './contexters/AppContext';

import './App.css';

function App() {
  return (
    <AppContext>
      <Routes />
    </AppContext>
  );
}

export default App;
