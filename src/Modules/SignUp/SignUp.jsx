import { Button, Grid, InputAdornment,  TextField, Typography } from "@material-ui/core";
import React from "react";
import { Container } from "@material-ui/core";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import "../Login/LoginForm.css"
import UseSignUp from "../SignUp/UseSignUp";
import {Link} from "react-router-dom"
export default function SignUp() {
   const [UserName,Email,Phone,Country,City,Password,setUsername,setEmail,setPhone,setCountry,setCity,setPassword,ctaSignUp]=UseSignUp()
  return (
    <div>
      <>
       <Grid container>
       <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="LoginForm">
       <Container style={{width:400,paddingTop:50}}>
          <center>
              <Typography style={{fontSize:40,marginBottom:20,color:"#e22335"}}>
                  <PeopleAltIcon style={{height:100,width:100}}/>
              </Typography>
            <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
              value={UserName}
              type="name"
              label="Username "
              variant="filled"
              onChange={(e) => setUsername(e.target.value)}
              style={{marginBottom:10}}
            />
              <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
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
              value={Phone}
              type="Phone"
              label="Phone"
              variant="filled"
              onChange={(e) => setPhone(e.target.value)}
              style={{marginBottom:10}}
            />
              <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
              value={Country}
              type="name"
              label="Country"
              variant="filled"
              onChange={(e) => setCountry(e.target.value)}
              style={{marginBottom:10}}
            />
            <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
              value={City}
              type="name"
              label="City"
              variant="filled"
              onChange={(e) => setCity(e.target.value)}
              style={{marginBottom:10}}
            />
              <TextField
              id="standard-basic"
              color="secondary"
              fullWidth="bool"
              size="medium"
              value={Password}
              type="Password"
              label="Password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
              style={{marginBottom:10}}
            />
            <Link to="/login">Have An Account</Link>
            <Button onClick={ctaSignUp} style={{backgroundColor:"#e22335",color:"white",marginTop:20}}><Typography style={{paddingLeft:100,paddingRight:100}}>SignUp</Typography></Button>
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
