import React from 'react';
import { Switch, Route } from 'react-router-dom';
// client
import Home from '../components/client/Home/ContainerHome';
import SignUp from '../components/client/SignUp/ContainerSignUp';
import About from '../components/client/About/ContainerAbout';
import Product from '../components/client/Product/ContainerProduct';
import ProductItem from '../components/client/Product/Item';
import Login from '../components/client/Logs/ContainerLogin';
import Logout from '../components/client/Logs/Logout';
import Refreshlogin from '../components/client/Logs/RefreshLogin';
import Admin from '../components/admin/Admin';
import NotFound from '../components/404/NotFound';
export default () => {
  return (
    <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/refreshlogin" exact component={Refreshlogin}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/about" exact  component={About}/>
        <Route path="/category/:id" exact component={Product}/>
        <Route path="/product/:id" exact component={ProductItem}/>
        <Route path="/admin/" exact component={Admin}/>        
        <Route path="*" component={NotFound}/>
    </Switch>
  )
}
