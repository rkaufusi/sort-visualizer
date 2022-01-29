import { create } from '@mui/material/styles/createTransitions';
import {useState} from 'react'
import './App.css';

function App({toDo, data}) {

console.log(data.join(' '))

  return (
    <div className="App">
      <h3>Sort Visualizer</h3>
      <p>{data.join(' ')}</p>
    </div>
  );
}

export default App;
