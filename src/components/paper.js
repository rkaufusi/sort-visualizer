import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function LenPaper({len, idx, currIdx, isSorted}) {
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

  return (
    <Box sx={{...boxStyle}}>
      {
        !isSorted ? <Paper sx={idx === currIdx[0] || idx === currIdx[1] ? {...style} : ''} elevation={2}/> :
                    <Paper sx={{...styleFinishedCol}} elevation={2}/>
      }
    </Box>
  );
}