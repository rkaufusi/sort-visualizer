import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import App from '../App.js'
import {useState, useEffect} from 'react'
//import bubbleSort from './sorting-algos/bubbleSort.js'

const pages = ['Load new data', 'Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Quick Sort'];

const AppBarNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [clicked, setClicked] = useState('')
  const [data, setData] = useState([])
  const [myCount, setMyCount] = useState(0)
  
  let passData = []
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

const [test, setTest] = useState([0, 29])
const [testA, setTestA] = useState()

const quickSort = () => {
  helperFunc(data, 0, data.length - 1)
  setData([...data])
  //return data;
}
const helperFunc = async (array, startIdx, endIdx) => {
	if(startIdx >= endIdx) return;
	const pivotIdx = startIdx
	let leftIdx = startIdx + 1
	let rightIdx = endIdx
	while(rightIdx >= leftIdx){
    await new Promise(resolve => setTimeout(resolve, 200))
    if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
      swap(leftIdx, rightIdx, array)
    }
    //console.log(leftIdx, pivotIdx, rightIdx, '||', array[leftIdx], array[pivotIdx], array[rightIdx])
      if(array[leftIdx] <= array[pivotIdx]) leftIdx++
      if(array[rightIdx] >= array[pivotIdx]) rightIdx--
      setData([...data])

	}

	swap(pivotIdx, rightIdx, array)
	const left = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
	  if(left){
		  helperFunc(array, startIdx, rightIdx - 1)
		  helperFunc(array, rightIdx + 1, endIdx)
	  }
	  else {
		  helperFunc(array, rightIdx + 1, endIdx)
		  helperFunc(array, startIdx, rightIdx - 1)
	  }
    setData([...data])
 }

const mergeSort = () => {
  if(data.length <= 1) return data
	const helpArray = data.slice()
	merge(data, 0, data.length - 1, helpArray)
  //setData([...data])
  //return data;
}

const merge = (main, start, end, helpArray) => {
	if (start === end) return;
	const middle = Math.floor((start + end) / 2)
  
  merge(helpArray, start, middle, main)
  //setData([...data])

	merge(helpArray, middle + 1, end, main)
  console.log(data)
  //setData([...data])
 
	mergeArray(main, start, middle, end, helpArray)
}

const mergeArray = async (main, start, middle, end, helpArray) => {
	let k = start
	let i = start
	let j = middle + 1
  let isTrue = true

  while(isTrue){
    await new Promise(resolve => setTimeout(resolve, 200))

  while(i <= middle && j <= end){
    if (helpArray[i] <= helpArray[j]){
      main[k++] = helpArray[i++]
      setData([...data])
    } 
    else {
      main[k++] = helpArray[j++]
      setData([...data])
    }
    console.log(data)
  }

    while (i <= middle){
    await new Promise(resolve => setTimeout(resolve, 200))

      main[k++] = helpArray[i++]
      setData([...data])
    }
    while (j <= end){
    await new Promise(resolve => setTimeout(resolve, 200))

      main[k++] = helpArray[j++]
      setData([...data])
    }
    if(j >= end) isTrue = false 
} 
}

 
const selectionSort = () => {
  let startIndex = 0;

    while (startIndex < data.length - 1){
      (function(startIndex) {
        setTimeout(function() {
          let smallest = startIndex;
          for(let i = startIndex + 1; i < data.length; i++){
            if(data[smallest] > data[i]) smallest = i;
          setData([...data])
          }
          swap(startIndex, smallest, data)
          setData([...data])
        }, 2500)
      })(startIndex++)
    }
}

  const insertionSort = async () => {
      for(let i = 1; i < data.length; i++){
        let j = i;
        //setTimeout(()=> {
          while (j > 0 && data[j] < data[j - 1]){
            await new Promise(resolve => setTimeout(resolve, 200))
            setTest([j, j - 1])
            swap(j, j - 1, data);
            setData([...data])
            j -= 1;
          }
        //}, 4500)
      }
    }

const bubbleSort = () => {
  let tempA = 0
  while(tempA < 29){
    for(let i = 0; i < data.length - 1 - tempA; i++){
      setTimeout(() => {
        if(data[i] > data[i + 1]){
          swap(i, i + 1, data)
        }
        setData([...data])
        setTest([i, data.length - 1 - tempA])
      }, 2500) 
    }
    tempA++
  }
}
const swap = (i, j, array) => {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}
  
  const [click, setClick] = useState('')

  const menuClick = (clicked) => {
    switch(clicked){
      case 'Load new data':
        createData()
        break;
      case 'Bubble Sort':
        bubbleSort()
        break
      case 'Insertion Sort':
        insertionSort()
        break
      case 'Selection Sort':
        selectionSort()
        break
      case 'Quick Sort':
        quickSort()
        break

    }
  }
  const createData = () => {
    let array = new Array(30)
    for(let i = 0; i < array.length; i++){
      array[i] = Math.floor(Math.random() * 100)
    }
    setData(array)
    setMyCount(array.length)
  }

  useEffect(()=> {
      createData()
  },[])

//console.log(data)
  return (
    <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <button onClick={() => console.log(page)}>
                  <Typography textAlign="center">
                    {page}
                  </Typography>
                  </button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => menuClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <App toDo={clicked} randData={data} myTest={test}/>
    </div>
  );
};
export default AppBarNav;