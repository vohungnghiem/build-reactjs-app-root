import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CatLink extends Component {
  render() {
    return (
        <div>
            <Link to={`/category/${this.props.cat.id}`} className="dropdown-item">
                {this.props.cat.title}
            </Link>
        </div>
    )
  }
}
