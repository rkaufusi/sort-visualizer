import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function Visualizer({data}) {
console.log(data)
let nArr = []
let rArr = []
data.map((value, index) => {
  let colName = value
  nArr.push({field: value, width: 5})
  rArr.push({id: index, colName: 'here'})

})
console.log(rArr)

  return (
    <div style={{ height: 600, width: '90%' }}>
      <div style={{ height: 600, width: '100%' }}>

        <DataGrid
        columns={nArr}
        rows={rArr}
        />
      
      </div>
    </div>
  );
}