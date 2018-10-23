import React, { Component } from 'react';

export default class ShowImage extends Component {

  render() {
    return (
      <div>
            <img className="mw-100" src={this.props.showImage} alt="" />
            
      </div>
    )
  }
}
