import React, { useState } from "react";
import {auth} from '../../firebase'
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import useStyles from "./signupStyles";
import {newUser} from '../../redux/actions/userActions'

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useDispatch } from 'react-redux';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch()
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
    const [msgError, setMsgError] = useState(null);
  
  const history = useHistory();

  const SingUpNewUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(res => { console.log(res)
      let newUserData = {id: res.user.uid , email: res.user.email, firstName: firstName, lastName: lastName}
      dispatch(newUser(newUserData) ) 
      }
      )
      .then(resp =>{ history.push("/iniciarSesion")
      Swal.fire(
        {
          text:'Te registraste exitosamente',
          icon: 'success', 
          width:'20rem', 
          timer: '3000', 
          showConfirmButton: false 
        }
      )})
      
      .catch((e) => {
        
        if(e.code === "auth/invalid-email" && e.code === "auth/weak-password") {
          setMsgError('ingrese un email valido la contraseña debe contener al menos 6 digitos')
        }
        else if (e.code === "auth/email-already-in-use") {
          setMsgError("el correo ingresado ya esta en uso");
        }
        else if(e.code === "auth/weak-password") {
          setMsgError('la contraseña debe contener al menos 6 digitos')
        }
        else if(e.code === "auth/invalid-email") {
          setMsgError('ingrese un email valido, por ejemplo: email@gmail.com')
        }

      });
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form onSubmit={SingUpNewUser} className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                name="firstName"
                autoComplete="firstName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electronico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {msgError != null ? <div style={{color:"red"}}>{msgError} </div> : <span></span>}
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/iniciarSesion" variant="body2">
                Ya tienes una cuenta? Ingresa
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
