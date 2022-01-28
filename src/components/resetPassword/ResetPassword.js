import React from 'react';
import { Container, Box, TextField, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import './ResetPassword.css'

const ResetPassword = () => {
  return (
    <Container className='box'>
      <Box
        sx={{
          width: 450,
          height: 'fit-content',
          border: '1px solid black',
          textAlign: 'center'
        }}
      >
        <div className='box_head'>
        <Link to="/login"><p>Back</p></Link>
        </div>
        <div>
           <p>Restore a password</p>
          <div className='input_fields'>
            <TextField id="standard-basic" label="Email" variant="standard" /><br/>
            <Link to="/dashboard"><Button variant="contained">Send</Button></Link>
          </div>
        </div>
      </Box>
    </Container>
  )
}

export default ResetPassword
