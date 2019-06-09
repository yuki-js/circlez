import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

import CircleTable from './components/CircleTable'

const App: React.FC = () => {
  return (
    <div className="App">
      <CircleTable />
    </div>
  );
}

export default App;
