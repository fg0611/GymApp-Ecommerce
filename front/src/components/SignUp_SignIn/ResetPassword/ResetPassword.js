import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { auth } from '../../../firebase';
import { useHistory } from 'react-router';
import useStyles from './resetStyles'


  
const ResetPassword = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const history = useHistory()

    const resetPassword = (e) => {
        e.preventDefault()
        auth.sendPasswordResetEmail(email)
        .then(res => history.push('/restablecido'))
        .catch(e => {
            if(e.code === "auth/user-not-found") {
                setError('el usuario no existe')
            }
        })
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Restaurar contraseña
        </Typography>
        <form onSubmit={resetPassword} className={classes.form} noValidate>
          <TextField
          onChange={(e) => {setEmail(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          
          {error != null ? <div>el usuario no existe</div> : <div></div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            enviar
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}

export default ResetPassword
