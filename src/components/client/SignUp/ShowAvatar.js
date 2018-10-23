import React, { Component } from 'react';

export default class ShowAvatar extends Component {

  render() {
    return (
      <div>
            <img className="mw-100" src={this.props.showAvatar} alt="" />
            
      </div>
    )
  }
}
