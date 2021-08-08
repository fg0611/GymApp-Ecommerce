import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Swal from "sweetalert2";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {deleteCategory} from '../../../redux/actions/adminActions'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function DeleteCategory() {
    const classes = useStyles();
    const [name, setName] = useState('')
    const dispatch = useDispatch()

const handleInput = (e) => {
    setName(e.target.value)
    

}

const handleSubmit = (e) => {
e.preventDefault()
dispatch(deleteCategory(name))

Swal.fire(
    {
      text:'categoria eliminada',
      icon: 'success', 
      width:'20rem', 
      timer: '3000', 
      showConfirmButton: false 
    }
  )
  setName('')

}

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Eliminar Categoria
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate >
                    <TextField
                        onChange={handleInput}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Ingresar nombre"
                        name="name"
                        autoFocus
                        value={name}
                    />
                    

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Eliminar
                    </Button>
                   

                </form>
            </div>

        </Container>
    );
}