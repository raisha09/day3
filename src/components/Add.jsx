import { Button } from '@mui/base'
import { TextField, Typography } from '@mui/material'
import axios from 'axios';
import React , { useState } from 'react'

 

const Add = (props) => {
  var[data,setData]=useState({
    id: props.data.id,
    name: props.data.name,
    age: props.data.age,
    department: props.data.department
  });
    const student=(e)=>{
      setData({...data,[e.target.name]:e.target.value});
      console.log(data);
  }
  const submit=()=>{
   
      axios.post("http://localhost:4000/students",{
      name:data.name,
      age:data.age,
      department:data.department,
    })
     .then(()=>{
      alert('New entry created successfully')
     })
     .catch(()=>{
     alert('Error saving data');
    });
  }
    
    
  return (
    <div>
         <br /><br />
         <Typography  variant='H5'>Name   </Typography>
         <br /><br />
        <TextField variant='outlined' value={data.name} label="Name" name="name"  onChange={student}></TextField>
        <br /><br />
        <Typography  variant='H5' >Age    </Typography>
        <br /><br />
        <TextField variant='outlined' label="Age"  name="age" value={data.age} onChange={student}></TextField>
        <br /><br />
        <Typography  variant='H5'>Department</Typography>
        <br /><br />
        <TextField variant='outlined' label="Department"  name="department" value={data.department} onChange={student}></TextField>
        <br /><br />
        <Button variant="contained" onClick={submit}>submit</Button>
    </div>
  )

}

export default Add