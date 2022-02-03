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

const pages = ['Load new data', 'Bubble Sort', 'Insertion Sort', 'Selection Sort'];

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

  const bubbleSort = () => {
    let temp = 29
    while(temp > 0){
      for(let i = 0; i < data.length; i++){
        setTimeout(() => {
          if(data[i] > data[i + 1]){
            swap(i, i + 1, data)
          }
          setData([...data])
          console.log(i)
        }, 2500) 
      }
      temp--
      console.log(temp)
    }
  }

/*
  const bubble = (array) => {
    let unSorted = true
    let count = array.length
     while(unSorted){
      for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]){
          swap(i, i + 1, array)
        }
        //setData(array) 
      }
      count--
      if(count === 0) {
        unSorted = false
      }
    }
     return array;
  }*/
  const swap = (i, j, array) => {
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }
  
  const [click, setClick] = useState('')

  const menuClick = (clicked) => {
    console.log(clicked)
    if(clicked === 'Load new data'){
        createData()
    }
    if(clicked === 'Bubble Sort'){
        mergeSort()
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
    <App toDo={clicked} randData={data}/>
    </div>
  );
};
export default AppBarNav;