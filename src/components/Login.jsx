import { TextField , Button} from '@mui/material'
import React from 'react'

const login = () => {
  return (
    <div>
        <TextField  variant='standard' label="username"> </TextField>
        <br/><br/>
        <TextField  variant='standard' label="passwor"> </TextField>
        <br /><br />
        <Button variant="text">Login</Button>
    </div>
  )
}

export default login