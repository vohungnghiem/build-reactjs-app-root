import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CustomLink from './CustomLink';
import { menus } from './DataLink';
import { apiAll } from '../../../_apis/api_category';
import CatLink from './CatLink';
import axios from 'axios';
import _ from 'lodash';
class MainMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            account: ""
        }
    }
    componentDidMount(){
        var self = this;
        apiAll().then(response=>{
            self.setState({
                category: response,
            });
        });
        this.apiAcount(localStorage.getItem('login'));
    }
    apiAcount(token){
        var self = this;
        axios.get('https://5b31e1e07ad3350014b4349a.mockapi.io/api/users')
        .then(function (response) {
            const abc = _.find(response.data, {'token':token, });
            self.setState({account: abc});
        })
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index)=>{
            return (
                <CustomLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeExact={menu.exact}
                />)
            });
        }
        return result;
    }
  render() {
    let category = [];
    if (this.state.category) {
    category = this.state.category.filter(data=> data.parent===0);    
    }
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <NavLink to={"/"} exact className="navbar-brand">Home</NavLink>
            <button className="navbar-toggler hidden-lg-up" type="button" 
                data-toggle="collapse" data-target="#collapsibleNavId" 
                >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.showMenus(menus)}
                    {/* <!-- Dropdown --> */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                        Category
                    </a>
                    <div className="dropdown-menu">
                    {
                        category.map((cat, index)=>{
                            return <CatLink key={index} cat={cat}/>
                        })
                    }
                    </div>
                    </li>
                </ul>
                <div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {this.state.account?
                    <React.Fragment>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-danger">
                                {this.state.account.username}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/logout" className="nav-link">logout</NavLink>
                        </li> 
                    </React.Fragment> :
                    <React.Fragment>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">
                                login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sign-up" className="nav-link">
                                Sign Up
                            </NavLink>
                        </li>
                    </React.Fragment> 
                }
                </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default MainMenu;