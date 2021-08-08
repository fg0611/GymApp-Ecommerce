import { url } from '../../../App'
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getUsers } from '../../../redux/actions/adminActions';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { BsInfoCircleFill } from 'react-icons/bs'

import './AdmUsers.css'
import axios from 'axios';

export default function AdmUsers() {

    const dispatch = useDispatch();
    const users = useSelector((store) => store.adm.users);
    const admin = useSelector(store => store.user.userType)
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null)
    const [accion, setAccion] = useState(null)

    useEffect(() => {
        if (!users?.length) {
            dispatch(getUsers());
        }
    }, [dispatch, users?.length]);


    const handleClickOpen = (e) => {
        const name = e.target.title;
        const value = e.target.value;
        setId(value)
        setAccion({ userType: name })
        setOpen(true)
    };

    const handleAction = async () => {
        await axios.put(url + "/user/update/" + id, accion);
        dispatch(getUsers());
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
        setId(null)
        setAccion(null)
    };


    return (
        <div className="admUsers">
            <div className="titulos user-cards">
                <h3 className="email">Usuario</h3>
                <h3 className="type-user">Tipo de usuario</h3>
                <h3 className="info">Info</h3>
                <h3 className="select">Acciones</h3>
            </div>
            {
                users?.map((u, i) =>
                    <div className="user-cards" key={i}>
                        <h4 className="email">{u.email.toUpperCase()}</h4>
                        <h4 className="type-user">{u.userType.toUpperCase()}</h4>
                        <div className="info">
                            <Link to={`/admin/usuario/${u.id}`} className="Link">
                                <BsInfoCircleFill />
                            </Link>
                        </div>
                        <div className="select">
                            <FormControl variant="outlined" className="formControl">
                                <InputLabel htmlFor="outlined-age-native-simple">Opciones</InputLabel>
                                <Select
                                    native
                                    value=""
                                    // onChange={handleChange}
                                    inputProps={{
                                        name: 'Opciones',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    {
                                        (u.userType !== "A" && u.userType !== "S") &&
                                        <option
                                            value={u.id}
                                            title="F"
                                            onClick={handleClickOpen}>Suspender</option>
                                    }
                                    {
                                        (u.userType !== "A" && u.userType !== "S") &&
                                        <option
                                            value={u.id}
                                            title="D"
                                            onClick={handleClickOpen}>Banear</option>
                                    }
                                    {
                                        (u.userType === "A" && admin === "S") &&
                                        <option
                                            value={u.id}
                                            title="B"
                                            onClick={handleClickOpen}>Tipo USUARIO</option>
                                    }
                                    {
                                        (u.userType !== "A" && u.userType !== "S") &&
                                        <option
                                            value={u.id}
                                            title="A"
                                            onClick={handleClickOpen}>Tipo ADMIN</option>
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                )
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Estas seguro/a?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Por favor, confirme su accion.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className="buttons-c cancel-c">
                        Cancelar
                    </button>
                    <button onClick={handleAction} className="buttons-c delete-c" autoFocus>
                        Confirmar
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}