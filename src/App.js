import { create } from '@mui/material/styles/createTransitions';
import {useState, useEffect} from 'react'
import './App.css';
import Visualizer from './components/visualizer'
import LenPaper from './components/paper'
import bubbleSort from './components/sorting-algos/bubbleSort'


function App({randData}) {
console.log(`random data ` + randData)

      

  return (
    <div className="App">
      <h3>Sort Visualizer</h3>
      {randData.map((value) => {
        return (
          <LenPaper len={value}/>
        )
      })} 

    </div>
  );
}

export default App;
