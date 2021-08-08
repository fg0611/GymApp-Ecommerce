import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./themeconfig";
import NavBar from "./components/NavBar/NavBar";
import Plans from "./components/Plans/Plans";
import Catalogo from "./components/Catalogo/Catalogo";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import SignUp from './components/SignUp_SignIn/SignUp';
import SignIn from "./components/SignUp_SignIn/SignIn";
import Cart from "./components/Cart/Cart";
import Sedes from './components/Dashboard/Sedes';
import Activities from './components/Dashboard/Activities';
import OurPlans from './components/Dashboard/OurPlans';
import ResetPassword from './components/SignUp_SignIn/ResetPassword/ResetPassword';
import SendResetSuccess from './components/SignUp_SignIn/ResetPassword/ResetSuccess';
import AddressForm from './components/Checkout/AddressForm';
import Address from './components/Checkout/Adress';
import Profile from "./components/Dashboard/Profile";

//Esta constante es para tomar la URL para deploy o en su defecto para desarrollo.
export const url = process.env.REACT_APP_API || "http://localhost:3001";

// window.onbeforeunload = function() {
//   return "¿Desea recargar la página web?";
// };

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route path="/asociate" component={Plans} />
        <Route path="/productos" component={Catalogo} />
        <Route path="/producto/:id" component={ProductDetail} />
        <Route path="/admin" component={Admin} />
        <Route path='/registrarse' component={SignUp}/>
        <Route path='/iniciarSesion' component={SignIn}/>
        <Route path='/cart' component={Cart}/>  
        <Route path='/sedes' component={Sedes}/>
        <Route path='/actividades' component={Activities}/>
        <Route path='/planes' component={OurPlans}/>
        <Route path='/restablecer' component={ResetPassword}/>
        <Route path='/restablecido' component={SendResetSuccess}/>
        <Route path='/direccionDeEnvio' component={AddressForm}/>
        <Route path='/direccion' component={Address}/>        
        <Route exact path='/profile' component={Profile}/>
        
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
