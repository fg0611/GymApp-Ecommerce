import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    info: {
        paddingLeft: '10%',
        borderTop: "solid 1px #3535351c",
        transition: '1s',
        '&:hover': {
            background: "#ffff00",
            boxShadow: '5px 5px 10px 1px grey',
        }
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    summary: {
        backgroundColor: '#ededed'
        // backgroundColor: '#ffff00'
    }
}));


export default function ControlledAccordions() {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>PRODUCTOS</Typography>
                </AccordionSummary>
                    <Link to="/admin" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Listar / Editar / Eliminar
                        </Typography>
                </AccordionDetails>
                    </Link>
                    <Link to="/admin/crear-producto" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Crear
                        </Typography>
                </AccordionDetails>
                    </Link>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>CATEGORIAS</Typography>
                </AccordionSummary>
                    <Link to="/admin/categorias" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Listar / Editar / Eliminar
                        </Typography>
                </AccordionDetails>
                    </Link>
                    <Link to="/admin/crear-categoria" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Crear
                        </Typography>
                </AccordionDetails>
                    </Link>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>USUARIOS</Typography>
                </AccordionSummary>
                    <Link to="/admin/usuarios" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Listar / Editar / Eliminar
                        </Typography>
                </AccordionDetails>
                    </Link>
                    {/* <Link to="/admin/crear-usuario-categoria" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Crear
                        </Typography>
                </AccordionDetails>
                    </Link> */}
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>SUCURSALES</Typography>
                </AccordionSummary>
                    <Link to="/admin/sucursales" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Listar / Editar / Eliminar
                        </Typography>
                </AccordionDetails>
                    </Link>
                    <Link to="/admin/crear-sucursal" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Crear
                        </Typography>
                </AccordionDetails>
                    </Link>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>ORDENES</Typography>
                </AccordionSummary>
                    <Link to="/admin/ordenes" className={classes.link}>
                <AccordionDetails className={classes.info}>
                        <Typography >
                            Listar 
                        </Typography>
                </AccordionDetails>
                    </Link>
            </Accordion>
        </div>
    )
}





