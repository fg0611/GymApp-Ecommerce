import React from "react";
import "./admin.css";
import AdmProducts from "./AdmProducts/AdmProducts";
import EditProduct from "./AdmProducts/EditProduct";
import { Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import AdmUsers from "./AdmUsers/AdmUsers";
import UserDetail from "./UserDetail/UserDetail";
import LocationAdd from "../Locations/LocationAdd";
import LocationManager from "../Locations/LocationManager";
import AdminOrders from "../Admin/AdmOrders/AdmOrders";
import { useSelector } from "react-redux";
import OrderDetail from "./OrderDetail/OrderDetail";
import CreateProduct from "./CreateProduct/CreateProduct";
import Categories from "./Categories/Categories";


const Admin = () => {    
 const admin = useSelector( store => store.user.userType)

return (<div>
    { 
      (admin === "S"||admin==="A") && (
        <div className="body">
      <Route path="/admin" component={SideBar} />
      <Route exact path="/admin/crear-producto" component={CreateProduct}/>
      <Route exact path="/admin/categorias" component={Categories}/>
      <Route exact path="/admin" component={AdmProducts} />
      <Route exact path="/admin/usuarios" component={AdmUsers} />
      <Route exact path="/admin/product/:id" component={EditProduct} />
      <Route exact path="/admin/usuario/:id" component={UserDetail} />
      <Route exact path="/admin/orden/:orderid" component={OrderDetail} />
      <Route exact path="/admin/crear-sucursal" component={LocationAdd} />
      <Route exact path="/admin/sucursales" component={LocationManager} />
      <Route exact path="/admin/ordenes" component={AdminOrders} />
    </div>
    )
    }
   </div>
  )
};

export default Admin;
