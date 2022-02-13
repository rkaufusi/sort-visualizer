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
    setTest([leftIdx, rightIdx])
    if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
      swap(leftIdx, rightIdx, array)
    }
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
 
const selectionSort = async () => {
  let startIndex = 0;
  while (startIndex < data.length - 1){
    let smallest = startIndex;
    let i = startIndex + 1
    for(i; i < data.length; i++){
      if(data[smallest] > data[i]) smallest = i;
        setData([...data])
        await new Promise(resolve => setTimeout(resolve, 200))
        setTest([smallest, i])
      }
      swap(startIndex, smallest, data)
      setData([...data])
      //setTest([smallest, i])
      startIndex++
  }
}

  const insertionSort = async () => {
      for(let i = 1; i < data.length; i++){
        let j = i;
        //setTimeout(()=> {
          while (j > 0 && data[j] < data[j - 1]){
            setTest([j, j - 1])

            await new Promise(resolve => setTimeout(resolve, 200))
            swap(j, j - 1, data);
            setData([...data])
            j -= 1;
          }
        //}, 4500)
      }
    }
    const bubbleSort = async () => {
      let tempA = 0
      while(tempA < 29){
        for(let i = 0; i < data.length - 1 - tempA; i++){
          setTest([i + 1, i])
          await new Promise(resolve => setTimeout(resolve, 200))
            if(data[i] > data[i + 1]){
              swap(i, i + 1, data)
            }
            setData([...data])
        }
        tempA++
      }
    }

// const bubbleSort = () => {
//   let tempA = 0
//   while(tempA < 29){
//     for(let i = 0; i < data.length - 1 - tempA; i++){
//       setTimeout(() => {
//         if(data[i] > data[i + 1]){
//           swap(i, i + 1, data)
//         }
//         setData([...data])
//         setTest([i, data.length - 1 - tempA])
//       }, 2500) 
//     }
//     tempA++
//   }
// }
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