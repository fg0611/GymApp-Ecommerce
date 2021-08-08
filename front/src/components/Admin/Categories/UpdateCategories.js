import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Swal from "sweetalert2";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import { Select } from '@material-ui/core';
import {updateCategory} from '../../../redux/actions/adminActions'




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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
    
}));

 function UpdateCategory() {
    const classes = useStyles();
    const [data, setData] = useState({name: '', image: ''})
    const [idCategory, setIdCategory] = useState(null)
    const dispatch = useDispatch()
    const category = useSelector(store=> store.products.categories)
    
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
dispatch(updateCategory(idCategory,info))
setData({
    ...data, 
    name: '',
    image: ''
})

Swal.fire(
    {
      text:'categoria editada exitosamente',
      icon: 'success', 
      width:'20rem', 
      timer: '3000', 
      showConfirmButton: false 
    }
  )

}
 
const handleOptions = (id) => {
setIdCategory(id)

}

console.log(idCategory)
 
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Editar Categoria
                </Typography>
                   <form onSubmit={handleSubmit} className={classes.formControl}>
                       <InputLabel htmlFor="age-native-simple">seleccionar categoria</InputLabel>
                    <Select className={classes.formControl}
                     
                    >
                       {category?.map(e =><option  onClick={() =>{handleOptions(e.id)}} value={e.id}>{e.name}</option> )} 
                    </Select>
               
                    <TextField
                        onChange={handleInput}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="name"
                        label="Ingresar nombre"
                        type="text"
                        id="name"
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
                        ACTUALIZAR
                    </Button>
                   
                    </form>
                
            </div>
            

        </Container>
    );
}

export default UpdateCategory