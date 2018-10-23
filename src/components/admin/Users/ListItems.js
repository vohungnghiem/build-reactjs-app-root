import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom';
export default class ListItems extends Component {
  

  render() {
    let {id, username, email, avatar, fullname, address, telephone, gender,create_date} = this.props.user;
    return (
        <tr>
        <td >{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td > <img style={{height: '20px'}} src={avatar} alt={username}/></td>
        <td>{fullname}</td>
        <td>{address}</td>
        <td>{telephone}</td>
        <td>{gender}</td>
        <td>{create_date}</td>
        <td><NavLink to={`/admin/user/delete/${id}`} >delete</NavLink> </td>
        <td><NavLink to={`/admin/user/edit/${id}`}>edit</NavLink> </td>

      </tr>
    )
  }
}
