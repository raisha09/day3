import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div><Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">

        <Typography variant="h6" color="inherit" sx={{flexGrow:1}} align='left' > Student
        {/* <Button color='inherit'>Add student</Button> */}
        </Typography>
        {/* <Button color='inherit'>Login</Button> */}
        {/* <Button color='inherit'>veiw student</Button> */}
        <Button> 
          <Link to="/Add" >Add Student</Link>
        </Button> 
        <Button> 
          <Link to="/Login" >Login</Link>
        </Button> 
        <Button> 
          <Link to="/View" >View</Link>
        </Button> 
        
        
       
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Navbar