import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import bubbleSort from './sorting-algos/bubbleSort'
import {useState} from 'react'

export default function LenPaper({len, idx, currIdx}) {
    //console.log(currIdx, idx)
    const [tempA, setTempA] = useState(29)
    const style = {
      backgroundColor: "#FF7F7F"
    }
    const styleFinishedCol = {
      backgroundColor: "#90EE90"

    } 
    let temp = 31

   // console.log(`tempA ` + tempA)
    
  return (
    <Box
      sx={{
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: len * 10,
          height: 10,
        },
      }}
    >
      <Paper sx={idx === currIdx[0] || idx === currIdx[0] + 1 ? {...style} : idx > temp ? {...styleFinishedCol} : ''} elevation={2}/>
    </Box>
  );
}