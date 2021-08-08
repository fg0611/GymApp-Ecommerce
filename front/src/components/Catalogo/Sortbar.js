import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, getCategories, getProducts, orderProducts } from '../../redux/actions/productsActions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    sortContainer: {
        width: '90%',
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    grid: {
        margin: '20px 10px',
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '15px',
        width: '100%'
    },
    formControl: {
        minWidth: 120,
    },
}));

export default function SortBar() {

    const dispatch = useDispatch()
    const classes = useStyles()
    const state = useSelector((state) => state)
    const [filOrder, setfilOrder] = useState({
        order: "",
        category: state.products.categorySelected
    })

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    function handleChange(e) {
        const targetName = e.target.name;
        if (targetName === "order") {
            setfilOrder({
                ...filOrder,
                [targetName]: e.target.value
            })

            dispatch(orderProducts(e.target.value))

        } else if (targetName === "category") {
            setfilOrder({
                ...filOrder,
                [targetName]: e.target.value
            })
            if (e.target.value === "Todas") dispatch(getProducts())
            else dispatch(filterProducts(e.target.value))
        }
    }

    return (
        <div className={classes.sortContainer}>
            <Grid container className={classes.info}>

            </Grid>
            <Grid container className={classes.info}>
                <Grid item className={classes.grid}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Orden</FormLabel>
                        <RadioGroup aria-label="Orden" name="order" value={filOrder.order} onChange={handleChange}>
                            <FormControlLabel value="az" control={<Radio />} label="A-Z" />
                            <FormControlLabel value="za" control={<Radio />} label="Z-A" />
                            <FormControlLabel value="minMax" control={<Radio />} label="Precio: Min-Max" />
                            <FormControlLabel value="maxMin" control={<Radio />} label="Precio: Max-Min" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item className={classes.grid}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Categorias</InputLabel>
                        <Select
                            native
                            value={filOrder.category}
                            onChange={handleChange}
                            inputProps={{
                                name: 'category',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option value="Todas">Todas</option>
                            {
                                state.products.categories && state.products.categories.map(c =>
                                    <option value={`${c.name}`} key={c.id}>{c.name}</option>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
