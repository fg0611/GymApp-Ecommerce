import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./planStyles";
import CheckIcon from "@material-ui/icons/Check";
import { TextField } from "@material-ui/core";
import Swal from 'sweetalert2'
import { useHistory } from "react-router";

export default function OutlinedCard() {
  const classes = useStyles();
  const [monthly, setMonthly] = useState(false);
  const [annualy, setAnnualy] = useState(false);
  const [monthlyPremium, setMonthlyPremium] = useState(false);
  const [annualyPremium, setAnnualyPremium] = useState(false);
  const [state, handleSubmit] = useForm("mjvjaygp");
  const history = useHistory()

  if (state.succeeded) {
    return (
      Swal.fire(
        {
          text: 'Nos pondremos en contacto a la brevedad',
          icon: 'success',
          width: '20rem',
          timer: '6000',
          showConfirmButton: false
        }
      ),
      history.push('/productos')
    )
}
  const month = () => {
    setAnnualy(false);
    setMonthly(true);
  };
  const annual = () => {
    setMonthly(false);
    setAnnualy(true);
  };

const monthPremium = () => {
    setMonthlyPremium(true)
    setAnnualyPremium(false)
} 
const annualPremium = () => {
    setAnnualyPremium(true)
    setMonthlyPremium(true)
} 

const foto = 'https://www.motivaction.nl/images/Expertise/Sport-marktonderzoek.jpg'
  return (
      <div className={classes.container} style={{backgroundImage:`url(${foto})`}}>
        <div className={classes.grid}>
          <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          PLAN STANDAR
        </Typography>
        <div className={classes.buttons}>
          <Button
            onClick={month}
            value={monthly}
            variant="contained"
            color="primary"
          >
            Mensual
          </Button>
          <Button
            onClick={annual}
            value={annualy}
            variant="contained"
            color="secondary"
          >
            Anual
          </Button>
        </div>
        <div className={classes.price}>
          {monthly === true && annualy === false ? (
            <h2>$4200</h2>
          ) : (
            <h2>$40.320</h2>
          )}
        </div>
        <Typography variant="body2" component="p">
          MATRICULA BONIFICADA 100%
        </Typography>

        <p>
          <CheckIcon /> Musculacion{" "}
        </p>
        <p>
          <CheckIcon /> Acceso a una sola una sucursal (a eleccion)
        </p>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          color="secondary"
          size="big"
          variant="contained"
        >
          SPORTGYM
        </Button>
      </CardActions>
    </Card>
    </div>

    
            <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          PLAN PREMIUM
        </Typography>
        <div className={classes.buttons}>
          <Button
            onClick={monthPremium}
            value={monthlyPremium}
            variant="contained"
            color="primary"
          >
            Mensual
          </Button>
          <Button
            onClick={annualPremium}
            value={annualyPremium}
            variant="contained"
            color="secondary"
          >
            Anual
          </Button>
        </div>
        <div className={classes.price}>
          {monthlyPremium === true && annualyPremium === false ? (
            <h2>$4900</h2>
          ) : (
            <h2>$50.960</h2>
          )}
        </div>
        <Typography variant="body2" component="p">
          MATRICULA BONIFICADA 100%
        </Typography>

        <p>
          <CheckIcon /> Musculacion{" "}
        </p>
        <p>
          <CheckIcon /> Acceso a todas las sucursales
        </p>
        <p>
          <CheckIcon /> Acceso a piscina 
        </p>
        <p>
          <CheckIcon /> Actividades sin limite 
        </p>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button2}
          color="secondary"
          size="big"
          variant="contained"
        >
          SPORTGYM
        </Button>
      </CardActions>
    </Card>
    </div>
            <div>
    <Card className={classes.root} variant="outlined">
    <form onSubmit={handleSubmit}>
        <Typography className={classes.datos} gutterBottom>
        DATOS DE CONTACTO
        </Typography>
        <TextField
               // onChange={(e) => { setEmail(e.target.value) }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Nombre"
                id="name"
                name="name"
                type='text'
                autoComplete="name"
                autoFocus
              />
              
      <TextField
               // onChange={(e) => { setEmail(e.target.value) }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Correo electronico"
                id="email"
                name="email"
                type='email'
                autoComplete="email"
                autoFocus
              />
      <TextField
               // onChange={(e) => { setEmail(e.target.value) }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Celular"
                id="phone"
                name="phone"
                type='text'
                autoComplete="phone"
                autoFocus
              />
      <TextField
               // onChange={(e) => { setEmail(e.target.value) }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="consulta"
                id="consulta"
                name="consulta"
                type='text'
                autoComplete="consulta"
                autoFocus
              />
              <Button
                className={classes.button3}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                
              >
                QUIERO ASESORAMIENTO
              </Button>
       
      </form>
    </Card>
    </div>
    </div>
    </div>
  );
}
