import React, { Component } from 'react';


export default class Pagination extends Component {
    onClick = (a) => {
        this.props.onClick(a);
    }
  render() {
    return (
      <React.Fragment>
            <li className={`page-item ${this.props.current_page === this.props.page?'active': ''}`}>
                <a className="page-link" onClick={()=>this.onClick(this.props.page)}>
                    {this.props.page}
                </a>
            </li>
      </React.Fragment>
    )
  }
}
