import { Button, Grid, InputAdornment,  TextField, Typography } from "@material-ui/core";
import React from "react";
import { Container } from "@material-ui/core";
import useLogin from "./useLogin";
import { AccountCircle } from "@material-ui/icons";
import LockIcon from '@material-ui/icons/Lock';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MailIcon from '@material-ui/icons/Mail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import "./LoginForm.css"
import SignUp from "../SignUp/SignUp";
import {Link} from  "react-router-dom"
export default function LoginForm() {
  const [Email, password, setEmail, setPassword, ctaLogin, error] = useLogin();
  return (
    <div>
      <>
       <Grid container>
       <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="LoginForm">
       <Container style={{width:400,paddingTop:150}}>
          <center>
              <Typography style={{fontSize:40,marginBottom:20,color:"#e22335"}}>
                  <PeopleAltIcon style={{height:100,width:100}}/>
              </Typography>
            <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              value={Email}
              type="email"
              label="Email"
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
              style={{marginBottom:10}}
            />
            <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              value={password}
              type="password"
              label="Password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="#" style={{marginTop:20}}>Forget Password </Link><br />
            <Link to="/SignUp">Create An Account</Link>
            <Button onClick={ctaLogin} style={{backgroundColor:"#e22335",color:"white",marginTop:20}}><Typography style={{paddingLeft:100,paddingRight:100}}>Login</Typography></Button>
          </center>
        </Container>
       </Grid>
       <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <center> <Typography style={{paddingTop:200,color:"#e22335",fontSize:40}}><LockOpenIcon style={{height:150,width:150}}/><br />Login Panel</Typography></center>
           </Grid>       
       </Grid>
      </>
    </div>
  );
}
