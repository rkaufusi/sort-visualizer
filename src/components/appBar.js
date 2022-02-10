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

const pages = ['Load new data', 'Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Quick Sort', 'Merge Sort'];

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
/*
const mergeSort = (array) => {
  if(array.length <= 1) return array
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  //console.log(left, right)
  console.log(left)
  return mergeArray(mergeSort(left), mergeSort(right));
}
 
const mergeArray = (left, right) => {
  const sorted = new Array(left.length + right.length)
  console.log(sorted)
  let k = 0;
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      sorted[k++] = left[i++]
    } else {
      sorted[k++] = right[j++]
    }
  }
  while(i < left.length) sorted[k++] = left[i++]
  while(j < right.length) sorted[k++] = right[j++]
  console.log(sorted)
  return sorted
}*/

const mergeSort = () => {
  if(data.length <= 1) return data
	const helpArray = data.slice()
	merge(data, 0, data.length - 1, helpArray)
  console.log(data)
    //setData([...data])
  //return data;
}
console.log(data)

const merge = (main, start, end, helpArray) => {
	if (start === end) return;
	const middle = Math.floor((start + end) / 2)
  merge(helpArray, start, middle, main)
	merge(helpArray, middle + 1, end, main)
	mergeArray(main, start, middle, end, helpArray)
}

const mergeArray = (main, start, middle, end, helpArray) => {
	let k = start
	let i = start
	let j = middle + 1

  while(i <= middle && j <= end){
      if (helpArray[i] <= helpArray[j]){
        main[k++] = helpArray[i++]
      } 
      else {
        main[k++] = helpArray[j++]
      }
  }
  while (i <= middle){
    main[k++] = helpArray[i++]
    setData([...data])
  }
  while (j <= end){
    main[k++] = helpArray[j++]
    setData([...data])
  }  
}

/*
const selectionSort = () => {
    let startIndex = 0;
    setTimeout(() => {
      while (startIndex < data.length - 1){
        let smallest = startIndex;
          for(let i = startIndex + 1; i < data.length; i++){
            if(data[smallest] > data[i]) smallest = i;
            //setData([...data])
            //console.log(data)
          }
        swap(startIndex, smallest, data)
        setData([...data])
        startIndex++;
      }
    }, 2500)
    //return array;
}*/
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
          //setData([...data])
        }, 2500)
      })(startIndex++)
    }

  //return array;
}


  const insertionSort = () => {
      for(let i = 1; i < data.length; i++){
        let j = i;
        setTimeout(()=> {
          while (j > 0 && data[j] < data[j - 1]){
            swap(j, j - 1, data);
            j -= 1;
          setData([...data])
          }
        }, 2500)
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
        console.log(`Quick Sort`)
        break
      case 'Merge Sort':
        mergeSort()
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