import { makeStyles } from "@material-ui/core";

export default makeStyles({
    root: {
      width: '300px',
      height: '420px',
      boxShadow: '0 0 3px',
      backgroundColor: 'rgba(150, 150, 150, 0.849)',
      margin: '30px',
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 30,
      display: 'flex',
      justifyContent: 'center'
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      width: '100%',
      marginTop: '90px',
      
    },
    button2: {
      width: '100%',
      marginTop: '55px'
    },
    button3: {
      width: '100%',
      marginBottom: '30px'
    },
    buttons: {
      marginLeft: '40px'
    },
    price: {
      marginLeft: '90px'
    },
    container: {
      
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        backgroundPosition: "center",
       backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
        transition: "0.4s",
        height: '100vh'
      
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      marginLeft: '30%',
    },
    datos: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '25px',
      
    }
  });