import React, { Component } from 'react'
export default class ListItems extends Component {
  onDelete = (id) => {
    this.props.onDelete(id)
  }
  onOne = (id) => {
    this.props.onOne(id)
  }
  render() {
    let {id, title, tas} = this.props.category;
    return (
      <tr>
        <td>{tas + " " + title}</td>
        <td><a onClick={()=>this.onDelete(id)} className="text-danger">Delete</a> </td>
        <td><a onClick={()=>this.onOne(id)} className="text-primary">Edit</a></td>
      </tr>
    )
  }
}
