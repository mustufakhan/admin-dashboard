import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  FormGroup
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  return (
    <Container className="box">
      <Box
        sx={{
          width: 450,
          height: "fit-content",
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <div className="box_head">
          <Link to="/login">
            {" "}
            <p>
              Already a member? <spna>Sign in now!</spna>
            </p>
          </Link>
        </div>
        <div>
          <h2>Sign up</h2>
          <p>to open your account</p>
          <div className="input_fields">
            <TextField
              id="standard-basic"
              label="First name"
              variant="standard"
            />
            <br />
            <TextField
              id="standard-basic"
              label="last name"
              variant="standard"
            />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField
              id="standard-basic"
              label="Phone number"
              variant="standard"
              type="number"
            />
            {/* <TextField id="standard-basic" label="Country" variant="standard" /> */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 , marginBottom: '30px'}}>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value='1'
                // onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      style={{ width: "fit-content" }}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="standard-basic"
              label="Password confirmation"
              variant="standard"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                      style={{ width: "fit-content" }}
                    >
                      {showConfirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="I agree with Terms and Conditions" />
            </FormGroup><br/>
            <Button variant="contained">Sign in</Button>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Signup;
