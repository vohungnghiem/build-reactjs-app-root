import React, { Component } from 'react'

export default class OptionCategory extends Component {
  render() {
    return (
      <React.Fragment>
          {
          <option value={this.props.option.id} >
            {this.props.tas + " " + this.props.option.title}
          </option>
          }
      </React.Fragment>
    )
  }
}
