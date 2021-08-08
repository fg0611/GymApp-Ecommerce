import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./resetOk";

const SendResetSuccess = () => {
  const classes = useStyles();
  return (
    <div className={classes.data}>
      
        <Typography  component="h2" variant="h5" color="primary">
          SE ENVIO EL LINK A TU CORREO ELECTRONICO PARA <br></br>
          RESTAURAR LA CONTRASEÑA, VOLVER A INICIAR SESION
        </Typography>
        <Button href="/iniciarSesion" variant="contained" color='primary'className={classes.button}>
          Iniciar Sesion
      </Button>
    </div>
  );
};

export default SendResetSuccess;
