import React from 'react';
import { Container, Box, TextField, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
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
          <Link to="/signup"> <p>Not a member? <spna>Sign up now!</spna></p></Link>
        </div>
        <div>
          <h2>Sign in</h2>
          <p>to access your account</p>
          <div className='input_fields'>
            <TextField id="standard-basic" label="Email" variant="standard" /><br/>
            <TextField id="standard-basic" label="Password" variant="standard" type='password'/>
            <Link to="/dashboard"><Button variant="contained">Sign in</Button></Link>
          </div>
          <Link to="/reset"><p>Forget your password?</p></Link>
        </div>
      </Box>
    </Container>
  )
}

export default Login
