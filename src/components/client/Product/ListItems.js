import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ListItems extends Component {
  render() {
    return (
        <div className="card-p col-md-3" >
        <img className="card-img-top" src={this.props.product.image}
          alt={this.props.product.name} />
        <div className="card-body">
          <h4 className="card-title">{this.props.product.name}</h4>
          <p className="card-text">{this.props.product.detail}</p>
          <NavLink to={`/product/${this.props.product.id}`} className="btn btn-primary">
            play
          </NavLink>
        </div>
      </div>
    )
  }
}
