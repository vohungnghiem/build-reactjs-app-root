import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class Menus extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <NavLink to="/admin" exact className="navbar-brand">Administration</NavLink>
        <button className="navbar-toggler hidden-lg-up" type="button" 
            data-toggle="collapse" data-target="#collapsibleNavId" 
            >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink to="/admin" exact  className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/user" className="nav-link">User</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/product" className="nav-link">Product</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/category" className="nav-link">Category</NavLink>
                </li>
            </ul>
            <div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink to={`/admin/user/edit/${this.props.account.id}`} className="nav-link">
                           {this.props.account.username}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/logout" className="nav-link">logout</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
