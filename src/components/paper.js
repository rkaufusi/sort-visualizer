import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import bubbleSort from './sorting-algos/bubbleSort'

export default function LenPaper({len}) {
    console.log(len)
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
      <Paper />
    </Box>
  );
}