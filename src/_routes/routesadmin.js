import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardAdmin from '../components/admin/Dashboard/ContainerDashboard';
import UserAdmin from '../components/admin/Users/ContainerUser';
import UserEdit from '../components/admin/Users/EditUser';
import UserDelete from '../components/admin/Users/DeleteUser';
import CategoryAdmin from '../components/admin/Categories/ContainerCategory';
import ProductAdmin from '../components/admin/Products/ContainerProduct';
import ProductAdd from '../components/admin/Products/AddProduct';
import ProductDelete from '../components/admin/Products/DeleteProduct';
import ProductEdit from '../components/admin/Products/EditProduct';
import LoginAdmin from '../components/admin/Logs/ContainerLogin';
import Logout from '../components/admin/Logs/Logout';
import RefreshLogin from '../components/admin/RefreshLogin';
import NotFound from '../components/404/NotFound';

export default () => {
  return (
    <Switch>
        <Route path="/admin/" exact component={DashboardAdmin}/>
        <Route path="/admin/refreshlogin" exact component={RefreshLogin}/>
        <Route path="/admin/user" exact component={UserAdmin}/>
        <Route path="/admin/user/delete/:id" exact component={UserDelete}/>
        <Route path="/admin/user/edit/:id" exact component={UserEdit}/>
        <Route path="/admin/category" exact component={CategoryAdmin}/>
        <Route path="/admin/product" exact component={ProductAdmin}/>
        <Route path="/admin/product/add" exact component={ProductAdd}/>
        <Route path="/admin/product/delete/:id" exact component={ProductDelete}/>
        <Route path="/admin/product/edit/:id" exact component={ProductEdit}/>
        <Route path="/admin/login" exact component={LoginAdmin}/>
        <Route path="/admin/logout" exact component={Logout}/>

        <Route path="*" component={NotFound}/>          
    </Switch>
  )
}
