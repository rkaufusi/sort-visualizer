import { create } from '@mui/material/styles/createTransitions';
import {useState, useEffect} from 'react'
import './App.css';
import Visualizer from './components/visualizer'
import LenPaper from './components/paper'
import bubbleSort from './components/sorting-algos/bubbleSort'


function App({randData, myTest}) {
//console.log(randData)
  //console.log(myTest)
// console.log(randData[myTest[0]], randData[myTest[1]]);

  return (
    <div className="App">
      <h3>Sort Visualizer</h3>
      {randData.map((value, index) => {
        return (
          <LenPaper len={value} idx={index} currIdx={myTest}/>
        )
      })} 

    </div>
  );
}

export default App;
