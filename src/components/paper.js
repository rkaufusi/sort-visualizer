import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import bubbleSort from './sorting-algos/bubbleSort'
import {useState} from 'react'

export default function LenPaper({len, idx, currIdx}) {
    console.log(idx, currIdx)
    if(idx === currIdx[0]) console.log(currIdx[0])
    const [tempA, setTempA] = useState(30)
    const [currentIdx, setCurrentIdx] = useState(idx)
    const style = {
      backgroundColor: "#FF7F7F"
    }
    const styleFinishedCol = {
      backgroundColor: "#90EE90"
    } 
    const boxStyle = {
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: len * 10,
        height: 10,
      }
    }

   // console.log(idx, boxStyle)
 
  return (
    <Box sx={{...boxStyle}}>
    {40 > currIdx[1] ? <Paper sx={idx === currIdx[0] || idx === currIdx[0] + 1 ? {...style} : ''} elevation={2}/> :
    <Paper sx={{...styleFinishedCol}} elevation={2}/>
    }
      
    </Box>
  );
}