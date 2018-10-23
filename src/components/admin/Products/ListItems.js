import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom';
export default class ListItems extends Component {
  

  render() {
    let {id, name,create_date} = this.props.product;
    return (
        <tr>
        <td >{id}</td>
        <td>{name}</td>
        <td>{create_date}</td>
        <td><NavLink to={`/admin/product/delete/${id}`} >delete</NavLink> </td>
        <td><NavLink to={`/admin/product/edit/${id}`}>edit</NavLink> </td>

      </tr>
    )
  }
}
