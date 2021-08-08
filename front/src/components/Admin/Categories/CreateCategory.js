import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Swal from "sweetalert2";
import {postCategory} from '../../../redux/actions/adminActions'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
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

 function CreateCategory() {
    const classes = useStyles();
    const [data, setData] = useState({name: '', image: ''})
    const dispatch = useDispatch()

const handleInput = (e) => {
    setData({
        ...data, //me trae los estados (name y image)
        [e.target.id ] : e.target.value 
        //es el id del form     // 
    })
    

}

const handleSubmit = (e) => {
e.preventDefault()
const info = {
    name: data.name,
    image: data.image
}
dispatch(postCategory(info))
setData({
    ...data, 
    name: '',
    image: ''
})

Swal.fire(
    {
      text:'categoria creada exitosamente',
      icon: 'success', 
      width:'20rem', 
      timer: '3000', 
      showConfirmButton: false 
    }
  )

}

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Crear Categoria
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
                        value={data.name}
                    />
                    <TextField
                    onChange={handleInput}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="image"
                        label="Ingresar imagen"
                        type="url"
                        id="image"
                        value={data.image}
                        
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Agregar Categoria
                    </Button>
                   

                </form>
            </div>
        </Container>
    );
}

export default CreateCategory